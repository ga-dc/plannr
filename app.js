$(document).ready(function(){

var map = L.map('map').setView([38.9038829, -77.0360032], 15);

   L.tileLayer( "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
     maxZoom: 18,
     id: 'karldonus.nb9anmn6',
     accessToken: 'pk.eyJ1Ijoia2FybGRvbnVzIiwiYSI6Ijg1ZTY5ZDZjMTUxZTdkMzk1Y2MwOTNjNjQwZDMwNTU2In0.WOrmvw7P5KviJbR_u5febw'
   }).addTo( map );
});
