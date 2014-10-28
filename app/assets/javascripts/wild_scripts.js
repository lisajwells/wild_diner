var users = [];

// this came from google map example and now i'm gonna mess with it 
// (feeding results lat long)
// call from mapSearchButton block
    function initialize(results) {

      // lat long coming from results of mapSearchButton function to searches_controller
      var lat = results["lat"];
      var lng = results["lng"];
      var myLatlng = new google.maps.LatLng(lat, lng);

      var mapOptions = {
        center: myLatlng,
        zoom: 9
      };
      var map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);


      //show map_div
      $('div#map_div').removeClass('noshow');
      placeSeasonMarkers(results, map);
    };
    // this is outside the function, now commented so the map waits to load until it's called
    // google.maps.event.addDomListener(window, 'load', initialize);


///// a function to take season sightings and get params for markers
  function placeSeasonMarkers(results, map) {
    // sightingLatLng = new google.maps.LatLng(results["lat"], results["lng"]);

// console.log(results["season_sightings"]);
    var seasonSightings = results["season_sightings"];

    for (s = 0; s < seasonSightings.length; s++) {

      var sightingId = seasonSightings[s]["id"];
      var sightingFood = seasonSightings[s]["food"];
      var sightingSeason = seasonSightings[s]["season"];
      var sightingDescription = seasonSightings[s]["description"];
      var sightingPhoto = seasonSightings[s]["photo_url"];


      var sightingLat = seasonSightings[s]["lat"];
      var sightingLng = seasonSightings[s]["lng"];
      var sightingLatLng = new google.maps.LatLng(sightingLat, sightingLng);

      // var contentString = '<div id="infoContent">'+'<h4 id="firstHeading" class="firstHeading">'sightingFood'</h4>'+'<div id="bodyContent">'+'<p><b>'sightingSeason'</b></p></div></div>';
      var contentString = '<div id="infoContent"><p>'+sightingDescription+'</p><p><img src="'+sightingPhoto+'"></p></div>';

      var infowindow = new google.maps.InfoWindow({
      content: contentString
      });

    var marker = new google.maps.Marker({
        position: sightingLatLng,
        map: map,
        title:sightingFood
    });

    google.maps.event.addListener(marker, 'click', function() {
      console.log(this); // this does show each correct marker but triggers other
       $('.modal-title').html(sightingFood);
       $('.modal-body').html(contentString);
      $('#pinModal').modal('toggle');
      // infowindow.open(map,marker);
    });

    }
 

  };





/////////////////// on load
$(function(){


///// button to go to sightings index (map view) from sessions index
  var huntButton = $('#hunt_button');

  huntButton.on("click", function(e){
    e.preventDefault();

    // make the report_or_hunt div hidden and the sightings_index div visible
    $('div#report_or_hunt').addClass('noshow');
    $('div#sightings_index').removeClass('noshow');
  });

	  
///// button on sightings page to send search location and season to ruby server
///// then it calls initialize function to draw the map
  var mapSearchButton = $('#map_search_button')
    mapSearchButton.on("click", function(e){
    e.preventDefault();

    // collect parameters from map_search form
    var season = $('#season_dropdown').val();
    var searchLocation = $("#search_location").val();

    // call to ruby server to get latLng from googlemaps api and pin map for season
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/searches",

      data: {
        season: season,
        searchLocation: searchLocation
      },
    }).done(function(results){

      //process results here (i think i'll call a function that gets them to get the map)
      initialize(results);      
    })
  });











});
// end of onLoad