$(document).ready(function(){

  var map = L.map("map").setView( [38.7139, -9.1394], 3);

  // add tiling
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    id: "puzzleboks.l434jjj9",
    accessToken: "pk.eyJ1IjoicHV6emxlYm9rcyIsImEiOiI3VERYTHI0In0.Tzm7kzevYPXkHdxfckoWfA",
    maxZoom: 18
  }).addTo( map );


  $('form').submit(function(event) {
    event.preventDefault();
    var inputVal = $('input[name=query]').val()
    var url = "http://api.opencagedata.com/geocode/v1/json?q=" + inputVal + "&key=4f90f30306fe1c69fe6dfbb4db7722d5"
    $.ajax({
      // the URL endpoint for the JSON object
      url: url,
      // type of request
      type: "get",
      // datatype xml or json
      dataType: "json"
      // promise that executes on successful ajax call
    }).done(function(response){
      var lat = response.results[0].geometry.lat
      var lng = response.results[0].geometry.lng
      var myPin = L.icon({
        iconUrl: 'images/oldPin2.png',
        iconSize: [18, 46],
        iconAnchor: [4, 25],
      });
      var myMarker = L.marker( [lat, lng], {
        icon: myPin,
      }).addTo( map );
      myMarker.bindPopup(
        "Coordinates: " + lat.toString() + "," + lng.toString()
      )
      // var clickPopup = L.popup();
      // map.on( "click", function( event ){
      //   console.log(event.latlng.toString())
      //   clickPopup.setContent( "Coordinates: " + event.latlng.toString() ).openOn(map);
      // })
    }).fail(function(){
      console.log("ajax request fails!")
      // promise that executes either way
    }).always(function(){
      console.log("this always happens regardless of successful ajax request or not")
    })
  })
})
