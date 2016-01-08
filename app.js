var makeMarker = function(geoInfo){
  var lat = event.latlng.lat,
      lng = event.latlng.lng;
  var marker = L.marker([geoInfo).addTo(myMap);
  marker.bindPopup("<p>" + event.latlng.lat + "</p><p>" + event.latlng.lng + "</p>");
}

myMap.on( "click", function( event ){

  var lat = results.location.lat.val()
  var lng = results.location.lng.val()
  var geoInfo = "[" + lat "," + lng + "]"
  makeMarker(geoInfo)
});
