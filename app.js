$(document).ready(function(){

  var myMap = L.map("map").setView([42.87, -97.38], 1);

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    maxZoom: 18,
    id: "ly900.okh88o7p",
    accessToken: "pk.eyJ1IjoibHk5MDAiLCJhIjoiY2lqMzhudzhwMDA0anR0a25reHEyNnhpNSJ9.rSE15jZBQeMwkzATpFc6-w"
  }).addTo(myMap);

  var url = "https://api.opencagedata.com/geocode/v1/geojson?q=Rua%20Cafel%C3%A2ndia,+Carapicu%C3%ADba,+Brasil&key=d6cd180045b55f5870050809aa14629e&pretty=1";

  $.get(url, function(response){
    console.log(response);
  });









}); //ends document.ready
