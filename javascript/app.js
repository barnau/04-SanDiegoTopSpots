var coordinates = [];

$.getJSON("mock/sanDiegoTopSpots.json", function(spots) {


    var html = '';
    spots.forEach(function(spot) {

        html += '<tr class="row"><td>' + spot.name + '</td><td>' + spot.description + '</td><td><input class="btn btn-block btn-primary" type="button" value="Link" onclick="self.location=\'https://www.google.com/maps?q=' + spot.location[0] + ", " + spot.location[1] + '\'"></button></td></tr>';

        coordinates.push([spot.location[0], spot.location[1], spot.name]);
    });





    $("tbody").append(html);


});



var markers = [];

function initialize() {



    var mapProp = {

        center: new google.maps.LatLng(32.7157, -117.1611),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP


    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);


    //create array of markers
    for (var i = 0; i < coordinates.length; i++) {
        markers[i] = new google.maps.Marker({
            position: { lat: coordinates[i][0], lng: coordinates[i][1] },
            map: map,
            title: coordinates[i][2]
        });
    }
}
google.maps.event.addDomListener(window, 'load', initialize);

//inject markers to google maps event listenders
for (var i = 0; i < markers.length; i++) {

    google.maps.event.addListener(markers[i], 'click', function() {
        infowindow.open(map, marker);
    });

}
