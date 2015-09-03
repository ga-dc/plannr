
function init(){
    console.log("init");

    // == map center location
    // .setView() arguments: latitude / longitude (center of  map); starting zoom level

    var tripArray = [];
    var map = L.map("map").setView( [38.9038829, -77.0360032], 12 );

    // == tiling displays map graphics (z=zoom, x=lat, y=lng)
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '<a href="http://mapbox.com">Mapbox</a>',
        id: 'tombeach.5ab7f2bb',
        accessToken: 'pk.eyJ1IjoidG9tYmVhY2giLCJhIjoiY2VhZTQyNzE3ZDlhMDVjMjk5MzJkYjMxZTRmMjliODEifQ.0I1BNowEwcm9Uk_Z8JqMOQ',
        maxZoom: 25
    }).addTo(map);

    // ======= ======= ======= newTripBtn ======= ======= =======
    $("#newTripBtn").on("click", function(){
        console.log("-- newTripBtn");

        var tripArray = [];

    }

    // ======= ======= ======= plotTripRouteBtn ======= ======= =======
    $("#plotTripRouteBtn").on("click", function(){
        console.log("-- plotTripRouteBtn");
        console.log("  tripArray: " + tripArray);

        var latLongArray = [];
        var locNamesArray = [];

        // == geoJSON multi-line path
        for (i = 0; i < tripArray.length; i++) {
            if (i < tripArray.length - 1) {
                startLoc = [tripArray[i][0], tripArray[i][1]];
                endLoc = [tripArray[i + 1][0], tripArray[i + 1][1]];
            }
            console.log("startLoc: " + startLoc)
            nextLatLong = [startLoc, endLoc];
            console.log("nextLatLong: " + nextLatLong)
            latLongArray.push(nextLatLong);
            locNamesArray.push(tripArray[i][2]);
        }

        // == geoJSON multi-line path
        var tripPath = {
            "type": "Feature",
            "properties": {
                "name": "My Trip"
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": latLongArray
            }
        }
        L.geoJson(tripPath).addTo(map);

        var tripArray = [];
    });

    // ======= ======= ======= submitAddressBtn ======= ======= =======
    $("#submitAddressBtn").on("click", function(){
        console.log("-- submitAddressBtn");

        var searchLoc;
        searchLoc = $("#searchLoc").val();
        searchLoc = searchLoc.replace(/ /g, "+");
        searchLoc = searchLoc.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");

        getLatLong(searchLoc);

        // ======= ======= ======= getLatLong ======= ======= =======
        function getLatLong(searchLoc) {
            console.log("getLatLong");

            var APIstring = "http://api.opencagedata.com/geocode/v1/json?q=" + searchLoc + "&key=6825aa8a8a0904ed2c55b38a3be736e0"
            console.log("  APIstring: " + APIstring);

            // == ajax LOCAL user login
            $.ajax({
                url: APIstring,
                method: "get",
                dataType: "json"
            }).done(function(jsonData){
                console.log("  ajax request success!");
                var lat = jsonData.results[0].geometry.lat;
                var long = jsonData.results[0].geometry.lng;
                placeMapMarker(lat, long, searchLoc);
            }).fail(function(){
                console.log("  ajax request fails!");
            }).always(function(){
                console.log("  ajax request always");
            });
        }

        // ======= ======= ======= getLatLong ======= ======= =======
        function placeMapMarker(lat, long, searchLoc) {
            console.log("placeMapMarker");

            var marker = L.marker( [lat, long]).addTo(map);
            marker.bindPopup("this is " + searchLoc);
            nextPitStop = [lat, long, searchLoc];
            tripArray.push(nextPitStop);
        }


    })

}
