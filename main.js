!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="red" clip-rule="evenodd"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"></path></svg>'},function(e,t,r){var a=r(2),n=r(3);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};a(n,i);e.exports=n.locals||{}},function(e,t,r){"use strict";var a,n=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),o=[];function s(e){for(var t=-1,r=0;r<o.length;r++)if(o[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},a=[],n=0;n<e.length;n++){var i=e[n],c=t.base?i[0]+t.base:i[0],d=r[c]||0,l="".concat(c," ").concat(d);r[c]=d+1;var p=s(l),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(o[p].references++,o[p].updater(u)):o.push({identifier:l,updater:v(u,t),references:1}),a.push(l)}return a}function d(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var n=r.nc;n&&(a.nonce=n)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,p=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,r,a){var n=r?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=p(t,n);else{var i=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function f(e,t,r){var a=r.css,n=r.media,i=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var h=null,m=0;function v(e,t){var r,a,n;if(t.singleton){var i=m++;r=h||(h=d(t)),a=u.bind(null,r,i,!1),n=u.bind(null,r,i,!0)}else r=d(t),a=f.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<r.length;a++){var n=s(r[a]);o[n].references--}for(var i=c(e,t),d=0;d<r.length;d++){var l=s(r[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}r=i}}}},function(e,t,r){(t=r(4)(!1)).push([e.i,"@keyframes scale-up-back{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}@keyframes teste{0%{opacity:0}100%{opacity:1}}*{margin:0;padding:0;box-sizing:border-box;border:none;outline:none}html,body{height:100%}li{list-style:none}main{width:100%;height:100%;max-height:100%;display:flex;flex-direction:column}@media (min-width: 999px){main{flex-direction:row}}.sidebar{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;max-height:100%;background:#F9F9F9;color:#1d1d1d;padding:1rem;overflow-y:auto;flex:0 1 auto}@media (min-width: 999px){.sidebar{height:100%;width:25%}}.sidebar .search-form{padding:.5rem 0;display:flex;justify-content:space-between;width:100%}.sidebar .search-form__input{width:100%;margin-right:1rem;padding:.5rem;border-radius:.3rem}.sidebar .search-form__button{padding:.5rem 1rem;border-radius:.3rem;transition:.3s ease;background:#56A0F9}.sidebar .search-form__button:hover{cursor:pointer;background:#6989F5}.sidebar__content{width:100%}.sidebar__results__title{font-size:1.2rem;margin:1.2rem 0}.sidebar__favorites{border:3px solid #56A0F9;border-radius:.3rem;background:rgba(86,160,249,0.3);margin-top:0.5rem;position:relative}.sidebar__favorites:before{content:'';position:absolute;background:#56A0F9;height:calc(0.5rem + 3px);width:5px;top:calc(-0.5rem - 3px);left:calc(50% - 2.5px)}.sidebar__searched{margin-top:1rem}.sidebar__searched__item{padding:.5rem;display:flex;justify-content:space-between;align-items:center}.sidebar__searched__name{margin-right:.5rem}.sidebar__searched__fav-button{width:24px;height:24px;background:none}.sidebar__searched__fav-button svg{fill:#1d1d1d;width:24px;height:24px}.sidebar__searched__fav-button--active{animation-name:scale-up-back;animation-duration:.3s;animation-timing-function:ease}.sidebar__searched__fav-button--active svg{fill:#cf1717}.sidebar__searched__fav-button:hover{cursor:pointer}.sidebar__searched__fav-button:hover svg{fill:#f56262;width:24px;height:24px}.sidebar__list__item{padding:.5rem .5rem 1rem .5rem;border-bottom:1px solid #1d1d1d;transition:.3s ease}.sidebar__list__item:hover{cursor:pointer;background:#b3b3b3}.sidebar__list__item:last-of-type{border-bottom:none}.sidebar__list__item__main{font-weight:bold}.sidebar__list__item__secondary{font-size:.8rem}.sidebar .favorites__item{display:flex;padding:.5rem .5rem 1rem .5rem;border-bottom:1px solid #1d1d1d;display:flex;justify-content:space-between;align-items:center}.sidebar .favorites__item:hover{cursor:pointer;background:#6989F5}.sidebar .favorites__item:last-of-type{border-bottom:none}.sidebar .favorites__item__name{margin-right:.5rem}.sidebar .favorites__item__fav-button{width:24px;height:24px;background:none}.sidebar .favorites__item__fav-button:hover{cursor:pointer}.sidebar .favorites__item__fav-button svg{fill:#cf1717;width:24px;height:24px}.map{width:100%;height:100%;flex:1}.api-load-error{color:red;font-size:22px}.show-favorites{padding:.5rem 1rem;background:#56A0F9;border-radius:.3rem;width:50%}.show-favorites:hover{cursor:pointer;background:#6989F5}.fade-out{animation-name:teste;animation-duration:.3s;animation-direction:reverse}.sidebar__content__list,.sidebar__favorites,.sidebar__searched{animation-name:teste;animation-duration:.3s}.not-found{font-size:1.2rem;margin-top:2rem;color:#cf1717}\n",""]),e.exports=t},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var n=(o=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([n]).join("\n")}var o,s,c;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,a){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(n[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);a&&n[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},function(e,t,r){"use strict";r.r(t);var a=class{constructor(){this.state={searchInput:null,predictions:[],place:null,favorites:{showFavorites:!1,favoritesList:this.getFavoritesFromLocalStorage()||[]}},this.observers=[]}getFavoritesFromLocalStorage(){return JSON.parse(localStorage.getItem("favoritesList"))}saveFavoritesToLocalStorage(e){localStorage.setItem("favoritesList",JSON.stringify(e))}addObserver(e){this.observers.push(e)}removeObserver(e){this.observers.filter(t=>t!==e)}notify(e){this.observers.length>0&&this.observers.forEach(t=>t.update(e))}get(){return this.state}set(e){this.state=e,this.notify(this.get())}};var n=class{constructor(e){this.map=e,this.markers=[]}update(e){return e.favorites.showFavorites&&e.favorites.favoritesList.length>0?this.renderFavorites(e.favorites.favoritesList):e.place?this.renderSearched(e.place):void 0}renderFavorites(e){this.removeMarkers();var t=new google.maps.LatLngBounds;e.forEach(e=>{var r=this.addMarker(e);t.extend(r.position)}),this.showMarkers(),1===e.length?(this.map.setCenter(e[0].geometry.location),this.map.setZoom(15)):this.map.fitBounds(t)}renderSearched(e){this.removeMarkers(),this.map.setCenter(e.geometry.location),this.map.setZoom(15),this.addMarker(e)}addMarker(e){var t=new google.maps.Marker({position:e.geometry.location,map:this.map});return this.markers.push(t),t}removeMarkers(){this.markers.forEach(e=>e.setMap(null)),this.markers=[]}showMarkers(){this.markers.forEach((e,t)=>e.setMap(this.map))}},i=r(0),o=r.n(i);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=class{constructor(e,t,r,a,n){this.appState=e,this.controlMap=n,this.contentContainer=t,this.map=r,this.search=a}update(e){return e.favorites.showFavorites?this.renderFavorites(e,e.favorites.favoritesList):e.predictions.length>0?this.renderPredictions(e.predictions):e.place?this.renderSearched(e,e.place):e.searchInput?this.renderPlaceNotFound():void 0}renderPlaceNotFound(){this.contentContainer.innerHTML="";var e=document.createElement("h2");e.classList.add("not-found"),e.innerText="Nenhum resultado encontrado: ".concat(this.appState.get().searchInput),this.contentContainer.appendChild(e)}renderFavorites(e,t){this.contentContainer.innerHTML="";var r=document.createElement("h2");if(0===t.length)return r.innerText="Você ainda não salvou nenhum favorito.",this.contentContainer.appendChild(r);this.contentContainer.appendChild(r);var a=document.createElement("ul");a.classList.add("sidebar__favorites"),this.contentContainer.appendChild(a),t.forEach(t=>{var r=document.createElement("li");r.classList.add("favorites__item");var n=document.createElement("span");n.classList.add("favorites__item__name"),n.innerText=t.formatted_address;var i=document.createElement("button");i.classList.add("favorites__item__fav-button"),i.innerHTML=o.a,r.appendChild(n),r.appendChild(i),a.appendChild(r),i.addEventListener("click",a=>{a.stopPropagation(),e.favorites.favoritesList.some(e=>e.place_id===t.place_id)?(r.classList.add("fade-out"),r.addEventListener("webkitAnimationEnd",()=>this.removeFavorite(e,t)),r.addEventListener("animationend",()=>this.removeFavorite(e,t))):this.addFavorite(e,t)}),r.addEventListener("click",e=>{e.target.classList.contains("favorites__item__fav-button")||this.controlMap.renderSearched(t)})})}renderSearched(e,t){this.contentContainer.innerHTML="";var r=document.createElement("h2");r.innerText="Encontramos os seguintes resultados para sua busca: ".concat(this.appState.get().searchInput),r.classList.add("sidebar__results__title"),this.contentContainer.appendChild(r);var a=document.createElement("ul");a.classList.add("sidebar__searched"),this.contentContainer.appendChild(a);var n=document.createElement("li");n.classList.add("sidebar__searched__item");var i=document.createElement("p");i.classList.add("sidebar__searched__name"),i.innerText=t.formatted_address;var s=document.createElement("button");s.classList.add("sidebar__searched__fav-button"),this.appState.get().favorites.favoritesList.some(e=>e.place_id===t.place_id)&&s.classList.add("sidebar__searched__fav-button--active"),s.innerHTML=o.a,n.appendChild(i),n.appendChild(s),a.appendChild(n),s.addEventListener("click",r=>{e.favorites.favoritesList.some(e=>e.place_id===t.place_id)?this.removeFavorite(e,t):this.addFavorite(e,t)})}renderPredictions(e){this.contentContainer.innerHTML="";var t=document.createElement("h2");t.innerText="Encontramos os seguintes resultados para sua busca: ".concat(this.appState.get().searchInput),t.classList.add("sidebar__results__title"),this.contentContainer.appendChild(t);var r=document.createElement("ul");r.classList.add("sidebar__content__list"),this.contentContainer.appendChild(r),e.forEach(e=>{var t=document.createElement("li");t.classList.add("sidebar__list__item");var a=document.createElement("p");a.classList.add("sidebar__list__item__main"),a.innerText=e.structured_formatting.main_text||null;var n=document.createElement("span");n.classList.add("sidebar__list__item__secondary"),n.innerText=e.structured_formatting.secondary_text||null,t.appendChild(a),t.appendChild(n),r.appendChild(t),t.addEventListener("click",()=>{this.search.getPlace(e.place_id,this.appState.get().searchInput)})})}addFavorite(e,t){var{favoritesList:r}=e.favorites;r.push(t);var a=c(c({},e.favorites),{},{favoritesList:r});this.appState.set(c(c({},e),{},{favorites:a})),this.appState.saveFavoritesToLocalStorage(a.favoritesList),this.appState.notify(this.appState.get())}removeFavorite(e,t){var{favoritesList:r}=e.favorites,a=r.filter(e=>e.place_id!==t.place_id),n=c(c({},e.favorites),{},{favoritesList:a});this.appState.set(c(c({},e),{},{favorites:n})),this.appState.saveFavoritesToLocalStorage(n.favoritesList),this.appState.notify(this.appState.get())}};function p(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(a,n)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function o(e){p(i,a,n,o,s,"next",e)}function s(e){p(i,a,n,o,s,"throw",e)}o(void 0)}))}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=class{constructor(e){this.appState=e}search(e){var{favorites:t}=this.appState.get();t.showFavorites=!1,this.fetchPredictions(e).then(r=>{1===r.predictions.length?this.getPlace(r.predictions[0].place_id,e):this.appState.set({searchInput:e,predictions:r.predictions,place:null,favorites:t})})}getPlace(e,t){this.fetchPlace(e).then(e=>{this.appState.set(h(h({},this.appState.get()),{},{searchInput:t,predictions:[],place:e.results[0]}))})}fetchPredictions(e){return u((function*(){var t=encodeURI(e),r="https://maps.googleapis.com/maps/api/place/autocomplete/json?input=".concat(t,"&types=geocode&key=").concat("AIzaSyCOPHB1jzinbbEi3mrXptQh5AAZpQem7YU"),a=yield fetch(r);return yield a.json()}))()}fetchPlace(e){return u((function*(){var t="https://maps.googleapis.com/maps/api/geocode/json?place_id=".concat(e,"&key=").concat("AIzaSyCOPHB1jzinbbEi3mrXptQh5AAZpQem7YU"),r=yield fetch(t);return yield r.json()}))()}};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=document.querySelector("#map"),w=document.querySelector(".search-form"),O=(document.querySelector(".search-form__input"),document.querySelector(".show-favorites")),j=document.querySelector(".sidebar__content"),x={lat:-23.594485,lng:-46.686013},L=()=>{var e=new google.maps.Map(y,{zoom:15,center:x}),t=new a,r=new v(t),i=new n(e),o=new l(t,j,e,r,i);t.addObserver(i),t.addObserver(o),w.addEventListener("submit",e=>{e.preventDefault();var t=e.target.search.value;t&&(e.target.search.value="",r.search(t))}),O.addEventListener("click",()=>{var e=t.get(),{favorites:r}=e;r.showFavorites&&(j.innerHTML=""),r.showFavorites=!r.showFavorites,t.set(_(_({},e),{},{favorites:r})),t.notify(t.get())})},S=(r(1),new Promise((e,t)=>{var r=document.createElement("script");r.type="text/javascript",r.src="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyCOPHB1jzinbbEi3mrXptQh5AAZpQem7YU","&libraries=places"),console.log("aqui",r.src),r.addEventListener("load",()=>e(r),!1),r.addEventListener("error",()=>t(r),!1),document.body.appendChild(r)}));S.then(()=>L()).catch(()=>{return(e=document.createElement("span")).classList.add("api-load-error"),e.innerHTML="Erro ao carregar o mapa",void document.querySelector("#map").appendChild(e);var e})}]);