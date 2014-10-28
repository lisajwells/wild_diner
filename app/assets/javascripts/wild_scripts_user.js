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

///// button on found_or_hunt page to call getSightingsByUser function
  var goToUserShowButton = $('#found_button')
    goToUserShowButton.on("click", function(e){
    e.preventDefault();

      getSightingsByUser();      

    // make the report_or_hunt div hidden and the users_show div visible
    $('div#report_or_hunt').addClass('noshow');
    $('div#users_show').removeClass('noshow');
    });









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

