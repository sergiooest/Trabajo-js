document.links[3].className = "borde";
// Declaracion de variables
var latitud = 40.44122496089721;
var longitud = -3.697437056621633;
var origen;
var destino;

// Obtencion de la coordenadas del unsuario
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(coordenadas);
}

function coordenadas(posicion) {
  latitud = posicion.coords.latitude;
  longitud = posicion.coords.longitude;

  initMap();
}

function initMap() {
  // Inicilizando el servicio para calcular la ruta
  const directionsService = new google.maps.DirectionsService();
  // Inicilizando el servicio para dibujar la ruta
  const directionsRenderer = new google.maps.DirectionsRenderer();
  //Creando el Mapa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 40.44122496089721, lng: -3.697437056621633 },
  });
  // Mostrando la ruta en el mapa
  directionsRenderer.setMap(map);

  // Guardando Coordenadas
  origen = new google.maps.LatLng(latitud, longitud);
  destino = new google.maps.LatLng(40.44122496089721, -3.697437056621633);

  calculateAndDisplayRoute(directionsService, directionsRenderer);
}
//Funcion para calcular y mostrar la ruta
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  directionsService
    .route({
      origin: origen,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
}

window.initMap = initMap;
