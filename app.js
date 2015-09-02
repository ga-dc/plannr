var Map = function(){

  // Event listeners
  $("#submit").on( "click", function(){
    event.preventDefault();
    var searchTerm = $("#placeName").val();
    searchTerm = searchTerm.replace( / /g, "+" );
    $.ajax({
      url: "http://api.opencagedata.com/geocode/v1/json?query=" + searchTerm + "&pretty=1&key=62ee540db24fba16c87a0ba5d353d3a7"
    }).done( function( res ){
      console.log( res );
      var lat = res.results[0].geometry.lat;
      var lng = res.results[0].geometry.lng;
      var name = res.results[0].components.attraction || res.results[0].components.building
      var loc = L.marker( [ lat, lng ] ).addTo( map );
      loc.bindPopup( name + "<br/><br/>" + "<span>To-Do</span><ul><li>" + $( "#placeTodo" ).val() + "</li></ul>" );
    });
  });

  // Generates map + tiling
  this.renderMap = function(){
    var map = L.map( "map" ).setView( [38.9038829, -77.0360032], 5 );

    L.tileLayer( "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      maxZoom: 18,
      id: "amaseda.674e6d2d",
      accessToken: "pk.eyJ1IjoiYW1hc2VkYSIsImEiOiI0YWY3MzQxYjIwMWUwZjQ1Mjc0MDBkNGVhOGVlNWUyOCJ9.bSlBmauhEsW9xl8jEY2p3w"
    }).addTo( map );

    return map;
  };
}

$( document ).ready( function(){
  var app = new Map();
  map = app.renderMap();
})
