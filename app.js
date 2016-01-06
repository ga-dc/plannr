var Map = function(){

  this.numMarkers = 0;
  this.geoJsonPlaces = [];
  self = this;

  // Submit button click listener
  $("#submit").on( "click", function(){
    event.preventDefault();
    var searchTerm = $("#destName").val().replace( / /g, "+" );
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

  // Generates map + tiling
  this.renderMap = function(){
    // create map
    var map = L.map('map').setView([43.0526173,-76.075001], 15);

// add tiling
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    // Replace the below properties with your `Map ID` and `Default Public Token` values you saved earlier, respectively.
    id: 'adrianshep.6058ab63',
    accessToken: 'pk.eyJ1IjoiYWRyaWFuc2hlcCIsImEiOiJjMDQ4MmUxZjYzYTFhNTMyMzllOTgxZDVkMTNiYjc2YyJ9.mnD-LFMbCuc3jzRosYYd3g'
  }).addTo(map);

  return map;
};

this.addMarkerPopup = function( lat, lng, name ){
  // Add marker and popup to map
  var loc = L.marker( [ lat, lng ] ).addTo( map );
  loc.bindPopup( name + "<br/><br/>" + "<span>What to see here:</span><ul><li>" + $( "#destNotes" ).val() + "</li></ul>" );
};

this.connectMarkers = function(){
  // Save length of geoJsonPlaces array
  var numPlace = self.geoJsonPlaces.length - 1

  // Generate geoJSON string
  var connection = {
    "type": "LineString",
    "coordinates": [
      [ self.geoJsonPlaces[ numPlace-1 ][0], self.geoJsonPlaces[ numPlace-1 ][1] ],
      [ self.geoJsonPlaces[ numPlace ][0], self.geoJsonPlaces[ numPlace ][1] ]
    ]
  };

  // Attach geoJSON object to map
  L.geoJson( connection ).addTo( map );
};
}

$( document ).ready( function(){
var app = new Map();
map = app.renderMap();
})
