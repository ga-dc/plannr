// map string references div with "map" ID in html
var myMap = L.map('map').setView([38.9038829, -77.0360032], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,

  // Replace the below properties with your `Map ID` and `Default Public Token` values you saved earlier, respectively.
  id: "ID",
  accessToken: "ACCESS_TOKEN"
}).addTo(myMap);

var generalAssembly = L.marker( [38.9048542, -77.0339403] ).addTo( myMap );

generalAssembly.bindPopup(
  "<h3>General Assembly DC</h3><p>1133 15th St., NW</p><p>8th Floor</p><p>Washington, DC 20005</p>"
)

var searchArray = []
var coords = []
var travelLineCoords = []

$(".search").click(function(){
  event.preventDefault();
  var keyword = $("input[name='location']").val();
  var url = 'http://api.opencagedata.com/geocode/v1/json?q='+keyword+'&key=API_KEY'
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done ( function(response){
    // call movie function below to append movie titles
    searchArray.push(response.results[0])
    addressRequest(response.results[0]);
  }).fail ( function (){
    console.log("fail");
  }).always( function(){
    console.log("Something happens");
  })
})

var addressRequest = function (response){
  var lat = parseFloat(response.geometry.lat);
  var long = parseFloat(response.geometry.lng);
  var comment = $("input[name='comment']").val();
  var locationDiv = "<div>Location: "+response.formatted+"</div>";
  var coordinateDiv = "<div>Coordinates: "+[lat,long]+"</div>";
  var commentDiv = "<div>Comment: "+comment+"</div>";

  var travelLine = {
    "type": "Feature",
    // Set geometry type here.
    "geometry": {
      "type": "MultiLineString",
      "coordinates":
      travelLineCoords
    }
  }

  coords.push([long,lat]);
  if (coords.length>=2){
    for (var i = 0; i < coords.length-1; i++){
      travelLineCoords.push([coords[i],coords[i+1]])
    }
    L.geoJson( travelLine ).addTo( myMap );
  }

  var clickPopup = L.popup();

  L.marker([lat,long]).addTo(myMap).bindPopup(clickPopup)
  clickPopup
  .setLatLng([lat,long])
  .setContent(locationDiv+coordinateDiv+commentDiv)
  .openOn(myMap);
}
