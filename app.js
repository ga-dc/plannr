// Create map
var map = L.map("map").setView([38.9038829, -77.0360032], 15);

// add tiling
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,

// Replace the below properties with your `Map ID` and `Default Public Token` values you saved earlier, respectively.
    id: 'ktw1222.e76678cc',
    accessToken: 'pk.eyJ1Ijoia3R3MTIyMiIsImEiOiI5Y2ZhYjI0NGI1M2YxMDhjODRmYWQxZTFmYzgwZmNhZiJ9.q3DvxR-n8yGXebhXdgOGpw'
}).addTo(map);
