

var Map = function(){

  this.numMarkers = 0;
  this.geoJsonPlaces = [];
  self = this;

  $("#submit").on("click", function(){
    event.preventDefault();
    var searchTerm = $("#placeName").val().replace( / /g, "+" );
    $.ajax({
      url: "http://api.opencagedata.com/geocode/v1/json?query=" + searchTerm + "&pretty=1&key=62ee540db24fba16c87a0ba5d353d3a7"
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

    var map = L.map("map").setView([38.9038829, -77.0360032], 1 );

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
      id: "my-id-key",
      accessToken: "my-access-token"
    }).addTo( map );

    return map;
  };

  this.addMarkerPopup = function( lat, lng, name ){
    // adding marker to map
    var loc = L.marker( [ lat, lng ] ).addTo( map );
    //adding popup to map
    loc.bindPopup( name + "<br/><br/>" + "<span>To-Do</span><ul><li>" + $( "#notes" ).val() + "</li></ul>" );
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
