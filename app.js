var map = L.map("map").setView([38.9048542, -77.0339403], 15);
var generalAssembly = L.marker([38.9048542, -77.0339403]).addTo(map);
var clickPopup = L.popup();

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  id: "iamjustinprice.16709012",
  accessToken: "pk.eyJ1IjoiaWFtanVzdGlucHJpY2UiLCJhIjoiYjQ0NzMxNjFmNjY2ZDEyOTgwNTY4YzNhYWNmNjkwM2YifQ.ONU5lFr913Wx_IEE_r37RQ"
}).addTo(map);

generalAssembly.on("click", function(event) {
  clickPopup
  .setLatLng(event.latlng)
  .setContent("coordinates: " + event.latng.toString())
  .openOn(map);
})

$("#submit").on("click", function() {
  event.preventDefault();
  // this broke my map :(
  // var search = $("#location").val().replace(/ /g, "+");
  // $.ajax({
  //   url: "http://api.opencagedata.com/geocode/va/json?jquery=" search + "&pretty=1&key=62ee540db24fba16c87a0ba5d353d3a7"
  // }).done(fcuntion(res){
  //   response = res.results[0];
  // })
})

L.geoJson(generalAssembly).addTo(map);
