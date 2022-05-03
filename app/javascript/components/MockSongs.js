const randomSongs = [
  {
    id: 1,
    title: "Under the bridge",
    artist: "Red Hot Chili Peppers",
    image: "https://m.media-amazon.com/images/M/MV5BMjA2YzU2YmItNDI3ZS00YTVhLThlNjgtZDZiZTQyOWY2YjU5XkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 2,
    title: "Free Bird",
    artist: "Lynyrd Skynyrd",
    image: "http://gardenandgun.com/wp-content/uploads/2019/07/pronounced-album.jpg"
  },
  {
    id: 3,
    title: "Under Pressure",
    artist: "Queen",
    image: "https://i.scdn.co/image/ab67616d0000b27370f9e1cf71793ee37d5e6730"
  },
  {
    id: 4,
    title: "Dream On",
    artist: "Aerosmith",
    image: "https://i1.wp.com/landtradio.com/wp-content/uploads/2019/06/Image_0-24.jpg?fit=940%2C938&ssl=1"
  },
  {
    id: 5,
    title: "It Was A Good Day",
    artist: "Ice Cube",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Ice_Cube_-_The_Predator_-_Album_Cover.jpg"
  },
  {
    id: 6,
    title: "Heavenly Father",
    artist: "Isaiah Rashad",
    image: "https://i1.sndcdn.com/artworks-000121139827-wrp9v5-t500x500.jpg"
  },
  {
    id: 7,
    title: "Normal Girl",
    artist: "SZA",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/SZA_-_Ctrl_cover.png/220px-SZA_-_Ctrl_cover.png"
  },
  {
    id: 8,
    title: "Plastic Plants",
    artist: "Mahalia",
    image: "https://i1.sndcdn.com/artworks-PwLDan8MPBwj-0-t500x500.jpg"
  },
  {
    id: 9,
    title: "Dreams, Fairytales, Fantasies",
    artist: "A$AP Ferg",
    image: "https://i1.sndcdn.com/artworks-yJEXLfBf3TYT-0-t500x500.jpg"
  },
  {
    id: 10,
    title: "Blame Em",
    artist: "Yhung T.O.",
    image: "https://i1.sndcdn.com/artworks-000221103833-9gaiss-t500x500.jpg"
  },
  {
    id: 11,
    title: "Lonely",
    artist: "Benee",
    image: "https://www.the360mag.com/wp-content/uploads/2020/04/wp-158775540974656572572386068954-scaled.jpg"
  },
  {
    id: 12,
    title: "Oxytocin",
    artist: "Billy Eilish",
    image: "https://media.pitchfork.com/photos/608839f84c67840074db8afb/1:1/w_3000,h_3000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg"
  },
  {
    id: 13,
    title: "Enemy",
    artist: "Imagine Dragons x J.I.D",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0cd265130636097.61842df318d10.jpg"
  },
  {
    id: 14,
    title: "IDGAF",
    artist: "J Jig Cicero",
    image: "https://i.scdn.co/image/ab67616d0000b27393be35d12488361f6bac6c97"
  },
  {
    id: 15,
    title: "Loretta",
    artist: "Ginger Root",
    image: "https://pbs.twimg.com/media/E_LBN6sVEAYgZNv.jpg"
  },
  {
    id: 16,
    title: "Run Away",
    artist: "Galantis",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d8/Galantis_-_Runaway_%28U_%26_I%29_cover.jpg"
  },
  {
    id: 17,
    title: "Never wanted to dance",
    artist: "Mindless Self Indulgence",
    image: "https://upload.wikimedia.org/wikipedia/en/1/15/Msi_if_cover.jpg"
  },
  {
    id: 18,
    title: "See you in Hell!",
    artist: "Aiden",
    image: "https://m.media-amazon.com/images/I/51exbKGNCxL._SY355_.jpg"
  },
  {
    id: 19,
    title: "Chop Suey",
    artist: "System of a down",
    image: "https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg"
  },
  {
    id: 20,
    title: "Sunrise, Sunset",
    artist: "Bright eyes",
    image: "https://m.media-amazon.com/images/I/51TKcAwPGmL._SX355_.jpg"
  },
  {
    id: 21,
    title: "Fergalicious",
    artist: "Fergie",
    image: "https://m.media-amazon.com/images/I/81TEzm1DtfL._SS500_.jpg"
  },
  {
    id: 22,
    title: "My Humps",
    artist: "Black Eyed Peas",
    image: "https://m.media-amazon.com/images/I/81P45Q3Pm5L._SS500_.jpg"
  },
  {
    id: 23,
    title: "Sex on Fire",
    artist: "Kings of Leon",
    image: "https://dt7v1i9vyp3mf.cloudfront.net/styles/news_large/s3/imagelibrary/I/IT_King_15-lFnYNoMIDRMlnRIgA2G6yBuMZTVbPbeO.jpg"
  },
  {
    id: 24,
    title: "Say it Ain't So",
    artist: "Weezer",
    image: "https://m.media-amazon.com/images/I/71WVSNXGhPL._SS500_.jpg"
  },
  {
    id: 25,
    title: "The Adults Are Talking",
    artist: "The Strokes",
    image: "https://pbs.twimg.com/media/EnmAb9JWEAYzmd8?format=jpg&name=900x900"
  },
  {
    id: 26,
    title: "Miss Murder",
    artist: "AFI",
    image: "https://m.media-amazon.com/images/I/71ySsVLThGL._SS500_.jpg"
  },
  {
    id: 27,
    title: "Cupid's Chokehold",
    artist: "Gym Class Heroes",
    image: "https://i1.sndcdn.com/artworks-jnkxCiBx8Z6y-0-t500x500.jpg"
  },
  {
    id: 28,
    title: "You're Gonna Go Far, Kid",
    artist: "The Offspring",
    image: "https://images.eil.com/large_image/OFFSPRING_RISE%2B%26%2BFALL%2C%2BRAGE%2B%26%2BGRACE-436147.jpg"
  },
  {
    id: 29,
    title: "Pocketful of Sunshine",
    artist: "Natasha Bedingfield",
    image: "https://m.media-amazon.com/images/I/81-EGIxi8+L._SL1500_.jpg"
  },
  {
    id: 30,
    title: "Mona Lisa",
    artist: "Lil Wayne",
    image: "https://i1.sndcdn.com/artworks-000416229372-e2m0xf-t500x500.jpg"
  },
  {
    id: 31,
    title: "Santeria",
    artist: "Sublime",
    Image: "https://www.google.com/search?q=santeria+Sublime+album&tbm=isch&source=iu&ictx=1&vet=1&fir=GFXrD1OctHcVsM%252CVNNTb0jtOlB0AM%252C%252Fg%252F11dfx_vx9f&usg=AI4_-kR6G6wHz7kBNLsha2QZ27XtFntKnA&sa=X&ved=2ahUKEwiT057kmML3AhXHDkQIHZVzC4kQ_B16BAgIEAE&biw=1143&bih=616&dpr=2#imgrc=GFXrD1OctHcVsM"
  },
  {
    id: 32,
    title: "Handlebars",
    artist: "Flobots",
    Image: "https://www.google.com/search?q=handlebars+flobots+album&tbm=isch&ved=2ahUKEwi2hI6MncL3AhWyAzQIHazWAuAQ2-cCegQIABAA&oq=handlebars+flobots+album&gs_lcp=CgNpbWcQAzoFCAAQgAQ6BggAEAcQHjoGCAAQCBAeOgQIABAYOgQIABAeOgYIABAFEB5Q8gJYgBVgwhZoAnAAeACAAVyIAYkGkgEBOZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=0otwYrbTGbKH0PEPrK2LgA4&bih=616&biw=1143&hl=en#imgrc=3VAT-t9Z7Cn82M"
  },
  {
    id: 33,
    title: "Fancy",
    artist: "Iggy Azalea",
    Image: "https://www.google.com/search?q=Iggy+Azalea+The+New+Classic&hl=en&stick=H4sIAAAAAAAAAONgFuLRT9c3LDTNMjNKSi9Q4tLP1TeoNElOTjHU4nPOz83NzwvOTEktT6wsXsQq7ZmeXqngWJWYk5qoEJKRquCXWq7gnJNYXJyZDAC9YyNKSgAAAA&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiFncigmcL3AhVdDEQIHX_BCxoQ_AUoAXoECAIQAw&biw=1143&bih=616&dpr=2#imgrc=UHLtYfL5FYdbbM"
  },
  {
    id: 34,
    title: "Money",
    artist: "Cardi B",
    Image: "https://www.google.com/search?q=cardi+b+money+album&tbm=isch&ved=2ahUKEwiZ7oCkmcL3AhUkKjQIHZMdCWsQ2-cCegQIABAA&oq=cardi+b+money+album&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEOgQIABBDOgQIABAYOgcIABCxAxBDOggIABCABBCxAzoLCAAQgAQQsQMQgwE6CggAELEDEIMBEEM6CAgAELEDEIMBOgQIABADUIsRWOpdYO1faABwAHgAgAFliAH8DZIBBDE5LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=0odwYpm9MKTU0PEPk7uk2AY&bih=616&biw=1143&hl=en#imgrc=HxCDNdieISVknM"
  },
  {
    id: 35,
    title: "The Bird and the Worm",
    artist: "The Used",
    Image: "https://www.google.com/search?q=The+Used+Lies+for+the+Liars&hl=en&stick=H4sIAAAAAAAAAONgFuLUz9U3MDE0SzZV4gIxjdMNCyuLtcSzk630c0uLM5P1E4tKMotLrBJzkkpzixexSodkpCqEFqemKPhkphYrpOUXKZQARXwyE4uKAU7DzxhQAAAA&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiYufzomsL3AhXYDkQIHbG1DzMQ_AUoAXoECAIQAw&biw=1143&bih=616&dpr=2#imgrc=6l-mnDf2wUe7cM"
  },
  {
    id: 36,
    title: "Give 'Em Hell, Kid",
    artist: "My Chemical Romance",
    Image: "https://www.google.com/search?q=my+chemical+romance+give+em+hell+kid+album&hl=en&tbm=isch&source=lnms&sa=X&ved=2ahUKEwj2ufG_msL3AhVxEEQIHaBqCY8Q_AUoAnoECAEQBA&biw=1143&bih=616&dpr=2#imgrc=gX5AW-MzLEYPUM"
  },
  {
    id: 37,
    title: "Fool For You",
    artist: "Snoh Aalegra",
    image: "https://i.scdn.co/image/9d2d48a7e7efdd03ddab9ec3d4e167aa01d16ecd"
  },
  {
    id: 38,
    title: "You Can't Save Me",
    artist: "SIR",
    image: "https://images.genius.com/37ac4c392a2261b97329c3a65c7b4fb6.680x680x1.jpg"
  },
  {
    id: 39,
    title: "All Bad",
    artist: "JID, Mereba",
    image: "https://i1.sndcdn.com/artworks-09LG5et874Ju-0-t500x500.jpg"
  },
  {
    id: 40,
    title: "Institution",
    artist: "Kodak Black",
    image: "http://images.genius.com/35be8383816371850b972388fcd1af5e.800x800x1.jpg"
  },
  {
    id: 41,
    title: "Scorpio",
    artist: "Moneybagg Yo",
    image: "https://images.genius.com/0e78cc268fbfc5f2d0cbaa3cba069ae3.1000x1000x1.png"
  },
  {
    id: 42,
    title: "Smoothies in 1991",
    artist: "Larry June",
    image: "https://images.genius.com/d053270ef1560994ce6d3bd9e7ea85d4.1000x1000x1.jpg"
  },
  {
    id: 43,
    title: "LOWKEY",
    artist: "Seddy Hendrix",
    image: "https://cdn.spinrilla.com/albums/206614/large/e42fc4106c9c543a03e2.JPG?1571842349"
  },
  {
    id: 44,
    title: "Better Days",
    artist: "NEIKED, Polo G, Mae Muller",
    image: "https://m.media-amazon.com/images/I/81B7ctbLaVL._SS500_.jpg"
  },
  {
    id: 45,
    title: "95 Till Infinity",
    artist: "Joey Bada$$",
    image: "https://images.genius.com/96b33b69305c39935693c717835d466c.1000x1000x1.jpg"
  },
  {
    id: 46,
    title: "Digital Dope",
    artist: "NugLife",
    image: "https://i1.sndcdn.com/artworks-jKCaP51lJlcHQHAd-sRfH7g-t500x500.jpg"
  },
  {
    id: 47,
    title: "Drugs N Hella Melodies",
    artist: "Don Toliver, Kali Uchis",
    image: "https://i1.sndcdn.com/artworks-MiT3sPxUnSJ0-0-t500x500.jpg"
  },
  {
    id: 48,
    title: "Redemption",
    artist: "Jay Rock, SZA",
    image: "https://media.pitchfork.com/photos/5b27cde60e0e204a9b9bf755/1:1/w_450%2Cc_limit/jay-rock-redemption-album-cover.jpg"
  },
  {
    id: 49,
    title: "California",
    artist: "Dom Kennedy",
    image: "https://i.scdn.co/image/ab67616d0000b273d6a42152bb68f22580714f71"
  },
  {
    id: 50,
    title: "FWB",
    artist: "Chika",
    image: "https://images.genius.com/78815daa570365b4fdec2db749357e4f.300x300x1.png"
  }
]


export default randomSongs
