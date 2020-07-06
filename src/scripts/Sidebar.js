import heartIcon from "../../public/images/heart.svg";

class Sidebar {
  constructor(state, contentContainer, map, search, controlMap) {
    this.appState = state;
    this.controlMap = controlMap;
    this.contentContainer = contentContainer;
    this.map = map;
    this.search = search;
  }

  update(state) {
    if (state.favorites.showFavorites) {
      return this.renderFavorites(state, state.favorites.favoritesList);
    }

    if (state.predictions.length > 0) {
      return this.renderPredictions(state.predictions);
    }

    if (state.place) {
      return this.renderSearched(state, state.place);
    }

    if(state.searchInput) {
      return this.renderPlaceNotFound();
    }

  }

  renderPlaceNotFound() {
    this.contentContainer.innerHTML = "";
    const notFound = document.createElement('h2');
    notFound.classList.add('not-found')
    notFound.innerText = `Nenhum resultado encontrado: ${this.appState.get().searchInput}`;
    this.contentContainer.appendChild(notFound);
    // this.contentContainer.innerHTML = '<h2>Deu ruim</h2>';
  }

  renderFavorites(state, favorites) {
    this.contentContainer.innerHTML = "";
    const favoritesTitle = document.createElement("h2");

    if (favorites.length === 0) {
      favoritesTitle.innerText = "Você ainda não salvou nenhum favorito.";
      return this.contentContainer.appendChild(favoritesTitle);
      
    }
    this.contentContainer.appendChild(favoritesTitle);
    const list = document.createElement("ul");
    list.classList.add("sidebar__favorites");
    this.contentContainer.appendChild(list);

    favorites.forEach((favorite) => {
      const place = document.createElement("li");
      place.classList.add("favorites__item");
      const name = document.createElement("span");
      name.classList.add("favorites__item__name");
      name.innerText = favorite.formatted_address;
      const favButton = document.createElement("button");
      favButton.classList.add("favorites__item__fav-button");
      favButton.innerHTML = heartIcon;
      place.appendChild(name);
      place.appendChild(favButton);
      list.appendChild(place);

      favButton.addEventListener("click", (e) => {
        e.stopPropagation();
        if (
          state.favorites.favoritesList.some(
            (item) => item.place_id === favorite.place_id
          )
        ) {
          place.classList.add("fade-out");
          place.addEventListener("webkitAnimationEnd", () =>
            this.removeFavorite(state, favorite)
          );
          place.addEventListener("animationend", () =>
            this.removeFavorite(state, favorite)
          );
        } else {
          this.addFavorite(state, favorite);
        }
      });

      place.addEventListener("click", (e) => {
        if (!e.target.classList.contains("favorites__item__fav-button")) {
          this.controlMap.renderSearched(favorite)
        }
      });
    });
  }

  renderSearched(state, place) {
    this.contentContainer.innerHTML = "";
    const resultsTitle = document.createElement("h2");
    resultsTitle.innerText =
      `Encontramos os seguintes resultados para sua busca: ${this.appState.get().searchInput}`;
    resultsTitle.classList.add("sidebar__results__title");
    this.contentContainer.appendChild(resultsTitle);
    const list = document.createElement("ul");
    list.classList.add("sidebar__searched");
    this.contentContainer.appendChild(list);
    const location = document.createElement("li");
    location.classList.add("sidebar__searched__item");
    const address = document.createElement("p");
    address.classList.add('sidebar__searched__name');
    address.innerText = place.formatted_address;
    const favButton = document.createElement("button");
    favButton.classList.add("sidebar__searched__fav-button");
    const checkIfIsFavorite = this.appState
      .get()
      .favorites.favoritesList.some((fav) => {
        return fav.place_id === place.place_id;
      });

    if (checkIfIsFavorite) {
      favButton.classList.add("sidebar__searched__fav-button--active");
    }
    favButton.innerHTML = heartIcon;
    location.appendChild(address);
    location.appendChild(favButton);
    list.appendChild(location);

    favButton.addEventListener("click", (e) => {
      if (
        state.favorites.favoritesList.some(
          (item) => item.place_id === place.place_id
        )
      ) {
        this.removeFavorite(state, place);
      } else {
        this.addFavorite(state, place);
      }
    });
  }

  renderPredictions(predictions) {
    this.contentContainer.innerHTML = "";
    const resultsTitle = document.createElement("h2");
    resultsTitle.innerText =
      `Encontramos os seguintes resultados para sua busca: ${this.appState.get().searchInput}`;
    resultsTitle.classList.add("sidebar__results__title");
    this.contentContainer.appendChild(resultsTitle);
    const list = document.createElement("ul");
    list.classList.add("sidebar__content__list");
    this.contentContainer.appendChild(list);

    predictions.forEach((prediction) => {
      const location = document.createElement("li");
      location.classList.add("sidebar__list__item");
      const mainText = document.createElement("p");
      mainText.classList.add("sidebar__list__item__main");
      mainText.innerText = prediction.structured_formatting.main_text || null;
      const secondaryText = document.createElement("span");
      secondaryText.classList.add("sidebar__list__item__secondary");
      secondaryText.innerText =
        prediction.structured_formatting.secondary_text || null;
      location.appendChild(mainText);
      location.appendChild(secondaryText);
      list.appendChild(location);

      location.addEventListener("click", () => {
        this.search.getPlace(prediction.place_id, this.appState.get().searchInput);
      });
    });
  }

  addFavorite(state, favorite) {
    const { favoritesList } = state.favorites;
    favoritesList.push(favorite);
    const newFavorites = {
      ...state.favorites,
      favoritesList,
    };

    this.appState.set({ ...state, favorites: newFavorites });
    this.appState.saveFavoritesToLocalStorage(newFavorites.favoritesList);
    this.appState.notify(this.appState.get());
  }

  removeFavorite(state, favorite) {
    const { favoritesList } = state.favorites;
    const newList = favoritesList.filter(
      (item) => item.place_id !== favorite.place_id
    );

    const newFavorites = {
      ...state.favorites,
      favoritesList: newList,
    };

    this.appState.set({ ...state, favorites: newFavorites });
    this.appState.saveFavoritesToLocalStorage(newFavorites.favoritesList);
    this.appState.notify(this.appState.get());
  }
}

export default Sidebar;
