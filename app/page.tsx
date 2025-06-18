import HeroSlider from "@/components/hero-slider"
import FeaturedCategories from "@/components/featured-categories"
import ProductSection from "@/components/product-section"
import { bouquetsData, vaseArrangementsData, bestSellersData } from "@/lib/data"
import {bestSeller, bouquets, vaseArrangements} from "@/components/header";

export default function Home() {
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
