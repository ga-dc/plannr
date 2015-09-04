// $(document).ready(function () {
//var map = L.map('map').setView([38.9038829, -77.0360032], 15);

var map = L.map("map").setView([38.9038829, -77.0360032], 15);
var options = {
    key: '80b4dc8cb89225df245e71d29af2d202',
    limit: 10
};
var control = L.Control.openCageSearch(options).addTo(map);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

map.on( "click", function( event ){
  console.log( event );
})

var clickPopup = L.popup();

// Now define when and how `clickPopup` will appear.
map.on( "click", function( event ){
  clickPopup
  .setLatLng( event.latlng )
  .setContent( "Coordinates: " + event.latlng.toString() )
  .openOn( map );
})

// var geocoder;
// $(document).ready(function() {
//     geocoder = new OpenStreetMap.maps.Geocoder();
//     $('form.geocode').submit(function(e) {
//         var that = this;
//         var addr;
//         var addrArray = [];
//         var addrFields = ['search'];
//         $(addrFields).each(function(idx, name) {
//             var val = $(this).find('input[name="' + name + '"]').val();
//             if (val.length) {
//                 addrArray.push(val);
//             }
//         });
//         if (addrArray.length) {
//             e.preventDefault();
//             $(that).unbind('submit');
//             var onSuccess = function(results, status) {
//                 if (status == google.maps.GeocoderStatus.OK) {
//                     result = results[0].geometry.location;
//                     var point = result.lat() + ', ' + result.lng();
//                     $(that).prepend('<input type="hidden" name="point" value="' + point + '">');
//                 }
//                 $(that).trigger('submit');
//             }
//             addr = addrArray.join(', ');
//             geocoder.geocode({'address': addr}, onSuccess);
//         }
//     });
// });
