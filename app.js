var map = L.map('map').setView([38.9038829, -77.0360032], 15);
var coordinateArray = [];

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'nayana487.35f26207',
    accessToken: 'pk.eyJ1IjoibmF5YW5hNDg3IiwiYSI6ImJiNzRiOTIxOTE5MjE1NjA5YTgzNWQyM2ZkYTQ5M2YzIn0.HVGxMmnX-aH3fKU8HYKzJQ'
}).addTo(map);

function addressSubmit() {
    var address = document.getElementById('addressInput').value;
    var userNotes = document.getElementById('userNotesInput').value;
    $.ajax({
        url: "http://api.opencagedata.com/geocode/v1/json?q=" + address + "&key=ae241a4ff52410b4d6ba27a7c6ff5b43",
        success: function(data) {
            var marker = L.marker([data.results[0].geometry.lat, data.results[0].geometry.lng]).addTo(map);
            var popupHTML = "<h3>" + address + "</h3><p>Lat: " + data.results[0].geometry.lat + "</p><p>Long: " + data.results[0].geometry.lng + "</p><p>Notes:" + userNotes + "</p>";
            marker.bindPopup(popupHTML);
            for (i = 0; i < coordinateArray.length; i++) {
                var feature = {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [data.results[0].geometry.lng, data.results[0].geometry.lat], coordinateArray[i]
                        ]
                    }
                };
                L.geoJson(feature).addTo(map);
            }
            coordinateArray.push([data.results[0].geometry.lng, data.results[0].geometry.lat])
        },
        error: function() {
            alert('failure');
        }
    });
}
