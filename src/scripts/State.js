class State {
  constructor() {
    this.state = {
      searchInput: null,
      predictions: [],
      place: null,
      favorites: {
        showFavorites: false,
        favoritesList: this.getFavoritesFromLocalStorage() || []
      }
    };
    this.observers = [];
  }

  getFavoritesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('favoritesList'));
  }

  saveFavoritesToLocalStorage(favorites) {
    localStorage.setItem('favoritesList', JSON.stringify(favorites));
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers.filter(item => item !== observer);
  }

  notify(data) {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer.update(data));
    }
  }

  get() {
    return this.state;
  }

  set(newState) {
    this.state = newState;
    this.notify(this.get());
  }
}

export default State;