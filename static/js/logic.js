// Earthquake API URL Link
let eqURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Create a selectable range of layer types.  Each user needs an API Key for the variable API_KEY
let outdoorsBKG = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.outdoors",
  accessToken: API_KEY
});

let satelliteBKG = outdoorsBKG;
satelliteBKG.id = "mapbox.satellite";

let streetsBKG = outdoorsBKG;
streetsBKG.id = "mapbox.streets";

// Create a map with the above layers
let map = L.map("map", {
    center: [37.7749, -122.431297],
    zoom: 5,
    layers: [outdoorsBKG, satelliteBKG, streetsBKG]
});

// Add the outdoorsBKG layer to the map by default
outdoorsBKG.addTo(map)