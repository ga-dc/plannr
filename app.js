var Map = function(){

  this.numMarkers = 0;
  this.geoJsonPlaces = [];
  self = this;

  $("#submit").on( "click", function(){
    event.preventDefault();
    var searchTerm = $("#placeName").val().replace( / /g, "+" );
    $.ajax({
      url: "http://api.opencagedata.com/geocode/v1/json?query=" + searchTerm + "pk.eyJ1IjoiYXNoYWhyeSIsImEiOiJlMTczODI5NDM4ZGFlNTczOTFmNmU4NWJkNDA4YjRjMCJ9.ZrovqM1maDOf-C2BRx07bQ"
    }).done( function( res ){
      response = res.results[0];

      
      var lat = response.geometry.lat;
      var lng = response.geometry.lng;
      var name = response.components.attraction || response.components.building
      self.geoJsonPlaces.push([ lng, lat ]);

     
      self.addMarkerPopup( lat, lng, name );
      self.numMarkers++;
      if( self.numMarkers > 1 ){
        self.connectMarkers();
      }
    });
  });


  this.renderMap = function(){
    // Create map
    var map = L.map( "map" ).setView( [38.9038829, -77.0360032], 5 );

    // Add tiling
    L.tileLayer( "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      maxZoom: 18,
      id: "amaseda.674e6d2d",
      accessToken: "pk.eyJ1IjoiYXNoYWhyeSIsImEiOiJlMTczODI5NDM4ZGFlNTczOTFmNmU4NWJkNDA4YjRjMCJ9.ZrovqM1maDOf-C2BRx07bQ"
    }).addTo( map );

    return map;
  };

  this.addMarkerPopup = function( lat, lng, name ){
   
    var loc = L.marker( [ lat, lng ] ).addTo( map );
    loc.bindPopup( name + "<br/><br/>" + "<span>To-Do</span><ul><li>" + $( "#placeTodo" ).val() + "</li></ul>" );
  };

  this.connectMarkers = function(){
   
    var numPlace = self.geoJsonPlaces.length - 1

  
    var connection = {
      "type": "LineString",
      "coordinates": [
        [ self.geoJsonPlaces[ numPlace-1 ][0], self.geoJsonPlaces[ numPlace-1 ][1] ],
        [ self.geoJsonPlaces[ numPlace ][0], self.geoJsonPlaces[ numPlace ][1] ]
      ]
    };

   
    L.geoJson( connection ).addTo( map );
  };
}

$( document ).ready( function(){
  var app = new Map();
  map = app.renderMap();
})