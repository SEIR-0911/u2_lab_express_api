const db = require('../db')
const { Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedReviews = async () => {
    const reviews = [
        {
            stars: 5,
            comment: "When I first took a glance at this movie, I was already interested in the animation style it had. After watching it, I REALLY loved the unique 2D take it had throughout the movie. It's completely different from your typical children's movie! I also really liked how at the end of the credits, it provided the audience a reminder to seek and reach out when they're having similar mental health issues. I was especially excited to hear Eugene Lee Yang voice act for this movie, and have supported him ever since his debut as a Try Guy. It also had an amazing representation of mental health issues, LGBTQ relationships among characters, diversity, corruption among a religion-like government, and so much more! Not only that, but the characters were also amazingly designed to look like their voice actors!! There's 100% no doubt there would be homophobic reviews for this movie, but I think it goes along well with what's trending on the media for children to see and educating them with issues we have today. It has been through many delays and cancellations, but I'm glad they were able to produce a 10/10 beautiful movie!",
            movie: "6521c534bd2cecc02c95e928"
        },
        {
            stars: 5,
            comment: "One of the best movies I've seen in a long time, animated or otherwise. Not only is the storyline engaging, but the movie also challenges a lot of the social myths we tell ourselves and our children (and I've got 2 kids myself). I'm very happy that the main love story is between two guys. We need more shows that normalize non-heterosexual relationships, and this movie does so quite tastefully. I'm also really happy that a number of the main characters (e.g. Gloreth, the Queen, the Director, Nimona) are not men. I've watched the movie 4 times now (my kids really like it), and I've seen something new each time. There are subtle clues along the way that are subconsciously pleasing when you first watch it but even more pleasing when you realize how those clues fit into the overarching story in a second (or third) viewing. I particularly love the friendship that Nimona and Ballister form over the course of the movie. It feels real with all the nuances and doubt and vulnerability that good friendships have. Unless you're homophobic (for whatever reason), I think most people will love this story. Kudos to Netflix on picking this one up!",
            movie: "6521c534bd2cecc02c95e928"
        },
        {
            stars: 5,
            comment: "One of the standout aspects of Honor Among Thieves is the plot, which feels as if it were lifted straight from a DND campaign. The attention to detail and respect for the source material make this movie a true love letter to the beloved tabletop game. The world-building is awe-inspiring, and it's clear that the creators have poured their heart and soul into crafting a spellbinding universe.",
            movie: "6521c534bd2cecc02c95e92a"
        },
        {
            stars: 5,
            comment: "At the heart of this cinematic adventure lies a charming thief whose character captivates from the first frame. Rather than relying on the tired trope of a superhuman protagonist, this film celebrates the power of being unapologetically human. Our hero, while lacking in conventional greatness, possesses an inner light that shines brilliantly through acts of love, selflessness, and unwavering loyalty. It is this extraordinary ordinary nature that allows audiences to deeply resonate with the character, finding inspiration in their own everyday lives. What truly sets this film apart is the profound exploration of love and compassion. Through the relationships forged amidst perilous quests, this movie teaches us the value of caring for others, even in the face of danger. As the band of unlikely adventurers embarks on their epic journey to retrieve a lost relic, their unwavering support for one another reveals the strength found in unity and empathy. This portrayal of love's transformative power serves as a poignant reminder of the potential within each of us to positively impact the world around us.",
            movie: "6521c534bd2cecc02c95e92a"
        },
        {
            stars: 5,
            comment: `Prepare to be spellbound and transported into a realm of unparalleled cinematic brilliance with "Everything Everywhere All At Once." Directed by the visionary duo Dan Kwan and Daniel Scheinert, this film is a mesmerizing tour de force that defies expectations, redefines storytelling, and leaves you breathless with its sheer audacity and artistry. From the first frame to the last, "Everything Everywhere All At Once" grabs hold of your senses and takes you on a transcendent journey through a kaleidoscope of realities. The visual spectacle that unfolds on screen is a testament to the boundless creativity and imagination of its creators. Each scene is meticulously crafted, bursting with vibrant colors, jaw-dropping set designs, and mind-bending visual effects that push the boundaries of what is possible. At the heart of this cinematic marvel is a remarkable performance by the incomparable Michelle Yeoh. With grace and depth, she effortlessly embodies the multifaceted character of Ma, a seemingly ordinary woman who discovers extraordinary powers and finds herself at the center of a cosmic tapestry. Yeoh's portrayal is a tour de force, imbuing Ma with a perfect balance of vulnerability, strength, and a quiet determination that resonates long after the film concludes. "Everything Everywhere All At Once" seamlessly weaves together genres, effortlessly transitioning between heart-pounding action, poignant drama, and moments of pure comedic brilliance. The skillful blending of these elements creates a symphony of emotions that keeps you engaged and invested in the characters' journeys. It's a testament to the film's ability to transcend traditional storytelling conventions and create an experience that is truly one-of-a-kind`,
            movie: '6521c534bd2cecc02c95e92c'
        },
        {
            stars: 5,
            comment: `The best movie I've seen in a very long time.  I went in blind not really knowing anything but "comedy" and "multiverse" but it really is so much more to it than that. The plot itself is extremely simple (not sure why a few have issues with understanding it).  If you don't want to follow the crazy universe hopping, which I can understand for older folk, it can be broken down to it's most simple of parts into a story about a fractured family with one single character in the very middle and mostly the cause of said familial problems.  The main character goes on an absolutely crazy adventure through different universes where they experience their life in completely different ways from the one they currently lead and the story plays out showing the effect of knowing such information has on them. It's absolutely hilarious, gut-wrenching, wholesome, and even full of fantastically choreographed fight scenes all in a fantastic blend.  Even in the times when things become sad, they throw in some comedy that doesn't truly feel like it takes away from the moment but it does help alleviate the "feels" a bit. (Especially when the plot hits close to home for a lot of people)  I was able to laugh and cry at the same time without feeling like I was stretched too thin. While I feel like the message behind the movie is extremely simple and can portrayed even without the crazy shenanigans of universe-hopping, this insanity is what gives the movie the character it needed to really elevate itself into something special.  Hell, the most touching moment in the movie for me was in one of these different universes and even though it was hilarious, I was still touched by the moment despite being able to laugh. Heck, even though the movie is quite long (for me at least) it never felt like it was overstaying it's welcome and I never had that feeling of "okay, let's wrap this up." that I feel with 90% of movies in the theater. Heavily recommend to most people, if they can deal with the off-the-wall shenanigans that occur.`,
            movie: '6521c534bd2cecc02c95e92c'
        }
    ]
    await Review.insertMany(reviews)
    console.log ('reviews added')
}

async function run(){
    await seedReviews()
    db.close()
}

run()