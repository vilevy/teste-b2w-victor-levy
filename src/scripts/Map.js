class Map {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  update(state) {
    if (
      state.favorites.showFavorites &&
      state.favorites.favoritesList.length > 0
    ) {
      return this.renderFavorites(state.favorites.favoritesList);
    }

    if (state.place) {
      return this.renderSearched(state.place);
    }

  }

  renderFavorites(favorites) {
    this.removeMarkers();
    const bounds = new google.maps.LatLngBounds();
    favorites.forEach((favorite) => {
      const marker = this.addMarker(favorite);
      bounds.extend(marker.position);
    });

    this.showMarkers();

    if (favorites.length === 1) {
      this.map.setCenter(favorites[0].geometry.location);
      this.map.setZoom(15);
    } else {
      this.map.fitBounds(bounds);
    }
  }

  renderSearched(place) {
    this.removeMarkers();
    this.map.setCenter(place.geometry.location);
    this.map.setZoom(15);
    this.addMarker(place);
  }


  addMarker(location) {
    const marker = new google.maps.Marker({
      position: location.geometry.location,
      map: this.map,
    });
    this.markers.push(marker);
    return marker;
  }

  removeMarkers() {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
  }

  showMarkers() {
    this.markers.forEach((marker, index) => marker.setMap(this.map));
  }
}

export default Map;
