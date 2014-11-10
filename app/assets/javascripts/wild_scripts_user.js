// scripts for the users show view (sightings and new sightings)


function getSightingsByUser() {
	$.ajax({
		url: '/users',
		type: 'GET'
	}).done(function(data){

		var sightings = data["user_sightings"];
		var $ul = $("#sightings_ul");
		$ul.empty();

		for (i = 0; i < sightings.length; i++) {
			var sightingFood = sightings[i]["food"];
			var sightingLocation = sightings[i]["location"];
			var sightingSeason = sightings[i]["season"];

			var sightingCreated = sightings[i]["created_at"];
			var sightingDate = moment(sightingCreated).format("MM/DD/YYYY");

	// we need the sighting obj id's in the db so that... 
	var sightingId = sightings[i]["id"]; 

		// ...we can add it to the li as a DOM id so  
		// when we go to delete it in the sighting view 

		$ul.append("<li class='linkSighting' id='" + sightingId  + 
			"'><a href='#'><p class='sightingFood'>" + sightingFood + "</p></a><p>" + sightingLocation + "</br>" + sightingSeason + "</br>" + sightingDate + "</p></li>");
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

		var sighting = results["sighting"];
		var photo = sighting["photo_url"];
		var date = moment(sighting["created_at"]).format("MM/DD/YYYY");

		$("#sighting_show").removeClass('noshow');

	// conditional so empty picture box does not display at all
	if (photo.length > 0){
		$(".show_sighting_photo").removeClass('noshow');
		$(".show_sighting_photo").html("<img src='" + photo + "'>")
	} else {
		$(".show_sighting_photo").addClass('noshow')
	}
	// giving the ID to this div so we can find which sighting it is to edit or delete it
	$(".show_sighting_info").attr('id', sightingId)
	$(".show_sighting_info").html("<p><b class='sightingFood'>" + sighting["food"] + "</b></p><p><b>location: </b>" + sighting["location"] + "</p><p><b>season: </b>" + sighting["season"] + "</p><p><b>date: </b>" + date + "</p><p><b>description: </b>" + sighting["description"] + "</p>" );

	})
};

// function editSighting(food, location, season, photo, description){
// function editSighting(sightingId){

// ///// to edit a sighting, put it to the db, and display the sighting view with the edited content
// // call this in the event listener for the edit_sighting_btn
//   $.ajax({
//     url: '/sightings/' + sightingId + '/edit', 
//     type: 'GET',
//     data: {
//     },
//   }).done(function(results){

//   	var food = results["food"];

//     $('#edit_food').text(food);
//     $('#edit_location').text(results["location"]);
//     $('#edit_season').text(results["season"]);
//     $('#edit_photo').text(results["photo"]);
//     $('#edit_description').text(results["description"]);
//     $('#sightingEditModal').modal('toggle');
//   })
// };


/////////////////// on load
$(function(){

	///// button to edit_sighting
	var editSightingBtn = $('#edit_sighting_submit');
	editSightingBtn.on('click', function(e){
		e.preventDefault();

		var div = this.parentElement.parentElement.parentElement.children[0].children[1];
		var sightingId = div.id;

  $.ajax({
    url: '/sightings/' + sightingId + '/edit', 
    type: 'GET',
    data: {
    },
  }).done(function(results){

  	// var food = results["sighting"]["food"];
  	// var location = results["sighting"]["location"];
  	// var season = results["sighting"]["season"];
  	// var description = results["sighting"]["description"];
  	// var photo = results["sighting"]["photo_url"];

    $('#edit_food').val(results["sighting"]["food"]);
    $('#edit_location').val(results["sighting"]["location"]);
    $('#edit_season').val(results["sighting"]["season"]);
    $('#edit_photo').val(results["sighting"]["photo"]);
    $('#edit_description').val(results["sighting"]["description"]);
    $('#sightingEditModal').modal('toggle');
  })
});

		// editSighting(sightingId);
	// });


	///// button on found_or_hunt page to call getSightingsByUser function
	var goToUserShowButton = $('#found_button');
	goToUserShowButton.on("click", function(e){
		e.preventDefault();

		getSightingsByUser();      

		// make the report_or_hunt div hidden and the users_show div visible
		$('div#report_or_hunt').addClass('noshow');
		$('div#users_show').removeClass('noshow');
		});

	///// event listener for <li>s to trigger sightings_show view
	$( "#sightings_ul" ).on( "click", "a", function( event ) {
		event.preventDefault();

		var sightingId = $(this).closest('[id]').attr('id');

		//call the function that finds the sighting and displays its info
		displaySighting(sightingId);
	});


	///// button on user view to bring up sighting_new modal --- *** not always bringing fresh content!!!!!
	var sightingNewButton = $('#sighting_new_btn');
	sightingNewButton.on("click", function(e){
		e.preventDefault();

		$('#sightingNewModal').modal('toggle');
	});
	//


	///// button on id="new_sighting_form" to submit form and create new sighting
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

		// run getSightingsByUser with new info included
		getSightingsByUser();
		$('#sightingNewModal').modal('toggle');

		})
	});

	///// topnav -- sightings should go to map view and my_sightings should go to users
	var topNavSightings = $('#topnav_sightings')
	topNavSightings.on('click', function(e){
		e.preventDefault();

		// make the sightings div shown and all others hidden
		$('div#report_or_hunt').addClass('noshow');
		$('div#sightings_index').removeClass('noshow');
		$('div#users_show').addClass('noshow');
		$('div#map_div').addClass('noshow');
	});


	var topNavMySightings = $('#topnav_my_sightings')
	topNavMySightings.on('click', function(e){
		e.preventDefault();

		// make the my_sightings div shown and all others hidden
		$('div#report_or_hunt').addClass('noshow');
		$('div#sightings_index').addClass('noshow');
		$('div#users_show').removeClass('noshow');
		$('div#map_div').addClass('noshow');
		$("#sighting_show").addClass('noshow');
		getSightingsByUser();
	});



////////////////
});
// end of onLoad



