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

