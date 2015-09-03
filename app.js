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
