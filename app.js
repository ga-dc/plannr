// OpenCage APIKey: 5e395c769e9e6f02ac0f4df68297fd7b
var map = L.map('map').setView([39.82, -98.58], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  id: 'jkoul.4eecdb7c',
  accessToken: 'pk.eyJ1IjoiamtvdWwiLCJhIjoiMDNjNzYzOTBmMzhhMmVmMDgwZmU1YThmNTQ4YzZkMzIifQ.Cp4tjghrTG5DJ4SRgxvcaw',
  maxZoom: 18
}).addTo(map)

$(".address-form").on("submit", function(event){
  event.preventDefault();
  console.log("address submitted");
  var searchEntry = $('#location').val()
  var note = $('#locnote').val()
  $.ajax({
    url: "http://api.opencagedata.com/geocode/v1/json?q=" + searchEntry + "&pretty=1&key=5e395c769e9e6f02ac0f4df68297fd7b"
  }).done(function(response){
    console.log(response);
    var lat = response.results[0].geometry.lat
    var lon = response.results[0].geometry.lng
    L.marker( [lat, lon] ).addTo(map).bindPopup( "<h3>Location: " + searchEntry + "</h3><p>Coordinates: [" + lat + ", " + lon + "]</p><p>Note: " + note + "</p>");
      }).fail(function(){
    console.log("ajax request fails!")
  })
})

var marker = $(".leaflet-clickable")
var clickPopup = L.popup();

marker.on("click", function(event){
  console.log(event);
  clickPopup
  .setContent( "<h3>Address: " + + "</h3><p>Coordinates: " + + "</p>")
  .openOn(map)
})

var roadTrip = {
  "type": "Feature",

  // Can set "properties" to whatever we want.
  "properties": {
    "name": "My Road Trip",
    "city": "Washington, DC",
    "numStops": num
  },

  // Set geometry type here.
  "geometry": {
    "type": "MultiLineString",
    "coordinates": [
    ]
  }
}

L.geoJson( roadTrip ).addTo( map );
