import initMap from "./scripts/initMap";

import "../src/style/style.scss";


const addMapsApiScript = new Promise((resolve, reject) => {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&libraries=places`;
  script.addEventListener("load", () => resolve(script), false);
  script.addEventListener("error", () => reject(script), false);
  document.body.appendChild(script);
});

const renderScriptLoadError = () => {
  const errorMessage = document.createElement('span');
  errorMessage.classList.add('api-load-error');
  errorMessage.innerHTML = 'Erro ao carregar o mapa';
  document.querySelector('#map').appendChild(errorMessage);
}

addMapsApiScript.then(() => initMap()).catch(renderScriptLoadError());
