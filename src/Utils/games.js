import genres from "./genres";

const games = [
  {
    id: "1",
    name: "Grand Theft Auto V",
    publisher: "Rockstar Games",
    rating: "4.77",
    price: "952",
    releaseDate:"14 Apr, 2015",
    isFavorite: false,
    description: [
      "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
      "Grand Theft Auto V for PC also includes Grand Theft Auto Online, with support for 30 players and two spectators. Grand Theft Auto Online for PC will include all existing gameplay upgrades and Rockstar-created content released since the launch of Grand Theft Auto Online, including Heists and Adversary modes.",
      "The PC version of Grand Theft Auto V and Grand Theft Auto Online features First Person Mode, giving players the chance to explore the incredibly detailed world of Los Santos and Blaine County in an entirely new way.",
    ],
    genre: [
      genres.openWorld,
      genres.action,
      genres.multiplayer,
      genres.singleplayer,
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
        processor: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHz",
        memory: "4 GB RAM",
        graphics: "NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)",
        storage: "72 GB available space",
        soundCard: "100% DirectX 10 compatible"
      },
      recommended: {
        os: 'Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
        processor: "Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
        storage: "72 GB available space",
        soundCard: "100% DirectX 10 compatible"
      }
    },
    preview: [
      "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_43e9c59d968e7f99f1eef065af85b3e542100366.1920x1080.jpg?t=1678296348",
      "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_cd721eb1856f0dd3b820e4e998c3b5fe7e7c9b4e.1920x1080.jpg?t=1678296348",
      "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_bb2ee3b9b48a60857873192cfff10546e01d4a86.1920x1080.jpg?t=1678296348",
      "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_8afff4bbd275fe7ddd56e3b5dc77f6658acf207e.1920x1080.jpg?t=1678296348",
      "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_3da42391c6317205177248dea0a48ced89998a8d.1920x1080.jpg?t=1678296348",
    ],
  },
  {
    id: "2",
    name: "Forza Horizon 5",
    publisher: "Xbox Game Studios",
    rating: "4.62",
    price: "3499",
    releaseDate:"9 Nov, 2021",
    isFavorite: false,
    description: [
      "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
      "Lead breathtaking expeditions across the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
      "Explore a world of striking contrast and beauty. Discover living deserts, lush jungles, historic cities, hidden ruins, pristine beaches, vast canyons and a towering snow-capped volcano.",
      "Immerse yourself in a deep campaign with hundreds of challenges that reward you for engaging in the activities you love. Meet new characters and choose the outcomes of their Horizon Story missions."
    ],
    genre: [
      genres.openWorld,
      genres.multiplayer,
      genres.singleplayer,
      genres.action,
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 version 15063.0 or higher',
        processor: "Intel i5-4460 or AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "NVidia GTX 970 OR AMD RX 470",
        directX: "Version 12",
        storage: "110 GB available space"
      },
      recommended: {
        os: 'Windows 10 version 15063.0 or higher',
        processor: "Intel i5-8400 or AMD Ryzen 5 1500X",
        memory: "16 GB RAM",
        graphics: "NVidia GTX 1070 OR AMD RX 590",
        directX: "Version 12",
        storage: "110 GB available space"
      }
    },
    preview: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1551360/ss_1da0673f82eccc3c9d222237dec40e36bf10eef3.1920x1080.jpg?t=1680128611",
      "https://cdn.akamai.steamstatic.com/steam/apps/1551360/ss_78e4f63e05d50e59b9966ba8da9a53dbf84fd8f4.1920x1080.jpg?t=1680128611",
      "https://cdn.akamai.steamstatic.com/steam/apps/1551360/ss_d26239d188301bb6f2475c6d323ae007195b7542.1920x1080.jpg?t=1680128611",
      "https://cdn.akamai.steamstatic.com/steam/apps/1551360/ss_49297af1ddef7779e644c2deb1df611a5f5cd344.1920x1080.jpg?t=1680128611",
      "https://cdn.akamai.steamstatic.com/steam/apps/1551360/ss_cf56e25a0290556ba83229eb0ab370d10be0407c.1920x1080.jpg?t=1680128611",
    ],
  },
  {
    id: "3",
    name: "Red Dead Redemption 2",
    publisher: "Rockstar Games",
    rating: "4.78",
    price: "3199",
    releaseDate:"5 Dec, 2019",
    isFavorite: false,
    description: [
      "Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
      "Now featuring additional Story Mode content and a fully-featured Photo Mode, Red Dead Redemption 2 also includes free access to the shared living world of Red Dead Online, where players take on an array of roles to carve their own unique path on the frontier as they track wanted criminals as a Bounty Hunter, create a business as a Trader, unearth exotic treasures as a Collector or run an underground distillery as a Moonshiner and much more.",
      "Red Dead Redemption 2 for PC also offers HDR support, the ability to run high-end display setups with 4K resolution and beyond, multi-monitor configurations, widescreen configurations, faster frame rates and more."
    ],
    genre: [
      genres.openWorld,
      genres.adventure,
      genres.singleplayer,
      genres.action
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 - April 2018 Update (v1803)',
        processor: "Intel® Core™ i7-4770K / AMD Ryzen 5 1500X",
        memory: "12 GB RAM",
        graphics: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
        storage: "150 GB available space",
        soundCard: "Direct X Compatible"
      },
      recommended: {
        os: 'Windows 10 - April 2018 Update (v1803)',
        processor: "Intel® Core™ i7-4770K / AMD Ryzen 5 1500X",
        memory: "12 GB RAM",
        graphics: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
        storage: "150 GB available space",
        soundCard: "Direct X Compatible"
      }
    },
    preview: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg?t=1671485009",
      "https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg?t=1671485009",
      "https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_d1a8f5a69155c3186c65d1da90491fcfd43663d9.1920x1080.jpg?t=1671485009",
      "https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_4ce07ae360b166f0f650e9a895a3b4b7bf15e34f.1920x1080.jpg?t=1671485009",
      "https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.1920x1080.jpg?t=1671485009",
    ],
  },
  {
    id: "4",
    name: "ELDEN RING",
    publisher: "FromSoftware Inc., Bandai Namco Entertainment",
    rating: "4.8",
    price: "2499",
    releaseDate:"25 Feb, 2022",
    isFavorite: false,
    description: [
      "THE NEW FANTASY ACTION RPG.",
      "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
      "A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment.",
      "A multilayered story told in fragments. An epic drama in which the various thoughts of the characters intersect in the Lands Between."
    ],
    genre: [
      genres.openWorld,
      genres.singleplayer,
      genres.multiplayer,
      genres.rpg,
      genres.action
    ],
    requirements: {
      minimum: {
        os: 'Windows 10',
        processor: "INTEL CORE I5-8400 or AMD RYZEN 3 3300X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB",
        directX: "Version 12",
        storage: "60 GB available space",
        soundCard: "Windows Compatible Audio Device"
      },
      recommended: {
        os: 'Windows 10/11',
        processor: "INTEL CORE I7-8700K or AMD RYZEN 5 3600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB",
        directX: "Version 12",
        storage: "60 GB available space",
        soundCard: "Windows Compatible Audio Device"
      }
    },
    preview: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3c3035a1343e.1920x1080.jpg?t=1682651495",
      "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_b70e156adf9e40aed24c10fb352b7813586e7290.1920x1080.jpg?t=1682651495",
      "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_e87a3e84890ab19f8995566e62762d5f8ed39315.1920x1080.jpg?t=1682651495",
      "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_c372274833ae6e5437b952fa1979430546a43ad9.1920x1080.jpg?t=1682651495",
      "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_41e2e8f3b0ad631e929e0c2ec3d1f21de883e98c.1920x1080.jpg?t=1682651495",
    ],
  },
  {
    id: "5",
    name: "Cyberpunk 2077",
    publisher: "CD PROJEKT RED",
    rating: "4.4",
    price: "2999",
    releaseDate:"10 Dec, 2020",
    isFavorite: false,
    description: [
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?",
      "Night City is packed to the brim with things to do, places to see, and people to meet. And it’s up to you where to go, when to go, and how to get there.",
      "Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices you make.",
      "Experience Cyberpunk 2077 with a host of changes and improvements to gameplay and economy, the city, map usage, and more."
    ],
    genre: [
      genres.openWorld,
      genres.singleplayer,
      genres.rpg,
      genres.action
    ],
    requirements: {
      minimum: {
        os: 'Windows 10',
        processor: "Intel Core i5-3570K or AMD FX-8310",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 or AMD Radeon RX 470",
        directX: "Version 12",
        storage: "70 GB available space",
      },
      recommended: {
        os: 'Windows 10',
        processor: "Intel Core i7-4790 or AMD Ryzen 3 3200G",
        memory: "12 GB RAM",
        graphics: "GTX 1060 6GB / GTX 1660 Super or Radeon RX 590",
        directX: "Version 12",
        storage: "70 GB available space",
      }
    },
    preview: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_526123764d1c628caa1eb62c596f1b732f416c8c.1920x1080.jpg?t=1680026109",
      "https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_0002f18563d313bdd1d82c725d411408ebf762b0.1920x1080.jpg?t=1680026109",
      "https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_f79fda81e6f3a37e0978054102102d71840f8b57.1920x1080.jpg?t=1680026109",
      "https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_ae4465fa8a44dd330dbeb7992ba196c2f32cabb1.1920x1080.jpg?t=1680026109",
      "https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_872822c5e50dc71f345416098d29fc3ae5cd26c1.1920x1080.jpg?t=1680026109",
      "https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_429db1d013a0366417d650d84f1eff02d1a18c2d.1920x1080.jpg?t=1680026109",
      "https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_9284d1c5b248726760233a933dbb83757d7d5d95.1920x1080.jpg?t=1680026109"
    ],
  },
];

export default games;
