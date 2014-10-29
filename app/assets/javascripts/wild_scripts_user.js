function getSightingsByUser() {
  $.ajax({
    url: '/users',
    type: 'GET'
  }).done(function(data){

    var sightings = data["user_sightings"];
    var $ul = $("#sightings_ul");

    for (i = 0; i < sightings.length; i++) {
      var sightingFood = sightings[i]["food"];
      var sightingLocation = sightings[i]["location"];
      var sightingSeason = sightings[i]["season"];
      var sightingDate = sightings[i]["created_at"];

      // we need the sighting obj id's in the db so that... 
      var sightingId = sightings[i]["id"]; 

              // ...we can add it to the li as a DOM id so  
              // when we go to delete it in the sighting view 
      $ul.append("<li class='linkSighting' id='" + sightingId  + 
        "'><a href='#'><span class='sightingFood'>" + sightingFood + "</span></a></br>" + sightingLocation + "</br>" + sightingSeason + "</br>" + sightingDate + "</li>");

    }
  })
};



/////////////////// on load
$(function(){


///// button on found_or_hunt page to call getSightingsByUser function
  var goToUserShowButton = $('#found_button')
    goToUserShowButton.on("click", function(e){
    e.preventDefault();

      getSightingsByUser();      

    // make the report_or_hunt div hidden and the users_show div visible
    $('div#report_or_hunt').addClass('noshow');
    $('div#users_show').removeClass('noshow');
    });




// event listener for <li>s to trigger sightings_show view

$( "#sightings_ul" ).on( "click", "a", function( event ) {
    event.preventDefault();
    
    var foodSighting = $( this ).text() ;
    console.log(foodSighting);
    // console.log(typeof foodSighting);
    // return foodSighting;

    //call the function that finds the sighting and displays its info
    displaySighting(foodSighting);
});
//


});
// end of onLoad

