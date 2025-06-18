"use client"
import HeroSlider from "@/components/hero-slider"
import FeaturedCategories from "@/components/featured-categories"
import ProductSection from "@/components/product-section"
import {bestSeller, bouquets, vaseArrangements} from "@/lib/constant";
import {useEffect, useState} from "react";
import {fetchOrdersByCategory} from "@/fetch/FetchOrder";
import {mapOrders} from "@/lib/utils";
import {Product} from "@/lib/types";

export default function Home() {
    const [bouquetsData, setBouquetsData] = useState<Product[]>([]);
    const [vaseArrangementsData, setVaseArrangementsData] = useState<Product[]>([]);
    const [bestSellersData, setBestSellersData ]= useState<Product[]>([]);

    useEffect(() => {
        fetchOrdersByCategory(1, 0, 4, "sellingTurn,desc", "")
            .then(page => {
                setBouquetsData(mapOrders(page))
            })

        fetchOrdersByCategory(2, 0, 4, "sellingTurn,desc", "")
            .then(page => {
                setVaseArrangementsData(mapOrders(page))
            })

        fetchOrdersByCategory(0, 0, 4, "sellingTurn,desc", "")
            .then(page => {
                setBestSellersData(mapOrders(page))
            })
    }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSlider />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <FeaturedCategories />

        <ProductSection title={bouquets} description="Chạm cảm xúc – Gói trọn yêu thương" products={bouquetsData} />

        <ProductSection
          title={vaseArrangements}
          description="Vẻ đẹp sang trọng lan tỏa không gian"
          products={vaseArrangementsData}
        />

        <ProductSection title={bestSeller} description="Đẹp, tinh tế, và luôn cháy hàng" products={bestSellersData} />
      </div>
    </div>
  )
}
