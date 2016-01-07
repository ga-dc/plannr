$(document).ready(function(){

  var myMap = L.map("map").setView([42.87, -97.38], 1);

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    maxZoom: 18,
    id: "ly900.okh88o7p",
    accessToken: "pk.eyJ1IjoibHk5MDAiLCJhIjoiY2lqMzhudzhwMDA0anR0a25reHEyNnhpNSJ9.rSE15jZBQeMwkzATpFc6-w"
  }).addTo(myMap);


  $("button").on("click", capturePlace);

  function capturePlace(){
    var userPlace = $("input#place").val();
    console.log(userPlace);
    ajaxCoordinates(userPlace);
  };

  function ajaxCoordinates(userPlace){
    var url = "https://api.opencagedata.com/geocode/v1/geojson?q='" + userPlace + "'&key=d6cd180045b55f5870050809aa14629e&pretty=1";

    $.get(url, function(response){
      console.log(response);
    })
    .done(function(response){
      var coordinates = response.features[0].geometry.coordinates;
      var lat = coordinates[1];
      var long = coordinates[0];
      console.log(lat);
      console.log(long);
      createMarker(lat, long);
    })
    .fail(function(response) {
      console.log("error");
    })
    .always(function(response) {
      console.log("always");
    });

  }; // ends ajacRequest function

  function createMarker(lat, long){
    console.log(lat);
    console.log(long);
    L.marker([lat, long]).addTo(myMap);  
  }









}); //ends document.ready
