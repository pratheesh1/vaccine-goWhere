// Create map and base tile layer

const mapBoxToken =
  "pk.eyJ1IjoicHJhdGhlZXNoMSIsImEiOiJja3Q1NzE3b2owNW1uMnVwN3llbmUyajhnIn0.bGFsIBVXDrEsRdacm-aBzg";

/** @function
 * @name createMap
 * Return new map instance given ID, coordinates and zoom*/
function createMap(divID, coordinates, zoom) {
  // create map instance
  var map = L.map(divID, { attributionControl: false }).setView(
    coordinates,
    zoom
  );
  // create tile layer
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: mapBoxToken,
    }
  ).addTo(map);

  // returns map with tile layer
  return map;
}