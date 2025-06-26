import {Suspense} from "react"
import {notFound,} from "next/navigation"
import CategoryPage from "@/components/category-page"

import {
  acrylicFlowerContainer,
  bestSeller,
  bouquets, decorFlower, eventFlowers,
  flowerBasket, flowerShelf, flowerVase, lunarFlowers, sympathyFlowers,
  vaseArrangements, weddingFlowers
} from "@/lib/constant";
import {fetchOrdersByCategory} from "@/fetch/FetchOrder";
import {mapProducts} from "@/lib/utils";

const validCategories = ["bouquets",
  "vase-arrangements",
  "flower-basket",
  "acrylic-flower-container",
  "wedding-flowers",
  "flower-shelf",
  "lunar-flowers",
  "event-flowers",
  "sympathy-flowers",
  "flower-vase",
  "decor-flower",
  "best-sellers"]

const categoryTitles = {
  bouquets: bouquets,
  "vase-arrangements": vaseArrangements,
  "best-sellers": bestSeller,
  "flower-basket": flowerBasket,
  "acrylic-flower-container": acrylicFlowerContainer,
  "wedding-flowers": weddingFlowers,
  "flower-shelf": flowerShelf,
  "lunar-flowers": lunarFlowers,
  "event-flowers": eventFlowers,
  "sympathy-flowers": sympathyFlowers,
  "flower-vase": flowerVase,
  "decor-flower": decorFlower,
}

const getCategoryId = (category: string): number => {
  const map: Record<string, number> = {
    "bouquets": 1, "vase-arrangements": 2, "flower-basket": 3, "acrylic-flower-container": 4,
    "wedding-flowers": 5, "flower-shelf": 6, "lunar-flowers": 7, "event-flowers": 8,
    "sympathy-flowers": 9, "flower-vase": 10, "decor-flower": 11, "best-sellers": 0
  }
  return map[category] ?? 0
}

export default async function Page({params,}: { params: Promise<{ category: string }> }) {
  const {category} = await params

  if (!validCategories.includes(category!)) {
    notFound()
  }

  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles]
  const page = await fetchOrdersByCategory(getCategoryId(category), 0, 30, "sellingTurn,desc", "", 0, 0)
  const products = mapProducts(page)

  return (
      <div className="min-h-screen bg-white pt-20">
        <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
          <CategoryPage category={category} categoryTitle={categoryTitle} initialProducts={products}/>
        </Suspense>
      </div>
  )
}

