var map = L.map('map').setView([38.9038829, -77.0360032], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 20,

    // Replace the below properties with your `Map ID` and `Default Public Token` values you saved earlier, respectively.
    id: 'skey08.0cc23e00',
    accessToken: 'pk.eyJ1Ijoic2tleTA4IiwiYSI6ImQ0MjIxNjIxMzY2ZTVkYzg4MzFlMzRkNWRmOTQ5MTE3In0.Nr7IEd2CJDTO3Dh1KeVOhQ'
}).addTo(map);

var generalAssembly = L.marker( [38.9048542, -77.0339403] ).addTo( map );

var markers = [
  [40.7033127,  -73.979681],
  [37.7577,      -122.4376],
  [35.843768,  -78.6450559],
  [41.8337329, -87.7321555]
];

for ( i = 0 ; i < markers.length ; i++ ){
  L.marker(markers[i]).addTo(map)
};

var dupontCircle = L.circle([38.9111048, -77.042613,15], 500, {
    color: 'pink',
    fillColor: 'red',
    fillOpacity: 0.5
}).addTo(map);

generalAssembly.bindPopup(
  "<h3>General Assembly DC</h3><p>1133 15th St., NW</p><p>8th Floor</p><p>Washington, DC 20005</p>"
)

var clickPopup = L.popup();

map.on( "click", function( event ){
  clickPopup
  .setLatLng( event.latlng )
  .setContent( "Coordinates: " + event.latlng.toString() )
  .openOn( map );
})

var monuments = {
  "type": "Feature",

  "properties": {
    "name": "Monuments Trail",
    "city": "Washington, DC",
    "numStops": 3
  },

  "geometry": {
    "type": "MultiLineString",
    "coordinates": [
      [[-77.0352791,38.8894838],[-77.050176,38.8892686]],
      [[-77.050176,38.8892686], [-77.0364707,38.8813726]],
      [[-77.0364707,38.8813726],[-77.0090505,38.8899389]]
    ]
  }
}

L.geoJson( monuments ).addTo( map );


var loc = $("#loc").val()

$("#submit").on("click", function(){
  event.preventDefault();
  var searchTerm = $("#loc").val().replace(/ /g, "+");
  $.ajax({
    url: "http://api.opencagedata.com/geocode/v1/json?query=" + searchTerm + "&pretty=1&key=62ee540db24fba16c87a0ba5d353d3a7"
  }).done( function( res ){
    response = res.results[0];

    // Save response values: latitude, longitude, location name
    var lat = response.geometry.lat;
    var lng = response.geometry.lng;
    var name = response.components.attraction || response.components.building
    self.geoJsonPlaces.push([ lng, lat ]);

    // Run rendering methods for markers, popups and, if necessary, lines
    self.addMarkerPopup( lat, lng, name );
    self.numMarkers++;
    if( self.numMarkers > 1 ){
      self.connectMarkers();
    }
  });
});
