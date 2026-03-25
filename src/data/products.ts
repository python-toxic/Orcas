<<<<<<< HEAD

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Whale Song Pendant",
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Ocean Waves Canvas Art",
    price: 45.99,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    category: "art",
    badge: "New"
  },
  {
    id: 3,
    name: "Coral Reef Earrings",
    price: 65.99,
    originalPrice: 85.00,
    rating: 5.0,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry"
  },
  {
    id: 4,
    name: "Marine Life Photography Print",
    price: 35.99,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    category: "art"
  },
  {
    id: 5,
    name: "Ocean Breeze Beach Towel",
    price: 29.99,
    rating: 4.5,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    category: "beachwear",
    badge: "Sale"
  },
  {
    id: 6,
    name: "Deep Sea Explorer Wetsuit",
    price: 199.99,
    originalPrice: 259.99,
    rating: 4.9,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry",
    badge: "Premium"
  },
  {
    id: 7,
    name: "Seahorse Sculpture",
    price: 125.99,
    rating: 4.7,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    category: "art"
  },
  {
    id: 8,
    name: "Pearl Diving Mask",
    price: 95.99,
    originalPrice: 130.00,
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry",
    badge: "Popular"
  },
  {
    id: 9,
    name: "Ocean Current Swimsuit",
    price: 79.99,
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    category: "beachwear"
  },
  {
    id: 10,
    name: "Starfish Wall Art",
    price: 42.99,
    rating: 4.4,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    category: "art"
  },
  {
    id: 11,
    name: "Nautilus Shell Necklace",
    price: 155.99,
    originalPrice: 200.00,
    rating: 4.9,
    reviews: 93,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry",
    badge: "Limited Edition"
  },
  {
    id: 12,
    name: "Tropical Fish Print Set",
    price: 68.99,
    rating: 4.7,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    category: "art"
  },
  {
    id: 13,
    name: "Mermaid Tail Blanket",
    price: 39.99,
    rating: 4.3,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    category: "beachwear",
    badge: "Cozy"
  },
  {
    id: 14,
    name: "Dolphin Ring",
    price: 115.99,
    rating: 4.8,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry"
  },
  {
    id: 15,
    name: "Ocean Sunset Canvas",
    price: 89.99,
    originalPrice: 110.00,
    rating: 4.9,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    category: "art",
    badge: "Bestseller"
  }
=======
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number; // Changed from reviewCount to reviews
  image: string;
  backgroundImage: string; // Added backgroundImage
  category: string;
  badge?: string; 
  inStock: boolean;
  features: string[]; // Added features array
}

import beachsideSet from "@/IMG/beachside-sets.png";
import oceanBottle from "@/IMG/ocean-bottles.png";
import anchorBracelet from "@/IMG/anchor-bracelets.png";
import coralClip from "@/IMG/coral-clips.png";
import coastalArt from "@/IMG/coastal-arts.png";
import starfishEarrings from "@/IMG/starfish-earringss.png";
import shoreSkirt from "@/IMG/shore-skirts.png";
import waveJournal from "@/IMG/wave-journals.png";
import orcaCanvas from "@/IMG/orca-canvass.png";
import resinCoasters from "@/IMG/resin-coasterss.png";
import swirlPendant from "@/IMG/swirl-pendants.png";
import oceanCandles from "@/IMG/ocean-candless.png";
import shorelineShorts from "@/IMG/shoreline-shortss.png";
import shellTote from "@/IMG/shell-totes.png";
import wallRack from "@/IMG/wall-racks.png";
import windchime from "@/IMG/windchimes.png";



export const products: Product[] = [

   {
    id: 1,
    name: "Evening Shore Wrap Skirt",
    description: "Flowy and feminine, this wrap skirt captures the golden hour by the sea — effortless style with a nautical twist.",
    price: 1199,
    rating: 4.7,
    reviews: 2390,
    image: shoreSkirt,
    backgroundImage: shoreSkirt,
    category: "beachwear",
    badge: "Trending",
    inStock: true,
    features: [
      "Soft, breathable fabric",
      "Adjustable wrap-around fit",
      "Flattering silhouette for all body types",
      "Versatile for beach or casual outings",
      "Quick-drying material",
    ],
  },
  {
    id: 2,
    name: "Compass Wave Journal",
    description: "Let your thoughts flow like the tide in this beautifully bound journal featuring an elegant compass wave design.",
    price: 549,
    rating: 4.3,
    reviews: 237,
    image: waveJournal,
    backgroundImage: waveJournal,
    category: "stationery",
    inStock: true,
    features: [
      "High-quality lined paper",
      "Durable hard cover with matte finish",
      "Elegant compass wave embossment",
      "Lay-flat binding for easy writing",
      "Perfect for travel or daily reflections",
    ],
  },
  
  {
    id: 3,
    name: "Nautical Anchor Bracelet",
    description: "Minimal yet bold, this adjustable anchor bracelet is your daily reminder of the sea’s unwavering strength.",
    price: 499,
    rating: 4.6,
    reviews: 34,
    image: anchorBracelet,
    backgroundImage: anchorBracelet,
    category: "accessories",
    inStock: true,
    features: [
      "Saltwater-resistant braided rope",
      "Polished stainless steel anchor charm",
      "Adjustable sizing for comfort",
      "Symbolic nautical design",
      "Lightweight and travel-friendly",
    ],
  },
  {
    id: 4,
    name: "Seashell Coral Claw Clip",
    description: "Add a splash of the sea to your hair with this charming coral-inspired clip — lightweight and full of ocean charm.",
    price: 299,
    rating: 4.1,
    reviews: 19,
    image: coralClip,
    backgroundImage: coralClip,
    category: "accessories",
    badge: "Hot",
    inStock: true,
    features: [
      "Delicate coral-toned resin finish",
      "Lightweight yet strong grip",
      "Comfortable for all-day wear",
      "Eco-friendly material",
      "Perfect for beach or casual styling",
    ],
  },
  
 {
    id: 5,
    name: "Ocean Resin Coaster Set",
    description: "Protect your surfaces with this artisanal coaster set — handcrafted to mimic swirling ocean waves in rich blue resin.",
    price: 799,
    rating: 4.2,
    reviews: 32,
    image: resinCoasters,
    backgroundImage: resinCoasters,
    category: "art",
    inStock: true,
    features: [
      "Set of 4 unique coasters",
      "Handcrafted resin design",
      "Non-slip cork backing",
      "Heat-resistant and durable",
      "Perfect for adding a touch of coastal elegance",
    ],
  },
  
  {
    id: 6,
    name: "Shell Emblem Beach Tote",
    description: "Spacious and stylish, this shell-emblem tote is your go-to beach companion — sturdy enough for long coastal adventures.",
    price: 849,
    rating: 4.4,
    reviews: 25,
    image: shellTote,
    backgroundImage: shellTote,
    category: "accessories",
    inStock: true,
    features: [
      "Durable canvas material",
      "Spacious main compartment",
      "Interior zip pocket for valuables",
      "Comfortable rope handles",
      "Chic shell emblem embroidery",
    ],
  },
 
    {
    id: 7,
    name: "Beachside Serenity Set",
    description: "A curated beachside kit featuring calming tones, inspired by tranquil coastal mornings — perfect for gifting or personal indulgence.",
    price: 899,
    originalPrice: 1099,
    rating: 4.5,
    reviews: 87,
    image: beachsideSet,
    backgroundImage: beachsideSet,
    category: "accessories",
    badge: "New",
    inStock: true,
    features: [
      "Curated 5-piece set",
      "Calming ocean-inspired tones",
      "Includes scented candle & shell dish",
      "Perfect for relaxation or gifting",
      "High-quality, durable materials",
    ],
  },
 
  {
    id: 8,
    name: "Ocean Wave Stainless Bottle",
    description: "Stay refreshed with this insulated bottle featuring an ocean wave pattern — sleek, durable, and perfect for beach days.",
    price: 649,
    originalPrice: 799,
    rating: 4.2,
    reviews: 51,
    image: oceanBottle,
    backgroundImage: oceanBottle,
    category: "stationery",
    inStock: true,
    features: [
      "Double-wall insulation (24hr cold)",
      "Food-grade stainless steel",
      "Leak-proof cap with handle",
      "Ergonomic design for easy grip",
      "BPA-free and eco-friendly",
    ],
  },
  
  {
    id: 9,
    name: "Ocean Serenity Canvas",
    description: "A breathtaking canvas artwork capturing the majestic stillness of the ocean — perfect for calming any room.",
    price: 1799,
    rating: 4.9,
    reviews: 66,
    image: orcaCanvas,
    backgroundImage: orcaCanvas,
    category: "art",
    inStock: true,
    features: [
      "Gallery-wrapped premium canvas",
      "Vivid, fade-resistant colors",
      "Stunning ocean seascape imagery",
      "Adds a peaceful focal point to any space",
      "Easy to clean and maintain",
    ],
  },
   {
    id: 10,
    name: "Coastal Calm Wall Art",
    description: "Bring serenity into your space with this high-quality canvas featuring soft, painterly coastlines — perfect for ocean lovers.",
    price: 1599,
    originalPrice: 1899,
    rating: 4.8,
    reviews: 113,
    image: coastalArt,
    backgroundImage: coastalArt,
    category: "art",
    inStock: true,
    features: [
      "High-resolution giclée print",
      "Premium stretched canvas",
      "Fade-resistant archival inks",
      "Ready to hang with pre-installed hooks",
      "Adds a serene coastal ambiance",
    ],
  },
 
  {
    id: 11,
    name: "Swirl Ocean Pendant",
    description: "Carry the ocean with you — this swirling blue resin pendant is a wearable homage to the sea’s endless motion.",
    price: 999,
    rating: 4.6,
    reviews: 38,
    image: swirlPendant,
    backgroundImage: swirlPendant,
    category: "accessories",
    inStock: true,
    features: [
      "Hand-poured blue resin with unique swirl",
      "Adjustable silver-plated chain",
      "Hypoallergenic and lightweight",
      "Evokes calming ocean currents",
      "Comes in an elegant gift box",
    ],
  },
  {
    id: 12,
    name: "Dual Scent Ocean Candles",
    description: "Infused with layered oceanic scents, these candles evoke the essence of sea breeze and driftwood for peaceful evenings.",
    price: 699,
    rating: 4.5,
    reviews: 29,
    image: oceanCandles,
    backgroundImage: oceanCandles,
    category: "art",
    inStock: true,
    features: [
      "Two distinct layered ocean scents",
      "Long-burning soy wax blend",
      "Natural cotton wick",
      "Reusable frosted glass jar",
      "Creates a tranquil coastal atmosphere",
    ],
  },
  {
    id: 13,
    name: "Tropical Shoreline Shorts",
    description: "Breezy and breathable, these shoreline shorts are ideal for sun-filled days or relaxed evenings by the coast.",
    price: 1099,
    rating: 4.3,
    reviews: 18,
    image: shorelineShorts,
    backgroundImage: shorelineShorts,
    category: 'beachwear',
    inStock: true,
    features: [
      "Lightweight, quick-dry fabric",
      "Elastic waistband with drawstring",
      "Relaxed fit for maximum comfort",
      "Vibrant tropical print",
      "Perfect for beach, pool, or casual wear",
    ],
  },
  
  {
    id: 14,
    name: "Starfish Gold Earrings",
    description: "Elegant starfish earrings with a golden glow — lightweight, ocean-inspired accents to elevate any outfit.",
    price: 749,
    rating: 4.4,
    reviews: 28,
    image: starfishEarrings,
    backgroundImage: starfishEarrings,
    category: "accessories",
    inStock: true,
    features: [
      "Delicate gold-plated finish",
      "Hypoallergenic ear hooks",
      "Lightweight and comfortable",
      "Intricate starfish design",
      "Perfect for everyday wear or special occasions",
    ],
  },
  {
    id: 15,
    name: "Seaside Entry Wall Rack",
    description: "Welcome the coast indoors with this wooden wall rack — perfect for keys, hats, or memories from the sea.",
    price: 1399,
    rating: 4.7,
    reviews: 42,
    image: wallRack,
    backgroundImage: wallRack,
    category: "art",
    inStock: true,
    features: [
      "Solid reclaimed wood construction",
      "Distressed coastal finish",
      "Multiple hooks for organization",
      "Easy wall-mount installation",
      "Adds rustic charm to any entryway",
    ],
  },
  {
    id: 16,
    name: "Shell & Glass Windchime",
    description: "Handcrafted from real shells and colored glass, this windchime sings softly with the breeze — pure coastal nostalgia.",
    price: 599,
    rating: 4.6,
    reviews: 36,
    image: windchime,
    backgroundImage: windchime,
    category: "art",
    badge: "Bestseller",
    inStock: true,
    features: [
      "Authentic natural shells",
      "Colorful recycled glass pieces",
      "Hand-tuned for melodic sounds",
      "Durable weather-resistant string",
      "Perfect for patios, gardens, or balconies",
    ],
  },
>>>>>>> 7c268fc (Initial commit)
];

export const categories = [
  { id: "all", name: "All Products" },
<<<<<<< HEAD
  { id: "jewelry", name: "Jewelry" },
  { id: "art", name: "Marine Art" },
  { id: "beachwear", name: "Beachwear" }
];
=======
  { id: "art", name: "Marine Art" },
  { id: "beachwear", name: "Beachwear" },
  { id: "accessories", name: "Accessories" }, // Added for clarity based on products
  { id: "stationery", name: "Stationery" }, // Added for clarity based on products
];
>>>>>>> 7c268fc (Initial commit)
