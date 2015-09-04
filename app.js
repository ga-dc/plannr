// create maptime

var map = L.map("map").setView([39.2908608, -76.6108073], 15)

// add tiling

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    id: 'omarimayerswalker.ba6a4818',
    accessToken: 'pk.eyJ1Ijoib21hcmltYXllcnN3YWxrZXIiLCJhIjoiODJlZjMxYjhiYjJmZTkwMDBkZDFhYzM2OTU3NDQxZjMifQ.ZjdJwZ3elIR4Ubp0xNC9yw',
    maxZoom: 18
}).addTo(map)

$("#location").on("submit", function(event){
    event.preventDefault()
    console.log(event)
})
