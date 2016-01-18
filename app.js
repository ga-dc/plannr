var Map = function(){

  this.numMarkers = 0;
  this.geoJsonPlaces = [];
  self = this;

  // button click handle
  $("#submit").on( "click", function(){
      event.preventDefault();
      var searchPlace = $("#destination").val()
      $.ajax({
        url: "http://api.opencagedata.com/geocode/v1/json?query=" + searchPlace + "&pretty=1&key=862233671407c30d908b241585ec93d3"
      }).done( function( res ){
        response = res.results[0];

        // Save response values: latitude, longitude, location name
        var lat = response.geometry.lat;
        var lng = response.geometry.lng;
        var name = response.components.attraction || response.components.building
        self.geoJsonPlaces.push([ lng, lat ]);

        // Run rendering methods for markers, popups and, if necessary, lines
        self.addMarkerPopup( lat, lng, name );
        self.numMarkers++;
        if( self.numMarkers > 1 ){
          self.connectMarkers();
        }
      });
    });

    this.renderMap = function(){
    // Create map
    var map = L.map("map").setView([38.9038829, -77.0360032], 15);

    // add tiling
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,

      // Replace the below properties with your `Map ID` and `Default Public Token` values you saved earlier, respectively.
      id: 'ktw1222.e76678cc',
      accessToken: 'pk.eyJ1Ijoia3R3MTIyMiIsImEiOiI5Y2ZhYjI0NGI1M2YxMDhjODRmYWQxZTFmYzgwZmNhZiJ9.q3DvxR-n8yGXebhXdgOGpw'
    }).addTo(map);

    return map;
  }

  this.addMarkerPopup = function( lat, lng, name ){
      // Add marker and popup to map
      var loc = L.marker( [ lat, lng ] ).addTo( map );
      loc.bindPopup( name + "<br/><br/>" + "<span>To-Do</span><ul><li>" + $( "#action" ).val() + "</li></ul>" );
    };

    this.connectMarkers = function(){
      // Save length of geoJsonPlaces array
      var numPlace = self.geoJsonPlaces.length - 1

      // Generate geoJSON string
      var connection = {
        "type": "LineString",
        "coordinates": [
          [ self.geoJsonPlaces[ numPlace-1 ][0], self.geoJsonPlaces[ numPlace-1 ][1] ],
          [ self.geoJsonPlaces[ numPlace ][0], self.geoJsonPlaces[ numPlace ][1] ]
        ]
      };
      // Attach geoJSON object to map
      L.geoJson( connection ).addTo( map );
    };
  }

$(document).ready(function(){
  var app = new Map();
  map = app.renderMap();
})


// marker and polygon exercises
// var generalAssembly = L.marker( [38.9048542, -77.0339403] ).addTo( map );
//
// var markers = [
//   [38.9007148, -77.0502466], [38.9048542, -77.0339403], [38.8998362, -77.0257435]
// ];
//
// function addPolygon(array){
//   L.polygon(array).addTo(map);
// };
//
// addPolygon(markers)
//
// for ( i=0; i < markers.length; i++){
//     L.marker(markers[i]).addTo(map);
// }
// // Create a pop-up.
// generalAssembly.bindPopup(
//   "<h3>General Assembly DC</h3><p>1133 15th St., NW</p><p>8th Floor</p><p>Washington, DC 20005</p>"
// )
//
// map.on( "click", function( event ){
//   console.log( event );
// })
// // Need to define the popup that will appear after a click.
// var clickPopup = L.popup();
// // Now define when and how `clickPopup` will appear.
// map.on( "click", function( event ){
//   clickPopup
//   .setLatLng( event.latlng )
//   .setContent( "Coordinates: " + event.latlng.toString() )
//   .openOn( map );
// })
