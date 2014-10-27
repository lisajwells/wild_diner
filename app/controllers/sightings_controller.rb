class SightingsController < ApplicationController


end






# else if (req.url.split('?')[0] == "/city") {
#     var parsedRequest = url.parse(req.url, true);
#     var city = parsedRequest.query.city;
#     var gmaps_url = "https://maps.googleapis.com/maps/api/geocode/json?address="
#       + city + "&key=AIzaSyBdcPMR6ZpFd7q-bh9oZo30YK0peT8CkGc";

#     request(gmaps_url, function (err, res, body) {
#       var json = JSON.parse(body);
#       var loc = json.results[0].geometry.location
#       var lat = loc["lat"];
#       var lng = loc["lng"];



