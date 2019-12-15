const images = [
  {
    id: 5,
    src: "/assets/SpecterDaughter.jpg",
    name: "Specter and Daughter",
    description: "string",
    commission: false,
    fanart: true,
    mature: false,
    banner: true
  },
  {
    id: 4,
    src: "/assets/shovelShield.jpg",
    name: "Let's Go Digging For Treasure!",
    description: "string",
    commission: false,
    fanart: true,
    mature: false,
    banner: true
  },
  {
    id: 3,
    src: "/assets/magicStarting.png",
    name: "Magic is Starting",
    description: "string",
    commission: false,
    fanart: false,
    mature: false,
    banner: false
  },
  {
    id: 2,
    src: "/assets/IssykaHorse.png",
    name: "Issylan Horse",
    description: "string",
    commission: true,
    fanart: false,
    mature: false,
    banner: false
  },
  {
    id: 1,
    src: "/assets/coupleRelaxing.png",
    name: "Couple Relaxing",
    description: "string",
    commission: false,
    fanart: false,
    mature: false,
    banner: true
  },
  {
    id: 0,
    src: "/assets/IssykaMonkey.png",
    name: "Spiked-Tailed Monkey",
    description: "string",
    commission: true,
    fanart: false,
    mature: false
  }
];

export function getImages() {
  return images;
}
