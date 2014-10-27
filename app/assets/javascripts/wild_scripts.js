var users = []

function getSightingsByUser(user_id) {
  $.ajax({
    url: '/users/' + user_id,
    type: 'GET'
  }).done(function(data){

    var sightings = data["sightings"];
    var $ul = $("#sightings_ul");

    for (i = 0; i < sightings.length; i++) {
      var sightingFood = sightings[i]["food"];
      var sightingLocation = sightings[i]["location"];
      var sightingSeason = sightings[i]["season"];

      // we need the sighting obj id's in the db so that... 
      var sightingId = sightings[i]["id"]; 

              // ...we can add it to the li as a DOM id so  
              // when we go to delete it in the sighting view 
      $ul.append("<li class='linkSighting' id=" + sightingId  + 
        "><a href='#'><span class='bullet'>$utrif;</span>" + sightingFood + "</a></li>");

    }
  })
};
getSightingsByUser(1);

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

///// button to go to sightings index from sessions index
  var huntButton = $('#hunt_button');

  huntButton.on("click", function(e){
    e.preventDefault();

    // make the report_or_hunt div hidden and the sightings_index div visible
    $('div#report_or_hunt').addClass('noshow');
    $('div#sightings_index_main').removeClass('noshow');
  });
	  
///// button on sightings page to send search location and season to ruby server
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
      //process results here

      console.log(results)
    

    })
  });













});
// end of onLoad
