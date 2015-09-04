$(document).ready(function(){

  var map = L.map("map").setView( [38.7139, -9.1394], 3);
  var myLine = [];
  // add tiling
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    id: "puzzleboks.l434jjj9",
    accessToken: "pk.eyJ1IjoicHV6emxlYm9rcyIsImEiOiI3VERYTHI0In0.Tzm7kzevYPXkHdxfckoWfA",
    maxZoom: 18
  }).addTo( map );


  $('form').submit(function(event) {
    // prevent form from doing it's usual thing
    event.preventDefault();
    // get input values
    var inputVal = $('input[name=query]').val();
    var notes = $('#notes').val();
    //
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
      console.log(response)
      // lat and lng from response
      var lat = response.results[0].geometry.lat
      var lng = response.results[0].geometry.lng
      var name = response.results[0].formatted
      //var latlng = [lat,lng];
      //console.log(latlng)

      // custom pin icon
      var myPin = L.icon({
        iconUrl: 'images/oldPin.png',
        iconSize: [12, 22],
        iconAnchor: [4, 25],
      });
      // add icon to marker with lat/lng and add to map
      var myMarker = L.marker( [lat, lng], {
        icon: myPin,
      }).addTo( map );
      // geojson object
      var myStrings = {
          "name":"NewFeatureType",
          "type":"FeatureCollection",
          "features":[{
              "type":"Feature",
              "geometry":{
                  "type":"multiLineString",
                  "coordinates":[]
              },
              "properties":null
          }]
      };
      // bind popup to marker with all info
      myMarker.bindPopup(
        "<p>Coordinates: " + lat.toString() + "," + lng.toString() + "</p><p>Notes: " + notes + "</p>Place: " + name
      )
      //
      myLine.push([lat,lng]);
      // console.log(myLine);
      //
      if (myLine.length>2) {
        // myStrings.features[0].geometry.coordinates.push([myLine]);
      }
      //add to map
      // console.log(myStrings.features[0].geometry.coordinates);
      // L.geoJson( myStrings ).addTo( map );
    }).fail(function(){
      console.log("ajax request fails!")
      // promise that executes either way
    }).always(function(){
      //console.log("this always happens regardless of successful ajax request or not")
    })

  })
})
