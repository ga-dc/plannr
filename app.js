
var getlocation = function(){
//grabs location and stores it in a variable
	$(":submit").click(function(){
	var location = $location.val();

  var json = $.getJSON ("http://api.opencagedata.com/geocode/v1/geojson?query=" + location + "&pretty=1&key=5e0c1681bb4278177f02428c11a829f6" );
    console.log(json);
	});
}




var map = L.map('digital_map').setView([42.886433, -78.878130], 15);

//Tile
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom:18,
    id:'kevnco.nbgbf904',
    accessToken:'pk.eyJ1Ijoia2V2bmNvIiwiYSI6IjRjMDgzM2RlMGU4OTU2Yzk1OGVhNzU5ZjlhNDdmZDYxIn0.L19q_rzQ8FMMEROcVA4JTA'

}).addTo(map);

//Save the GeoJSON
var quickTour = {
	"type": "Feature",


	"geometry": {
    "type": "MultiPolygon",
    "coordinates": [[[[-79.074145,43.083059], [-78.786980,42.773918],[-78.868402,42.773918],[-74.017210, 40.706539],[-73.569228,45.515878]]]]
  }
  
}
L.geoJson(quickTour).addTo( map );

