import type { Caterer } from "./catererTypes";

export const caterers: Caterer[] = [
  {
    id: "1",
    name: "Royal Feast Catering",
    images: [
      { id: "img1", url: "/images/caterer1.jpg", alt: "Buffet setup" },
      { id: "img2", url: "/images/caterer2.jpg", alt: "Live cooking station" },
      { id: "img3", url: "/images/caterer3.jpg", alt: "Dessert bar" },
    ],
    location: "Lahore, Pakistan",
    capacity: { min: 50, max: 1000 },
    price: { starting: 1500 },
    rating: 4.8,
    description:
      "Royal Feast Catering offers Pakistani and BBQ cuisine, with live cooking stations and a variety of desserts.",
    amenities: [
      "Multi-cuisine Menu",
      "Vegetarian Options",
      "Custom Desserts",
      "On-site Catering",
      "Event Staff",
      "Beverage Service",
    ],
    isSponsored: true,
  },
  {
    id: "2",
    name: "Elegant Events Caterers",
    images: [
      { id: "img1", url: "/images/caterer2.jpg", alt: "Continental spread" },
      { id: "img2", url: "/images/caterer4.jpg", alt: "Buffet" },
    ],
    location: "Karachi, Pakistan",
    capacity: { min: 100, max: 800 },
    price: { starting: 1200 },
    rating: 4.5,
    description:
      "Elegant Events Caterers specializes in continental cuisine and offers a premium buffet experience.",
    amenities: ["Continental Cuisine", "Event Staff", "Beverage Service"],
    isSponsored: true,
  },
  {
    id: "3",
    name: "Flavors by Sana",
    images: [
      { id: "img1", url: "/images/caterer3.jpg", alt: "Chinese fusion" },
      { id: "img2", url: "/images/caterer1.jpg", alt: "Fusion desserts" },
    ],
    location: "Islamabad, Pakistan",
    capacity: { min: 80, max: 600 },
    price: { starting: 1400 },
    rating: 4.7,
    description:
      "Flavors by Sana brings Chinese and fusion cuisine to your events, with a focus on creative desserts.",
    amenities: [
      "Chinese Cuisine",
      "Fusion Cuisine",
      "Dessert Bar",
      "Event Staff",
    ],
    isSponsored: true,
  },
  {
    id: "4",
    name: "Mehfil Caterers",
    images: [
      { id: "img1", url: "/images/caterer4.jpg", alt: "Pakistani buffet" },
    ],
    location: "Faisalabad, Pakistan",
    capacity: { min: 60, max: 500 },
    price: { starting: 1300 },
    rating: 4.6,
    description:
      "Mehfil Caterers offers authentic Pakistani cuisine and a variety of buffet options for weddings.",
    amenities: ["Pakistani Cuisine", "Buffet", "Event Staff"],
    isSponsored: true,
  },
];
