const db = require('../db/index')

const { Movie, Actor, Review } = require(`../models/index`)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    //ACTORS

    const actor1 = await new Actor({
        name: "Tom Hanks",
        age: 67,
        alive: true,
        picURL: `https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg`
    })
    actor1.save()

    const actor2 = await new Actor({
        name: "Olivia Newton-John",
        age: 74,
        alive: false,
        picURL: `https://en.wikipedia.org/wiki/Olivia_Newton-John#/media/File:Olivia_Newton_John_(6707495311)_(cropped_to_look_large).jpg`
    })
    actor2.save()

    const actor3 = await new Actor({
        name: "John Travolta",
        age: 69,
        alive: true,
        picURL: `https://en.wikipedia.org/wiki/John_Travolta#/media/File:John_Travolta_Cannes_2018_(cropped).jpg`
    })
    actor3.save()

    const actor4 = await new Actor({
        name: "Jeff Conaway",
        age: 61,
        alive: false,
        picURL: `https://en.wikipedia.org/wiki/Jeff_Conaway#/media/File:JeffConaway1998.jpg`
    })
    actor4.save()

    const actor5 = await new Actor({
        name: "Quentin Tarantino",
        age: 60,
        alive: true,
        picURL: `https://en.wikipedia.org/wiki/Quentin_Tarantino#/media/File:Quentin_Tarantino_by_Gage_Skidmore.jpg`
    })
    actor5.save()
    
    const actor6 = await new Actor({
        name: "Uma Thurman",
        age: 53,
        alive: true,
        picURL: `https://en.wikipedia.org/wiki/Uma_Thurman#/media/File:Uma_Thurman_Cannes_2017_(cropped).jpg`
    })
    actor6.save()
    
    const actor7 = await new Actor({
        name: "Christopher Walken",
        age: 80,
        alive: true,
        picURL: `https://en.wikipedia.org/wiki/Christopher_Walken#/media/File:Christopher_Walken_2018.jpg`
    })
    actor7.save()
    
    const actor8 = await new Actor({
        name: "Samuel L Jackson",
        age: 74,
        alive: true,
        picURL: `https://en.wikipedia.org/wiki/Samuel_L._Jackson#/media/File:SamuelLJackson.jpg`
    })
    actor8.save()
    
    const actor9 = await new Actor({
        name: "Meryl Streep",
        age: 67,
        alive: true,
        picURL: `https://en.wikipedia.org/wiki/Meryl_Streep#/media/File:Meryl_Streep_December_2018.jpg`
    })
    actor9.save()
    
    const actor10 = await new Actor({
        name: "Lucy Liu",
        age: 54,
        alive: true,
        picURL: `https://en.wikipedia.org/wiki/Lucy_Liu#/media/File:Lucy_Liu_Cannes_2008.jpg`
    })
    actor10.save()

    const actor11 = await new Actor({
        name: "John Cazale",
        age: 42,
        alive: false,
        picURL: `https://en.wikipedia.org/wiki/John_Cazale#/media/File:John_Cazale.jpg`
    })
    actor11.save()

    const actor12 = await new Actor({
        name: "David Carradine",
        age: 72,
        alive: false,
        picURL: `https://en.wikipedia.org/wiki/David_Carradine#/media/File:David_Carradine_Polanski_Unauthorized.jpg`
    })
    actor12.save()

    const actor13 = await new Actor({
        name: "Richard Petty",
        age: 86,
        alive: true,
        picURL: `https://en.wikipedia.org/wiki/Richard_Petty#/media/File:Richard_Petty_(51736170681)_(cropped).jpg`
    })
    actor13.save()

    const actor14 = await new Actor({
        name: "Larry The Cable Guy",
        age: 60,
        alive: true,
        picURL: `https://en.wikipedia.org/wiki/Larry_the_Cable_Guy#/media/File:Larry_the_Cable_Guy.jpg`
    })
    actor14.save()
    
    //REVIEWS

    const review1 = await new Review({
            score: 10,
            comment: `I'm baby irony cred single-origin coffee, fit sartorial pop-up big mood. Listicle chicharrones etsy disrupt selvage chartreuse prism taxidermy subway tile. Coloring book meggings flexitarian kombucha, bespoke sustainable four dollar toast bodega boys +1. Street art portland blackbird spyplane, cornhole etsy raw denim bicycle rights tote bag 8-bit skateboard DSA dreamcatcher succulents 90's.`
        })
        review1.save()
        
    const review2 = await new Review({
        score: 20,
        comment: `Meh DSA polaroid etsy, occupy cold-pressed VHS. Squid la croix fam everyday carry, hell of fit trust fund umami gluten-free portland kale chips dreamcatcher. Actually organic paleo chicharrones jean shorts asymmetrical trust fund leggings cardigan normcore blackbird spyplane. Live-edge DIY intelligentsia fam, chambray snackwave fashion axe pickled pitchfork retro sus knausgaard. Vibecession mlkshk iceland blue bottle bodega boys, kale chips forage single-origin coffee subway tile vice austin chartreuse hexagon vape. Bodega boys dreamcatcher master cleanse craft beer helvetica, af salvia. Palo santo truffaut farm-to-table copper mug.`
    })
    review2.save()

    const review3 = await new Review({
        score: 30,
        comment: `Vape kickstarter wolf ugh banjo cronut tbh raclette. Ennui direct trade tofu edison bulb chicharrones. Literally chicharrones cray praxis blue bottle hoodie chartreuse echo park health goth XOXO ascot bespoke edison bulb stumptown pop-up. Hammock bruh la croix salvia. Sriracha williamsburg snackwave etsy, franzen mustache blue bottle air plant deep v cornhole hoodie vice vaporware YOLO.`
    })
    review3.save()

    const review4 = await new Review({
        score: 40,
        comment: `Bruh man braid jean shorts, chicharrones etsy pug cardigan 3 wolf moon jawn vinyl celiac waistcoat selfies man bun. Pabst flannel single-origin coffee deep v, street art plaid lyft succulents unicorn photo booth master cleanse synth chillwave. Echo park wayfarers drinking vinegar cliche vexillologist vibecession. Jean shorts disrupt thundercats bespoke air plant godard tattooed salvia. Cray crucifix same flexitarian hella normcore poke before they sold out raw denim man braid affogato dreamcatcher slow-carb 8-bit fixie. Stumptown hammock wolf, butcher slow-carb put a bird on it master cleanse actually VHS bespoke.`
    })
    review4.save()

    const review5 = await new Review({
        score: 50,
        comment: `+1 farm-to-table kale chips, prism vice four dollar toast microdosing chartreuse trust fund meditation yes plz pok pok pork belly. 90's drinking vinegar sus kogi tumblr. Succulents XOXO flexitarian, fit activated charcoal fixie dreamcatcher mixtape hot chicken taiyaki banjo hashtag. Semiotics sustainable chicharrones, bespoke butcher helvetica tilde. Letterpress pinterest gochujang marfa echo park pour-over. Dreamcatcher glossier bodega boys blue bottle, locavore jawn bitters meh. Kinfolk plaid coloring book church-key cardigan.`
    })
    review5.save()

    const review6 = await new Review({
        score: 60,
        comment: `Post-ironic subway tile seitan man braid hammock scenester plaid tacos raclette tote bag. 3 wolf moon sus food truck pour-over blue bottle etsy. Chia pop-up twee ramps mixtape. Narwhal biodiesel master cleanse chillwave.`
    })
    review6.save()

    const review7 = await new Review({
        score: 56,
        comment: `Shabby chic fixie salvia, neutra cold-pressed vinyl brunch prism stumptown microdosing. Air plant kitsch kickstarter DSA mumblecore, crucifix polaroid helvetica wayfarers vice viral lumbersexual tumblr affogato. Copper mug stumptown four dollar toast chia. Sustainable gatekeep mlkshk blog narwhal direct trade salvia humblebrag quinoa banh mi neutra. Irony whatever cliche lo-fi.`
    })
    review7.save()

    const review8 = await new Review({
        score: 72,
        comment: `Affogato put a bird on it fam sriracha paleo. Yuccie everyday carry tousled iceland tacos truffaut. Four dollar toast selfies craft beer meggings banjo tattooed master cleanse kale chips chartreuse XOXO roof party whatever next level. Iceland cardigan chambray subway tile meditation beard poke. Chicharrones leggings normcore pour-over coloring book. Palo santo man bun jean shorts, taxidermy readymade typewriter church-key photo booth copper mug fanny pack chambray. Yes plz hella ascot, fam fit williamsburg tbh synth helvetica chillwave.`
    })
    review8.save()

    const review9 = await new Review({
        score: 85,
        comment: `Chia gorpcore pitchfork, trust fund ramps bespoke intelligentsia pok pok kickstarter 8-bit try-hard vinyl. Green juice neutra taiyaki kickstarter shaman bruh street art umami 90's hella offal. Vegan jean shorts vinyl church-key. Brunch knausgaard single-origin coffee stumptown meh post-ironic semiotics ascot enamel pin.`
    })
    review9.save()

    const review10 = await new Review({
        score: 99,
        comment: `Marfa mixtape ethical, synth cardigan tilde tonx portland pug bespoke 3 wolf moon tumeric godard hell of. Organic church-key williamsburg air plant, portland try-hard chartreuse man braid tonx kitsch. XOXO pour-over slow-carb wolf, iPhone shoreditch tbh. Cliche cronut jean shorts marfa crucifix irony. Twee stumptown retro thundercats, lomo succulents health goth vibecession freegan lumbersexual af cronut. Narwhal etsy pour-over cliche synth jean shorts humblebrag hashtag heirloom kinfolk poke forage tbh biodiesel venmo. Knausgaard next level salvia, stumptown fingerstache seitan ugh cloud bread unicorn.`
    })
    review10.save()

    const review11 = await new Review({
        score: 100,
        comment: `Drinking vinegar vexillologist butcher gorpcore af keytar. Sus jean shorts austin taxidermy. Live-edge fixie sustainable 3 wolf moon pitchfork, small batch raw denim XOXO bruh. Venmo iceland gentrify church-key. Copper mug etsy austin ugh, 90's photo booth salvia offal readymade edison bulb knausgaard neutral milk hotel. Solarpunk umami chicharrones lyft typewriter. Austin pabst flannel chillwave schlitz vape glossier messenger bag tofu.`
    })
    review11.save()

    const review12 = await new Review({
        score: 0,
        comment: `Franzen poke normcore unicorn typewriter polaroid raw denim beard. Keffiyeh cardigan man braid DIY raw denim, tilde humblebrag schlitz affogato blue bottle lomo hashtag enamel pin lumbersexual messenger bag. Gluten-free poutine art party shaman aesthetic kombucha tacos, tattooed Brooklyn. Gastropub 90's tumeric, 8-bit taxidermy ennui grailed street art selvage DSA vaporware poke. Actually quinoa four loko gentrify ugh vaporware deep v, small batch hoodie occupy meditation snackwave. Organic thundercats butcher, chia sriracha vice cliche big mood cred sustainable lo-fi ethical helvetica. Twee wayfarers chia fingerstache.`
    })
    review12.save()
    
    //MOVIES

    const movies = [
        {
            title: "Grease",
            runMin: 110,
            rating: 10,
            releaseYear: 1978,
            description: `Experience the friendships, romances and adventures of a group of high school kids in the 1950s. Welcome to the singing and dancing world of "Grease," the most successful movie musical of all time. A wholesome exchange student (Olivia Newton-John) and a leather-clad Danny (John Travolta) have a summer romance, but will it cross clique lines?`,
            actors: [actor3._id, actor2._id, actor4._id],
            reviews: [review1._id, review2._id],
            posterURL: `https://upload.wikimedia.org/wikipedia/en/e/e2/Grease_ver2.jpg`,
        }, 
        {
            title: "Pulp Fiction",
            runMin: 154,
            rating: 92,
            releaseYear: 1994,
            description: `Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, "Pumpkin" (Tim Roth) and "Honey Bunny" (Amanda Plummer).`,
            actors: [actor3._id, actor5._id, actor6._id, actor7._id, actor8._id],
            reviews: [review3._id, review4._id],
            posterURL: `https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg`,
        }, 
        {
            title: "The Deer Hunter",
            runMin: 183,
            rating: 86,
            releaseYear: 1978,
            description: `In 1968, Michael (Robert De Niro), Nick (Christopher Walken) and Steven (John Savage), lifelong friends from a working-class Pennsylvania steel town, prepare to ship out overseas following Steven's elaborate wedding and one final group hunting trip. In Vietnam, their dreams of military honor are quickly shattered by the inhumanities of war; even those who survive are haunted by the experience, as is Nick's hometown sweetheart, Linda (Meryl Streep).`,
            actors: [actor7._id, actor9._id, actor11._id],
            reviews: [review5._id, review6._id],
            posterURL: `https://upload.wikimedia.org/wikipedia/en/5/57/The_Deer_Hunter_poster.jpg`,
        }, 
        {
            title: "Kill Bill: Volume 1",
            runMin: 111,
            rating: 85,
            releaseYear: 2003,
            description: `A former assassin, known simply as The Bride (Uma Thurman), wakes from a coma four years after her jealous ex-lover Bill (David Carradine) attempts to murder her on her wedding day. Fueled by an insatiable desire for revenge, she vows to get even with every person who contributed to the loss of her unborn child, her entire wedding party, and four years of her life. After devising a hit list, The Bride sets off on her quest, enduring unspeakable injury and unscrupulous enemies.`,
            actors: [actor6._id, actor10._id, actor12._id, actor8._id],
            reviews: [review7._id, review8._id],
            posterURL: `https://upload.wikimedia.org/wikipedia/en/2/2c/Kill_Bill_Volume_1.png`,
        }, 
        {
            title: "Cars",
            runMin: 117,
            rating: 75,
            releaseYear: 2006,
            description: `The greatest movie ever made.`,
            actors: [actor13._id, actor14._id],
            reviews: [review9._id, review10._id],
            posterURL: `https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg`,
        }
    ]

    await Movie.insertMany(movies)
    console.log("created some movies")
}

const reSeed = async () => {
    db.dropDatabase()
    await main()
    db.close()
}

reSeed()