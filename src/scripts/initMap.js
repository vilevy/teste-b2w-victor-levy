import State from './State';
import Map from './Map';
import Sidebar from './Sidebar';
import Search from './Search';

const mapContainer = document.querySelector('#map');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form__input');
const showFavoritesButton = document.querySelector('.show-favorites');
const sidebarContent = document.querySelector('.sidebar__content');

const initialCenter = { lat: -23.594485, lng: -46.686013 };


const initMap = () => {
  const googleMap = new google.maps.Map(mapContainer, { zoom: 15, center: initialCenter });
  const state = new State();
  const search = new Search(state);
  const map = new Map(googleMap);
  const sidebar = new Sidebar(state, sidebarContent, googleMap, search, map);

  state.addObserver(map);
  state.addObserver(sidebar);

  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const searchInput = e.target.search.value;
    if(!searchInput) {
      return
    }

    e.target.search.value = "";

    search.search(searchInput);
  })

  showFavoritesButton.addEventListener('click', () => {
    const oldState = state.get();
    const {favorites} = oldState;

    if (favorites.showFavorites) {
      sidebarContent.innerHTML = '';
    }

    favorites.showFavorites = !favorites.showFavorites;
    state.set({...oldState, favorites});
    state.notify(state.get());
  });

  
}

export default initMap;