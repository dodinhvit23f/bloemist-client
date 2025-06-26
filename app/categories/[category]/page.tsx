"use client"
import {Suspense, use} from "react"
import {notFound, useParams} from "next/navigation"
import CategoryPage from "@/components/category-page"

import {
  acrylicFlowerContainer,
  bestSeller,
  bouquets, decorFlower, eventFlowers,
  flowerBasket, flowerShelf, flowerVase, lunarFlowers, sympathyFlowers,
  vaseArrangements, weddingFlowers
} from "@/lib/constant";

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

export default async function Page({params,}: { params: Promise<{ category: string }> }) {
  const {category} = await params

  if (!validCategories.includes(category!)) {
    notFound()
  }

  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles]

  return (
      <div className="min-h-screen bg-white pt-20">
        <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
          <CategoryPage category={category} categoryTitle={categoryTitle}/>
        </Suspense>
      </div>
  )
}

