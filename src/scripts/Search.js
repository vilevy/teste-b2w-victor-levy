class Search {
  constructor(state) {
    this.appState = state;
  }

  search(searchInput) {
    const { favorites } = this.appState.get();
    favorites.showFavorites = false;

    this.fetchPredictions(searchInput)
      .then(results => {
        if (results.predictions.length === 1) {
          this.getPlace(results.predictions[0].place_id, searchInput);
        } else {
          this.appState.set({
            searchInput,
            predictions: results.predictions,
            place: null,
            favorites,
          });
        }
      })
  }

  getPlace(placeId, searchInput) {
    this.fetchPlace(placeId)
      .then(result => {
        this.appState.set({
        ...this.appState.get(),
        searchInput,
        predictions: [],
        place: result.results[0],
      });
    })
  }

  async fetchPredictions(searchInput) {
    const encodedSearchInput = encodeURI(searchInput);
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodedSearchInput}&types=geocode&key=${process.env.MAPS_API_KEY}`;

    let result = await fetch(url);
    let data = await result.json();
    return data;
  }

  async fetchPlace(placeId) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${process.env.MAPS_API_KEY}`;
      let result = await fetch(url);
      let data = await result.json()
      return data;
  }
}

export default Search;
