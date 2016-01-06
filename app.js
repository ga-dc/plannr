var map = L.map("map").setView([38.977554,-78.255478], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    id: 'rewarren17.45dfc1d7',
    accessToken: 'pk.eyJ1IjoicmV3YXJyZW4xNyIsImEiOiI5ODRmNmRhNmRmYmViNjY1NzJlNThhZGQ2ZTE5MGQ4MCJ9.BZwVN4HQhbQtXtuHRxmm9A',
    maxZoom: 18
}).addTo(map);

var redhawk = L.marker([38.977554,-78.255478]).addTo(map);

redhawk.bindPopup("<h3>HOME</h3>");

var userLocation;
var tripSpots = [];

$("#submit").on("click", function(){
  alert("Sounds awesome!");
  userLocation = $("#city").val();
  tripSpots.push(userLocation);
});

console.log(tripSpots);
