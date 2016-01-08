var myMap = L.map( "map" ).setView([40.7305991, -73.9865812], 13);

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'brittonwalker.okh8c6b8',
  accessToken: 'pk.eyJ1IjoiYnJpdHRvbndhbGtlciIsImEiOiJjaWozOG16d3IwMDN0dW1rcDU3OXJxeWEzIn0.yfclBrxnvpCzJZkZtLYQdg'
}).addTo(myMap);

$("#submit").click(function(){
 event.preventDefault();
 var keyword = $("input").val();
 var url = 'http://api.opencagedata.com/geocode/v1/json?q='+keyword+'&key=9856c49448b1c927e9fd4080d7c55fad'
 $.ajax({
   url: url,
   type: "GET",
   dataType: "json"
 }).done ( function(res){
   var response = res.results[0];
   var lat = response.geometry.lat;
   var lng = response.geometry.lng;
   L.marker([lat, lng]).addTo(myMap);
 })
});


// $(document).ready(function() {
//
//
// });
