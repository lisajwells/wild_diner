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


      var sightingLat = seasonSightings[s]["lat"];
      var sightingLng = seasonSightings[s]["lng"];
      var sightingLatLng = new google.maps.LatLng(sightingLat, sightingLng);

      // var contentString = '<div id="infoContent">'+'<h4 id="firstHeading" class="firstHeading">'sightingFood'</h4>'+'<div id="bodyContent">'+'<p><b>'sightingSeason'</b></p></div></div>';
      var contentString = '<p>content here,</p>';

      var infowindow = new google.maps.InfoWindow({
      content: contentString
      });

    var marker = new google.maps.Marker({
        position: sightingLatLng,
        map: map,
        title:sightingFood
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    }
 

  };



// function getSightingsByUser(user_id) {
//   $.ajax({
//     url: '/users/' + user_id,
//     type: 'GET'
//   }).done(function(data){

//     var sightings = data["sightings"];
//     var $ul = $("#sightings_ul");

//     for (i = 0; i < sightings.length; i++) {
//       var sightingFood = sightings[i]["food"];
//       var sightingLocation = sightings[i]["location"];
//       var sightingSeason = sightings[i]["season"];

//       // we need the sighting obj id's in the db so that... 
//       var sightingId = sightings[i]["id"]; 

//               // ...we can add it to the li as a DOM id so  
//               // when we go to delete it in the sighting view 
//       $ul.append("<li class='linkSighting' id=" + sightingId  + 
//         "><a href='#'><span class='bullet'>$utrif;</span>" + sightingFood + "</a></li>");

//     }
//   })
// };
// getSightingsByUser(1);

// function getNamesCategory(category) {
//     for (c = 0; c < categories.length; c++){
//       if (category == categories[c]["name"]) {
//       category_id = categories[c]["id"];    
//       }
//     }

//   $.ajax({
//     url: '/categories/' + category_id,
//     type: 'GET'
//   }).done(function(data){

//     var contacts = data["contacts"];
//     var $ul = $("#" + category + "_ul");
    
//     for (i = 0; i < contacts.length; i++) {
//       var contactName = contacts[i]["name"];

//       // we need the contact obj id's in the db so that... 
//       var contactId = contacts[i]["id"]; 

//                       // we can add it to the li as a DOM id so  
//                       // when we go to delete it in the contact view 
//       $ul.append("<li class='linkContact' id=" + contactId  + 
//         "><a href='#'><span class='glyphicon glyphicon-star'></span>" + contactName + "</a></li>");
//     }
//   })
// };




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
console.log(results)

      //process results here (i think i'll call a function that gets them to get the map)
      initialize(results);      
    })
  });











});
// end of onLoad