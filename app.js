var renderMap = function(){
  var map = L.map('map').setView([38.895008, -76.992288], 15);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    mazZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    id: 'schersh.okh88oae',
    accessToken: 'pk.eyJ1Ijoic2NoZXJzaCIsImEiOiJjaWozOG5ucTUwMDQwdHVrcGFkbG84ZTZiIn0.uaY3C7_AYcLYEfjoU8EVsw'
  }).addTo(map);
  return map;
};

var makeMarker = function(lat, lng, place){
  var marker = L.marker([ lat, lng ]).addTo(map);
  marker.bindPopup("<p>" + place + "</p>");
};

$(document).ready(function(){
  renderMap();
  $("#submit").on("click", function (){
    event.preventDefault();
    var address = $("#address").val();
    $.ajax({
    url: "https://api.opencagedata.com/geocode/v1/json?query" + address + 'pk.eyJ1Ijoic2NoZXJzaCIsImEiOiJjaWozOG5ucTUwMDQwdHVrcGFkbG84ZTZiIn0.uaY3C7_AYcLYEfjoU8EVsw'
  }).done(function(res){
    response = res.results[0];
  });
    var lat = response.geometry.lat;
    var lng = response.geometry.lng;
    var place = response.components.attraction || response.components.building
    makeMarker(lat, lng, place);
  });
});
