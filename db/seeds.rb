# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#

Sighting.delete_all
User.delete_all

joe = User.create( { 
  username: "joeblow", 
  email: "joeblow@joe.com",
  password: "joe",
  photo: "http://api.randomuser.me/portraits/med/men/37.jpg",
  bio: "You wouldn't believe all the things I eat."
  } )

avery = User.create( { 
  username: "averyromero", 
  email: "avery.romero17@example.com",
  password: "avery",
  photo: "http://api.randomuser.me/portraits/med/women/8.jpg",
  bio: "I'm completely new to this foraging thing."
  } )

dave = User.create( { 
  username: "davebowman", 
  email: "dave.bowman49@example.com",
  password: "dave",
  photo: "http://api.randomuser.me/portraits/med/men/80.jpg",
  bio: "Biltong ribeye nostrud ut anim officia adipisicing sausage laboris tri-tip meatloaf incididunt ullamco spare ribs. Strip steak drumstick kielbasa cupidatat shank andouille pig laboris leberkas. Ut anim ut velit, bresaola rump deserunt aliquip lorem. Salami pig eiusmod nisi deserunt. Ground round cupidatat ad ball tip, spare ribs eiusmod laboris voluptate shankle t-bone aliqua culpa in capicola."
  } )

Sighting.create ( {
    food: "ramps",
    description: "Both the leaves and the bulbs of ramps can be eaten and both are delicious.  They are best used fresh, but can also be prepared for long term storage.  We've found the best way to store the bulbs is by freezing.  Simply cut off the greens, clean the dirt off the bulbs and cut off the roots.  Then spread the bulbs out on a sheet pan or waxed paper so they are not touching and freeze.  This prevents them from sticking together.  Once they are frozen put them in jars or plastic containers, seal tightly and return to freezer.",
    location: "Red Hook, NY",
    season: "spring",
    photo_url: "https://farm4.staticflickr.com/3068/2290662828_0ca8cefa73.jpg",
    user_id: dave.id
  } )

Sighting.create ( {
    food: "skunk cabbage",
    description: "Grows in large, dense stands in wet woods and swamps. And it grows in a certain area in eastern Asia too. Even though the 2 populations have been separated for 6 to 8 million years, the plantsí forms are identical, and they interbreed readily. For a long time, biologists couldnít figure out why they didnít evolve into 2 different species incapable of interbreeding in all that time.",
    location: "Kingston, NY",
    season: "summer",
    photo_url: "http://www.flowerink.com/wordpress/wp-content/uploads/2013/04/skunk-cabbage.jpg",
    user_id: joe.id
  } )

Sighting.create ({
    food: "mulberries",
    description: "Raspberry and blackberry fruits superficially resemble mulberries, but the fruits of these unrelated thorny canes grow upright, on receptacles, with no fruit stalks.",
    location: "Hoboken, NJ",
    season: "summer",
    photo_url: "http://3.bp.blogspot.com/-kpSZWr7V2ds/UQ3KMIur3UI/AAAAAAAAE5g/EHb-J8xvowc/s320/mulberry1.jpg",
    user_id: avery.id
  })

Sighting.create ({
food: "wild ginger",
description: "One of my favorite wild seasonings, wild ginger is a small plant with paired, heart-shaped leaves emerging from the ground. And hanging from the crotch between the two leaves youíll find a single 3-parted deep purple-brown flower.",
location: "Clifton, NJ",
season: "winter",
photo_url: "http://d2yu7kf2857oao.cloudfront.net/wp-content/uploads/2010/11/asarum.jpg",
user_id: avery.id
})

Sighting.create ({
food: "wild strawberry",
description: "The fruit ripens in late spring or early summer. Much smaller than commercial strawberries, it takes long to collect, but tastes much better. Stuff yourself with wild strawberries, collect them to use on cereal, in pancakes, oatmeal, fruit salad, sauces, or other desserts. Theyíre so good, theyíre the symbol of perfect excellence.",
location: "Yonkers, NY",
season: "spring",
photo_url: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/3_wild_strawberries_close_up_UK_2006.JPG/800px-3_wild_strawberries_close_up_UK_2006.JPG",
user_id: joe.id
})

Sighting.create ({
food: "purslane",
description: "Purslane is one of my favorite summer vegetables, with a mild, sweet-sour flavor and a chewy texture. Its reddish stem, nearly as thick as a computer cable, creeps along the ground, rarely getting taller than a pint of milk. The stalkless leaves are paddle shaped, about as long as a small paper clip.",
location: "Glen Cove, NY",
season: "summer",
photo_url: "http://weeds.cropsci.illinois.edu/images/Purslane/images/Purslane%201.jpg",
user_id: dave.id
})


  # create_table "sightings", force: true do |t|
  #   t.string   "food"
  # description
  #   t.string   "location"
  #   t.string   "season"
  #   t.string   "photo_url"
  #   t.integer  "username_id"
  #   t.datetime "created_at"
  #   t.datetime "updated_at"
  # end

  # create_table "users", force: true do |t|
  #   t.string "username"
  #   t.string "email"
  #   t.string "password_digest"
  #   t.string "photo"
  #   t.string "bio"
  # end
