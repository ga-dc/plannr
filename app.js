$(document).ready(function(){

  var myMap = L.map("map").setView([38.934944, -77.037045], 15);

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    maxZoom: 18,
    id: "ly900.okh88o7p",
    accessToken: "pk.eyJ1IjoibHk5MDAiLCJhIjoiY2lqMzhudzhwMDA0anR0a25reHEyNnhpNSJ9.rSE15jZBQeMwkzATpFc6-w"
  }).addTo(myMap);










}); //ends document.ready
