"use client"
import {Suspense, use} from "react"
import {notFound, useParams} from "next/navigation"
import CategoryPage from "@/components/category-page"

import {bestSeller, bouquets, vaseArrangements} from "@/lib/constant";

interface PageProps {
    params: {
        category: string
    }
}

const validCategories = ["bouquets", "vase-arrangements", "best-sellers"]

const categoryTitles = {
    bouquets: bouquets,
    "vase-arrangements": vaseArrangements,
    "best-sellers": bestSeller,
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

