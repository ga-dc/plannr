$(document).ready(function(){

  //create map
  var map = L.map('map').setView([37.6,-95.665], 5);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'arkinjb.62ef5a99',
      accessToken: 'pk.eyJ1IjoiYXJraW5qYiIsImEiOiIzZWVmZmU0MTRiOWY0Mzg3NjRkMDUxNTBmODBhYzQ5ZSJ9.6hxaZwEYpiwj1YFAigb9Kw'
  }).addTo(map);

  var submitButton = $("#submitButton");
  var tripLocations = [];

  function createGeoJson(tripArray){
    var tripPlanner = {
      "type": "Feature",
      "properties": {
        "name": "Bob",
        "title": "Your Awesome Trip"
      },
      "geometry": {
        "type": "MultiLineString",
        "coordinates": [ tripArray ]
      }
    }

    L.geoJson( tripPlanner ).addTo( map );
  }

  submitButton.on("click", function(e){
    e.preventDefault();
    var userLocation = $("#userLocation").val();
    var userNote = $("#userNote").val();
    var locationArray = [];
    $.getJSON( "http://api.opencagedata.com/geocode/v1/json?q=" + userLocation + "&key=fe21a1be30f41c2a8a6e3706cebcfff2", function(req,res){
    }).done(function(response){
      locationArray = [response.results[0].geometry.lat, response.results[0].geometry.lng];
      geoJsonArray = [response.results[0].geometry.lng, response.results[0].geometry.lat]
      tripLocations.push(geoJsonArray);
      L.marker(locationArray).addTo( map ).bindPopup("<h3>"+ userLocation +"</h3><p>"+ userNote+"</p>");
      createGeoJson(tripLocations);
    }).fail(function(){
      console.log("json req failed");
    })
  })
})
