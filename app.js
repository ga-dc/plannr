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
    var searchLocal = $("#search").val().replace(/ /g, "+")
    $.ajax({
        url: "http://api.opencagedata.com/geocode/v1/json?query=" + searchTerm + "&pretty=1&key=#####"
    }).done(function(res){
       var response = res.results[0]

        var lat = response.geometry.lat
        var lng = response.geometry.lng
        var name = response.components.attraction || response.components.building

    })
})
