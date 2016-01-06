var Map = function(){

  this.userLocations = [];

  //listen for click on submit by bining event handler to form
  $("#submit").on("click", function(){
    // alert("form submitted");
    event.preventDefault();
    //save the location submitted in form in a variable
    var searchLocation = $("location")
  //make ajax call to api
  $.ajax({
    url: "http://api.opencagedata.com/geocode/v1/json?q=" + searchLocation + "&key=6fcf5733aaeacd03d84fa0a12b114bec",
    type: "get",
    dataType: "GeoJSON"
  }).done(function(response) {
    console.log("success")
  }).done( function(res) {
    response=res.results[0];

    //save response results
    var lat = response.geometry.lat;
    var lng = response.geometry.lng;
    userLocations.push([ lng, lat ]);





  //initialize map and set view and zoom
  var map = L.map('map').setView([38.9048542, -77.0339403], 12);

  // Can't see the map until we add Leaflet tiling
  // x,y, & z are lat, lng and zoom
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'leighvarley.7f3d4712',
      accessToken: 'pk.eyJ1IjoibGVpZ2h2YXJsZXkiLCJhIjoiZjI4NWFhODcxMzE5NjUwYjE4NDdlZTlhNzMyZGUzYTcifQ.LS9tC5bvBN2zJ-BqxIdtcQ'
  }).addTo(map);

  return map;

  //since we search based on location name (eg general assembly), we get multiple api search responses
  //take the response with the index number of 0 since its most likely the correct one

  //save the lat, lng in variables and push them into places array
  //look components stuff up in api docs

  //add markers, if there are mult markers connect them

    })
})
