// scripts for the users show view (sightings and new sightings)


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

///// displaySighting function to be called on event listener for sightings_ul
// argument foodSighting should come from "this" on event listener

function displaySighting(sightingId) {
  // call the server and get the sighting that matches this id
  $.ajax({
    url: '/sightings', 
    type: 'GET',
    data: {
      sightingId: sightingId
    },
  }).done(function(results){

    var photo = results["sighting"]["photo_url"];

    var food = results["sighting"]["food"];
    var location = results["sighting"]["location"];
    var season = results["sighting"]["season"];
    var date = results["sighting"]["created_at"];
    var description = results["sighting"]["description"];

    $("#sighting_show").removeClass('noshow');
    $(".show_sighting_photo").html("<img src='" + photo + "'>");
    $(".show_sighting_info").html("<p><b>" + food + "</b></p><p>" + location + "</p><p>" + season + "</p><p>" + date + "</p><p>" + description + "</p>" );

  })
};

/////////////////// on load
$(function(){

///// button on found_or_hunt page to call getSightingsByUser function
  var goToUserShowButton = $('#found_button');
    goToUserShowButton.on("click", function(e){
    e.preventDefault();

      getSightingsByUser();      

    // make the report_or_hunt div hidden and the users_show div visible
    $('div#report_or_hunt').addClass('noshow');
    $('div#users_show').removeClass('noshow');
    });
//

// event listener for <li>s to trigger sightings_show view
$( "#sightings_ul" ).on( "click", "a", function( event ) {
    event.preventDefault();

    var sightingId = $(this).closest('[id]').attr('id')
    console.log(sightingId);

    //call the function that finds the sighting and displays its info
    displaySighting(sightingId);
});
//

// button on user view to bring up sighting_new modal
  var sightingNewButton = $('#sighting_new_btn');
    sightingNewButton.on("click", function(e){
      e.preventDefault();

      $('#sightingNewModal').modal('toggle');

  });
//

// button on id="new_sighting_form" to submit form and create new sighting
  var sightingCreateButton = $('#sighting_submit');
    sightingCreateButton.on("click", function(e){
      e.preventDefault();

      // collect parameters from new_sighting_form
      var food = $('#foodname_inpt').val();
      var location = $('#location_inpt').val();
      var season = $('#season_inpt').val();
      var photo = $('#photo_inpt').val();
      var description = $('#description_inpt').val();

      // submit info to ruby to call googlemaps to convert to latLng and save sighting 
      $.ajax({
        type: "POST",
        url: "/sightings",
        data: {
          food: food,
          location: location,
          season: season,
          photo: photo,
          description: description
        },
      }).done(function(results){

      // run getSightingsByUser with new info included? +++++++++++++++++++++++++++++++++
      getSightingsByUser();
    })
  });


////////////////
});
// end of onLoad




// <span class=​"sightingFood">​wild strawberry​</span>​
// test.parentElement
// <a href=​"#">​…​</a>​
// $(test).parent()
// [<a href=​"#">​…​</a>​]
// $(test).parent().parent()
// [<li class=​"linkSighting" id=​"29">​…​</li>​]
// $(test).parent().parent().id
// undefined
// parent = $(test).parent().parent()
// [<li class=​"linkSighting" id=​"29">​…​</li>​]
// parent.id
// undefined
// parent.attr('id')
// "29"




