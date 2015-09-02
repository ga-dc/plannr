**GOAL:** Create a trip planner that lets users enter the name of a location, and marks that location (along with any notes the user would like to add) on a map.

**Steps**
* Create an HTML form. Users will use this form to enter an address.
* Submitting this form should trigger an API call to the [OpenCage Geocoder](http://geocoder.opencagedata.com/demo.html) (the same API from this morning's in-class example).
  * The Geocoder will convert the submitted address to latitude-longitude coordinates.
* Use Leaflet to...
  * Convert coordinates to map markers.
  * Click listeners for the markers that display the address, latitude-longitude coordinates an user notes about the location.
* Use Leaflet and GeoJSON to...
  * Link every two locations with a line.

**Notes**
* No need to save this information to a back-end.
