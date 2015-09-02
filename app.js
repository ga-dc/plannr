
function init(){
    console.log("init");

    // == map center location
    // .setView() arguments: latitude / longitude (center of  map); starting zoom level

    var map = L.map("map").setView( [38.9038829, -77.0360032], 12 );

    // == tiling displays map graphics (z=zoom, x=lat, y=lng)
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '<a href="http://mapbox.com">Mapbox</a>',
        id: 'tombeach.5ab7f2bb',
        accessToken: 'pk.eyJ1IjoidG9tYmVhY2giLCJhIjoiY2VhZTQyNzE3ZDlhMDVjMjk5MzJkYjMxZTRmMjliODEifQ.0I1BNowEwcm9Uk_Z8JqMOQ',
        maxZoom: 25
    }).addTo(map);


    $("#submitAddressBtn").on("click", function(){
        console.log("-- submitAddressBtn");
        var searchLoc = $("#searchLoc").val();
        console.log("  searchLoc: " + searchLoc);

        var searchLoc = searchLoc.replace(/ /g, "+");
        console.log("  searchLoc: " + searchLoc);

        var searchLoc = searchLoc.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        console.log("  searchLoc: " + searchLoc);

        var APIstring = "http://api.opencagedata.com/geocode/v1/json?q=" + searchLoc + "&key=6825aa8a8a0904ed2c55b38a3be736e0"
        console.log("  APIstring: " + APIstring);

        // http://api.opencagedata.com/geocode/v1/json?q=PLACENAME&key=6825aa8a8a0904ed2c55b38a3be736e0
        // http://api.opencagedata.com/geocode/v1/json?query=washington+dc&pretty=1&key=6825aa8a8a0904ed2c55b38a3be736e0


    })

}
