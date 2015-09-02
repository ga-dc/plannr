
var map = L.map('map').setView([38.9038829, -77.0360032], 15);
//15 is the inital level of zoom, stick to 15 and you'll be fine.
//'map' is the ID of the div that you are going to attach this api to
//this is because in leaflet you first add the coordinates
//and then you add all of the tiling in there as well.
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    //notice that attribution property is just a shotout sort of thing
    //notice in tilLayer is a matter of first url with link with information to fill in and tthen a second passign which is a object with all of the information you'll be passing into that url
    // Replace the below properties with your `Map ID` and `Default Public Token` values you saved earlier, respectively.
    id: 'edwardpark.c39e66b5',
    accessToken: 'pk.eyJ1IjoiZWR3YXJkcGFyayIsImEiOiJmODIzNDE3ZDFlM2M3NGU3ZDJhMzFhNGVjNjYwY2E3ZiJ9.jWQ65mL9Y_w2PuampvtDsQ'
}).addTo(map);


var key = "2aa7c6d03fc9a9c67e9e5afcf816da5a";
var loc;
$("form").on("submit",function(){
  event.preventDefault();
  loc = $("#locationID").val();
//plug into api key
//send out call
//refactor to function
//create pointset
//display
});
