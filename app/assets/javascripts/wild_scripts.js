// scripts for the sessions index view and the map view


// (feeding results lat long)
// call from mapSearchButton
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


///// a function to take season sightings and get params for markers
  function placeSeasonMarkers(results, map) {

    var seasonSightings = results["season_sightings"];

    for (s = 0; s < seasonSightings.length; s++) {

      var sightingFood = seasonSightings[s]["food"];
      var sightingLat = seasonSightings[s]["lat"];
      var sightingLng = seasonSightings[s]["lng"];
      var sightingLatLng = new google.maps.LatLng(sightingLat, sightingLng);

      var marker = new google.maps.Marker({
          position: sightingLatLng,
          map: map,
          title:sightingFood
      });

      marker.set("info", seasonSightings[s]);

      // add event listener to marker, which calls pinModal function to pop up modal
      google.maps.event.addListener(marker, 'click', function() {

        pinModal(this.info)
      });
    }
  };

////// function to call modal when pin is clicked
// call it from event listener above
function pinModal(info) {

    var sightingFood = info["food"];
    var sightingDescription = info["description"];
    var sightingPhoto = info["photo_url"];
    var userId = info["user_id"];

    // go to server to get username from user_id
    $.ajax({
      type: "GET",
      url: "/searches",
      data: {
        userId: userId,
      },
    }).done(function(result){
      var username = result["username"]

      var contentString = '<div id="infoContent"><img src="'+sightingPhoto+'"><p>'+sightingDescription+'</p><p>&mdash;sighted by '+username+'</p></div>';

      $('#pinModal .modal-title').html(sightingFood);
      $('#pinModal .modal-body').html(contentString);
      $('#pinModal').modal('toggle');

    })
};




/////////////////// on load
$(function(){

   $('body').on('hidden.bs.modal', '.modal', function() {
   console.log('Modal is hidden');
       $(this).removeData('bs.modal');
      });




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
      url: "/searches",
      data: {
        season: season,
        searchLocation: searchLocation
      },
    }).done(function(results){
// results include user_id -- must get username to display it in pinModal
      //process results here (a function that gets the map)
      initialize(results);      
    })
  });



});
// end of onLoad