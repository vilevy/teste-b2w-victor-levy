const initMap = () => {
  const uluru = {
    lat: -25.344,
    lng: 131.036,
  };

  const mapDiv = document.querySelector("#map");
  const map = new google.maps.Map(mapDiv, { zoom: 15, center: uluru });
  const marker = new google.maps.Marker({ position: uluru, map: map });
};

export default initMap;