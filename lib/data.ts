import type { Product } from "./types"

const allProducts: Product[] = [
  // Bouquets
  {
    id: 1,
    name: "Romantic Rose Bouquet",
    code: "B001",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Spring Meadow Mix",
    code: "B002",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
  },
  {
    id: 3,
    name: "Elegant White Lilies",
    code: "B003",
    price: 64.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
  },
  {
    id: 4,
    name: "Vibrant Tulip Assortment",
    code: "B004",
    price: 44.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
    isBestSeller: true,
  },
  {
    id: 5,
    name: "Pastel Dream Bouquet",
    code: "B005",
    price: 54.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
    isBestSeller: true,
  },
  {
    id: 6,
    name: "Sunflower Sunshine",
    code: "B006",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
  },
  {
    id: 7,
    name: "Mixed Wildflower Bouquet",
    code: "B007",
    price: 42.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
  },
  {
    id: 8,
    name: "Classic Red Rose Dozen",
    code: "B008",
    price: 69.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
    isBestSeller: true,
  },
  {
    id: 9,
    name: "Pink Peony Paradise",
    code: "B009",
    price: 74.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
  },
  {
    id: 10,
    name: "Lavender Dreams",
    code: "B010",
    price: 47.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
  },
  {
    id: 11,
    name: "Garden Fresh Mix",
    code: "B011",
    price: 52.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
  },
  {
    id: 12,
    name: "Autumn Harvest Bouquet",
    code: "B012",
    price: 58.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bouquet",
  },

  // Vase Arrangements
  {
    id: 13,
    name: "Crystal Vase Roses",
    code: "V001",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
  },
  {
    id: 14,
    name: "Modern Orchid Arrangement",
    code: "V002",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    isBestSeller: true,
  },
  {
    id: 15,
    name: "Rustic Wildflower Mix",
    code: "V003",
    price: 69.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
  },
  {
    id: 16,
    name: "Tropical Paradise",
    code: "V004",
    price: 94.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
  },
  {
    id: 17,
    name: "Elegant Lily Arrangement",
    code: "V005",
    price: 84.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
  },
  {
    id: 18,
    name: "Seasonal Centerpiece",
    code: "V006",
    price: 72.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    isBestSeller: true,
  },
  {
    id: 19,
    name: "Luxury Peony Arrangement",
    code: "V007",
    price: 99.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    isBestSeller: true,
  },
  {
    id: 20,
    name: "Spring Garden Vase",
    code: "V008",
    price: 67.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
  },
  {
    id: 21,
    name: "Contemporary Rose Display",
    code: "V009",
    price: 87.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
  },
  {
    id: 22,
    name: "Mixed Seasonal Blooms",
    code: "V010",
    price: 76.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
  },
  {
    id: 23,
    name: "Designer Tulip Arrangement",
    code: "V011",
    price: 82.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
  },
  {
    id: 24,
    name: "Premium Hydrangea Display",
    code: "V012",
    price: 91.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
  },

  // Additional Seasonal Products
  {
    id: 25,
    name: "Winter Wonderland",
    code: "S001",
    price: 65.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "seasonal",
  },
  {
    id: 26,
    name: "Summer Breeze Collection",
    code: "S002",
    price: 55.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "seasonal",
  },
  {
    id: 27,
    name: "Holiday Special Arrangement",
    code: "S003",
    price: 78.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "seasonal",
    isBestSeller: true,
  },
  {
    id: 28,
    name: "Valentine's Day Special",
    code: "S004",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "seasonal",
    isBestSeller: true,
  },{
    id: 29,
    name: "Crystal Vase Roses",
    code: "V001",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Classic red roses arranged in a crystal-clear vase."
  },
  {
    id: 30,
    name: "Modern Orchid Arrangement",
    code: "V002",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    isBestSeller: true,
    description: "A sleek and exotic arrangement of blooming orchids."
  },
  {
    id: 31,
    name: "Rustic Wildflower Mix",
    code: "V003",
    price: 69.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Colorful wildflowers handpicked and displayed in a rustic vase."
  },
  {
    id: 32,
    name: "Tropical Paradise",
    code: "V004",
    price: 94.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Bright tropical blooms to bring island vibes to any space."
  },
  {
    id: 33,
    name: "Elegant Lily Arrangement",
    code: "V005",
    price: 84.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Graceful white lilies presented in a tall glass vase."
  },
  {
    id: 34,
    name: "Seasonal Centerpiece",
    code: "V006",
    price: 72.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    isBestSeller: true,
    description: "A floral centerpiece featuring seasonal favorites in full bloom."
  },
  {
    id: 35,
    name: "Luxury Peony Arrangement",
    code: "V007",
    price: 99.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    isBestSeller: true,
    description: "Elegant peonies in soft hues arranged with greenery."
  },
  {
    id: 36,
    name: "Spring Garden Vase",
    code: "V008",
    price: 67.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "A fresh selection of spring blooms in a garden-style arrangement."
  },
  {
    id: 37,
    name: "Contemporary Rose Display",
    code: "V009",
    price: 87.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "A chic arrangement of roses for a modern home."
  },
  {
    id: 38,
    name: "Mixed Seasonal Blooms",
    code: "V010",
    price: 76.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "A beautiful mix of flowers reflecting the season’s best."
  },
  {
    id: 39,
    name: "Designer Tulip Arrangement",
    code: "V011",
    price: 82.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Stylish tulips in vibrant colors arranged with flair."
  },
  {
    id: 40,
    name: "Premium Hydrangea Display",
    code: "V012",
    price: 91.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Lush hydrangeas overflowing in a premium glass vase."
  },
  {
    id: 41,
    name: "Vintage Bloom Vase",
    code: "V013",
    price: 75.49,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "A nostalgic blend of flowers in a vintage-style vase."
  },
  {
    id: 42,
    name: "Sunset Glow Mix",
    code: "V014",
    price: 73.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    isBestSeller: true,
    description: "Warm colors mimicking the sunset in a radiant floral mix."
  },
  {
    id: 43,
    name: "Classic White Elegance",
    code: "V015",
    price: 86.25,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Pure white blooms arranged for minimalist sophistication."
  },
  {
    id: 44,
    name: "Pastel Delight Vase",
    code: "V016",
    price: 78.50,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Soft pastel florals bringing calm and beauty to any setting."
  },
  {
    id: 45,
    name: "Autumn Glow Arrangement",
    code: "V017",
    price: 80.49,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Rich orange and golden hues for autumn ambiance."
  },
  {
    id: 46,
    name: "Fresh Market Blooms",
    code: "V018",
    price: 69.25,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Locally-sourced fresh flowers arranged like a market bouquet."
  },
  {
    id: 47,
    name: "Pink Peony Passion",
    code: "V019",
    price: 88.88,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "A sweet arrangement of blushing peonies for special moments."
  },
  {
    id: 48,
    name: "Tropical Breeze",
    code: "V020",
    price: 90.00,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    isBestSeller: true,
    description: "Bright exotic flowers inspired by island breezes."
  },
  {
    id: 49,
    name: "Lavender Fields Vase",
    code: "V021",
    price: 71.50,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Aromatic lavender stems mixed with complementary florals."
  },
  {
    id: 50,
    name: "Golden Hour Glory",
    code: "V022",
    price: 92.00,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Golden blooms capturing the magic of twilight."
  },
  {
    id: 51,
    name: "Serenity Blend",
    code: "V023",
    price: 85.00,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "A tranquil composition of whites, greens, and soft blues."
  },
  {
    id: 51,
    name: "Sweetheart Vase",
    code: "V024",
    price: 95.00,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    isBestSeller: true,
    description: "A romantic mix of red, pink, and white blossoms."
  },
  {
    id: 52,
    name: "Garden Romance",
    code: "V025",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "An English garden-inspired blend of flowers."
  },
  {
    id: 53,
    name: "Chic Mixed Florals",
    code: "V026",
    price: 74.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "A trendy selection of seasonal mixed flowers."
  },
  {
    id: 54,
    name: "Evening Whisper",
    code: "V027",
    price: 87.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Delicate evening-toned blooms in a frosted vase."
  },
  {
    id: 55,
    name: "Bright & Bold",
    code: "V028",
    price: 93.00,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Bold colors and vibrant florals to energize your room."
  },
  {
    id: 56,
    name: "Rose Medley Vase",
    code: "V029",
    price: 83.45,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "A colorful array of roses from soft pinks to deep reds."
  },
  {
    id: 57,
    name: "Classic Charm",
    code: "V030",
    price: 70.00,
    image: "/placeholder.svg?height=400&width=400",
    category: "vase",
    description: "Timeless floral favorites in a traditional vase style."
  },
]

export const bouquetsData: Product[] = allProducts.filter((p) => p.category === "bouquet").slice(0, 4)
export const vaseArrangementsData: Product[] = allProducts.filter((p) => p.category === "vase").slice(0, 4)
export const bestSellersData: Product[] = allProducts.filter((p) => p.isBestSeller).slice(0, 4)

export function getAllProducts(): Product[] {
  return allProducts
}

export function getProductsByCategory(category: string): Product[] {
  switch (category) {
    case "bouquets":
      return allProducts.filter((p) => p.category === "bouquet")
    case "vase-arrangements":
      return allProducts.filter((p) => p.category === "vase")
    case "best-sellers":
      return allProducts.filter((p) => p.isBestSeller)
    default:
      return []
  }
}
