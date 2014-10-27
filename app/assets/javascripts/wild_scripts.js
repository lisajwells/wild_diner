$(function(){

///// button to go to sightings index from sessions index
// *** not yet implemented
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
    // for (s = 0; s < seasons.length; s++){
      // if (season == seasons[s]["season"]) {
      // var season_id = seasons[s]["id"];    
      // }}
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
    })
    

  });












});
// end of onLoad
