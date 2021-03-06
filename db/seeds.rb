# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#

Sighting.delete_all
User.delete_all

joe = User.create( { 
  username: "joedoe", 
  email: "joedoe@joe.com",
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

raymond = User.create( { 
  username: "raymondsimmons", 
  email: "raymond.simmons30@example.com",
  password: "raymond",
  photo: "http://api.randomuser.me/portraits/med/men/56.jpg",
  bio: "Culpa quinoa Odd Future, Brooklyn cred Truffaut qui dolor consectetur seitan est occaecat. Asymmetrical vinyl DIY mustache occupy, sriracha sustainable velit. Portland eu viral leggings chia roof party. Semiotics yr wolf single-origin coffee organic, pork belly farm-to-table. Disrupt YOLO culpa labore, ea pork belly direct trade Helvetica aliqua. Portland raw denim mlkshk nisi aliquip. Seitan qui in church-key, typewriter tofu consectetur."
  } )

Sighting.create ( {
    food: "ramps",
    description: "Both the leaves and the bulbs of ramps can be eaten and both are delicious.  They are best used fresh, but can also be prepared for long term storage.  We've found the best way to store the bulbs is by freezing.  Simply cut off the greens, clean the dirt off the bulbs and cut off the roots.  Then spread the bulbs out on a sheet pan or waxed paper so they are not touching and freeze.  This prevents them from sticking together.  Once they are frozen put them in jars or plastic containers, seal tightly and return to freezer.",
    location: "Poughkeepsie, NY",
    season: "spring",
    photo_url: "https://farm4.staticflickr.com/3068/2290662828_0ca8cefa73.jpg",
    user_id: dave.id,
    lat: 41.700371,
    lng: -73.920970
  } )

Sighting.create ( {
    food: "skunk cabbage",
    description: "Grows in large, dense stands in wet woods and swamps. And it grows in a certain area in eastern Asia too. Even though the 2 populations have been separated for 6 to 8 million years, the plantsí forms are identical, and they interbreed readily. For a long time, biologists couldnít figure out why they didnít evolve into 2 different species incapable of interbreeding in all that time.",
    location: "Kingston, NY",
    season: "summer",
    photo_url: "http://www.flowerink.com/wordpress/wp-content/uploads/2013/04/skunk-cabbage.jpg",
    user_id: joe.id,
    lat: 41.927037,
    lng: -73.997361
  } )

Sighting.create ({
    food: "mulberries",
    description: "Raspberry and blackberry fruits superficially resemble mulberries, but the fruits of these unrelated thorny canes grow upright, on receptacles, with no fruit stalks.",
    location: "Rosendale, NY",
    season: "summer",
    photo_url: "http://3.bp.blogspot.com/-kpSZWr7V2ds/UQ3KMIur3UI/AAAAAAAAE5g/EHb-J8xvowc/s320/mulberry1.jpg",
    user_id: avery.id,
    lat: 41.844323,
    lng: -74.08107
  })

Sighting.create ({
    food: "wild ginger",
    description: "One of my favorite wild seasonings, wild ginger is a small plant with paired, heart-shaped leaves emerging from the ground. And hanging from the crotch between the two leaves youíll find a single 3-parted deep purple-brown flower.",
    location: "Annandale-On-Hudson, NY",
    season: "winter",
    photo_url: "http://d2yu7kf2857oao.cloudfront.net/wp-content/uploads/2010/11/asarum.jpg",
    user_id: raymond.id,
    lat: 42.0128695,
    lng: -73.9081901
})

Sighting.create ({
    food: "wild strawberry",
    description: "The fruit ripens in late spring or early summer. Much smaller than commercial strawberries, it takes long to collect, but tastes much better. Stuff yourself with wild strawberries, collect them to use on cereal, in pancakes, oatmeal, fruit salad, sauces, or other desserts. Theyíre so good, theyíre the symbol of perfect excellence.",
    location: "Yonkers, NY",
    season: "spring",
    photo_url: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/3_wild_strawberries_close_up_UK_2006.JPG/800px-3_wild_strawberries_close_up_UK_2006.JPG",
    user_id: joe.id,
    lat: 40.931210,
    lng: -73.898747
})

Sighting.create ({
    food: "purslane",
    description: "Purslane is one of my favorite summer vegetables, with a mild, sweet-sour flavor and a chewy texture. Its reddish stem, nearly as thick as a computer cable, creeps along the ground, rarely getting taller than a pint of milk. The stalkless leaves are paddle shaped, about as long as a small paper clip.",
    location: "Glen Cove, NY",
    season: "summer",
    photo_url: "http://weeds.cropsci.illinois.edu/images/Purslane/images/Purslane%201.jpg",
    user_id: dave.id,
    lat: 40.862322,
    lng: -73.633739
})

Sighting.create ({
food: "pokeweed",
description: "This reddish-stained non-woody plant grows from 4-8 feet tall and branches, like a tree, then dies to the ground, all in one season. Its oval, stalked, alternate, smooth-edged emerald green leaves get 8-10 inches long.",
location: "Rhinebeck, NY",
season: "winter",
photo_url: "http://paganpages.org/content/wp-content/uploads/2013/07/pokeweed1-300x199.jpg",
user_id: avery.id,
lat: 41.931829,
lng: -73.907437
})

Sighting.create ({
food: "Epazote",
description: "Epazote contains compounds which actually act as an anti-gas agent ( referred to as a carminative, which means it reduces gas) when cooked with beans. It's chief use was as an agent to expel intestinal hookworms (wormseed). According to Jessica Houdret (The Ultimate Book of Herbs and Herb Gardening) it has also been recommended for nervous disorders, asthma, and problems with menstruation). CAUTION: This herb is poisonous in large does.",
location: "West Hurley, NY",
season: "autumn",
photo_url: "http://www.aerogardenblog.com/wp-content/uploads/2011/11/epazote.jpg",
user_id: raymond.id,
lat: 41.997314,
lng: -74.104864
})

Sighting.create ({
food: "Black Walnut",
description: "The black walnut tree (Juglans nigra) is a great hard wood tree that is grown in many home landscapes. Sometimes it is planted as a great shade tree and other times, for the wonderful nuts it produces. However, because of a thing called black walnut toxicity, some plants don’t do well when planted around the black walnut.",
location: "Saugerties, NY",
season: "winter",
photo_url: "http://www.gardeningknowhow.com/wp-content/uploads/2009/08/black-walnut2-400x266.jpg",
user_id: avery.id,
lat: 42.077591,
lng: -73.952913
})

Sighting.create ({
food: "Cattails",
description: "You can easily recognize a cattail stand: White, dense, furry, cigar-shaped overwintered seed heads stand atop very long, stout stalks, even as the young shoots first emerge in early spring.",
location: "Tivoli, NY",
season: "summer",
photo_url: "http://www.tacticalintelligence.net/wp-content/uploads/2009/11/cattail.jpg",
user_id: dave.id,
lat: 42.058424,
lng: -73.909300
})

Sighting.create ({
food: "Dandelion",
description: "The dandelion is a perennial, herbaceous plant with long, lance-shaped leaves. They're so deeply toothed, they gave the plant its name in Old French: Dent-de-lion means lion's tooth in Old French.",
location: "West Hurley, NY",
season: "spring",
photo_url: "http://www.nrca-railroad.com/wp-content/uploads/2012/01/dandelion-1024x768.jpg",
user_id: joe.id,
lat: 41.997314,
lng: -74.104864
})

Sighting.create ({
food: "Wild Blueberries",
description: "Wild blueberries, small and flavourful, are everywhere in woods in Northern Ontario this month. They are easy to find and so much more delicious and flavourful than the fat, farm-grown ones. They are called Saskatoon berries all across the Prairies. If you happen to live in British Columbia, watch out for salal berries, also dark blue but the size of a cranberry and delicious in jams.",
location: "Pine Plains, NY",
season: "autumn",
photo_url: "http://media.treehugger.com/assets/images/2011/10/food-foraging.jpg",
user_id: raymond.id,
lat: 44.0950626,
lng: -75.7052065
})

Sighting.create ({
food: "Nettles",
description: "Some people have learned to handle nettles without getting stung, but I find it's much more simple to strip off the leaves quickly with work gloves, rinse, and steam.",
location: "Lincoln Park, NY",
season: "winter",
photo_url: "http://www.wildmanstevebrill.com/JPEG'S/Plant%20Web%20Images/StingingNettleShoot.jpg",
user_id: dave.id,
lat: 41.9514,
lng: -73.9944
})

Sighting.create ({
food: "Nasturtium",
description: "In the world of edible annual flowers, nasturtiums are one of the tastiest and easiest to grow. Nasturtiums grow quickly from seed and, depending on the variety, can be grown as climbers on fences and trellises or as bushy plants in a window boxes and containers. Although treated as annuals, these fast growing plants are technically herbaceous perennials. In frost-free areas of the South and West they grow so vigorously that many people consider them weeds.
",
location: "Accord, NY",
season: "spring",
photo_url: "http://www.garden.org/ediblelandscaping/images/august2008/nasturtium1.jpg",
user_id: avery.id,
lat: 41.7911,
lng: -74.2289
})




  