// Instantiate map
var map = L.map('map').setView([38.9038829, -77.0360032], 15);

// Add tile layer to map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,

    // Replace the below properties with your `Map ID` and `Default Public Token` values you saved earlier, respectively.
    id: 'curtismn87.a28d8d53',
    accessToken: 'pk.eyJ1IjoiY3VydGlzbW44NyIsImEiOiI0NmVmZDZlZmIwN2Y5YzNjYzZlYzI0ODBhNGFhY2MyZSJ9.XGkgkWb-ZFNhkI1h62OUVw'
}).addTo(map);
var kanyeIcon = L.icon({
    iconUrl: 'http://24.media.tumblr.com/tumblr_m73zms46kS1rue873o1_250.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var generalAssembly = L.marker( [38.9048542, -77.0339403] ).addTo( map );

var dupontCircle = L.circle([38.9111048, -77.042613,15], 500, {
    color: 'pink',
    fillColor: 'red',
    fillOpacity: 0.5
}).addTo(map);

// Polygon
var washington = L.polygon([
    [38.934347, -77.119758],
    [38.995421, -77.041006],
    [38.892885, -76.909599],
    [38.791605, -77.038860]
]).addTo(map);

var coords = [];
var clickPopup = L.popup();

map.on( "click", function( event ){
  console.log(event);
  // var coords = [];
  clickPopup
  .setLatLng( event.latlng )
  .setContent( "Coordinates: " + event.latlng.toString() )
  .openOn( map );
  coords.push([event.latlng.lat, event.latlng.lng]);
  console.log(coords);
});

var monumentTrail = {
  "type": "Feature",

  "properties": {
    "name": "Monuments Trail",
    "city": "Washington, DC",
    "numStops": 3
  },
  "geometry": {
    "type": "MultiLineString",
    "coordinates": [
      [[-77.0352791,38.8894838], [-77.050176,38.8892686]],
      [[-77.050176,38.8892686], [-77.0364707,38.8813726]],
      [[-77.0364707,38.8813726], [-77.0090505,38.8899389]]
    ]
  }
};

var submitButton = document.getElementById("submitCoord");
var latCoord = document.getElementById("latCoord");
var longCoord = document.getElementById("longCoord");
submitButton.addEventListener("click", function(event){
  event.preventDefault();
  var latCoordValue = 0;
  var longCoordValue = 0;
  latCoordValue = parseFloat(latCoord.value).toFixed(10);
  longCoordValue = parseFloat(longCoord.value).toFixed(10);
  console.log(latCoordValue);
  console.log(longCoordValue);
  L.marker([latCoordValue, longCoordValue]).addTo(map);
  // .bindPopup('Kanye wuz here')
  // .openPopup();
});
