class SearchesController < ApplicationController

  # to act on search form info
  def new

    season_id = params[:season_id]
    search_loc = params[:searchLocation]
# binding.pry
    search_location = search_loc.tr!(' ', '+s')

    response_google = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address="+search_location+"&key=AIzaSyD3P4t5g6dSiuu1HTeljU_lsVzjqpSinoc")

    lat = response_google["results"][0]["geometry"]["location"]["lat"]
    lng = response_google["results"][0]["geometry"]["location"]["lng"]

    

  end  


  # to display return of data gets from search form info
  def create
     
  end  

end



#### from freeDay
 # create zipcode and dates for api calls
  # zipcode = params[:zipcode]
  # date = params[:date]

  # # converts zipcode to lat long for eventbrite api
  # longlat = HTTParty.get("http://zipcodedistanceapi.redline13.com/rest/hDnZEdMTiTMIdufkYObXQUY134PG6pnn2KnGYaAh4nZhRfCQ3NNTIMVLQKrW9Okc/info.json/#{zipcode}/degrees")

  # lat = longlat["lat"]
  # long = longlat["lng"]

  # # get events
  # response = HTTParty.get("https://www.eventbriteapi.com/v3/events/search/?location.within=10mi&location.latitude=#{lat}&location.longitude=#{long}&start_date.range_start=#{date}T01%3A30%3A42Z&start_date.range_end=#{date}T23%3A30%3A42Z&token=3BS25F7EIU2IIB4YWQWF")
