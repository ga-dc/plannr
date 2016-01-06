$(document).ready(function(){

var map = L.map('map').setView([38.9038829, -77.0360032], 15);

   L.tileLayer( "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
     maxZoom: 18,
     id: 'karldonus.nb9anmn6',
     accessToken: 'pk.eyJ1Ijoia2FybGRvbnVzIiwiYSI6Ijg1ZTY5ZDZjMTUxZTdkMzk1Y2MwOTNjNjQwZDMwNTU2In0.WOrmvw7P5KviJbR_u5febw'
   }).addTo( map );
var numMarkers = 0;
var geoJsonLocale = [];
self = this;

   $("#go").on( "click", function(){
       event.preventDefault();
       var searchParams = $("#locationField").val().replace( / /g, "+" );
       console.log(searchParams);
       $.ajax({
         url: "http://api.opencagedata.com/geocode/v1/json?query=" + searchParams + "&pretty=1&key=8f0fede4c6f0f4959149dfc05bf67404"
       }).done( function( res ){
         var lat = res.results[0].geometry.lat;
         console.log(lat);
         var lng = res.results[0].geometry.lng;
         console.log(lng);
         geoJsonLocale.push([ lng, lat ]);
         console.log(geoJsonLocale);
       });
     });

});


// OpenCageKey: 8f0fede4c6f0f4959149dfc05bf67404
