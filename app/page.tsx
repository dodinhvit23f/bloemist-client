import HeroSlider from "@/components/hero-slider"
import FeaturedCategories from "@/components/featured-categories"
import ProductSection from "@/components/product-section"
import {
  acrylicFlowerContainer,
  bestSeller,
  bouquets,
  flowerBasket,
  flowerShelf,
  flowerVase,
  vaseArrangements, weddingFlowers
} from "@/lib/constant";
import {fetchOrdersByCategory} from "@/fetch/FetchOrder";
import {mapProducts} from "@/lib/utils";

export default async function Home() {
  const bouquetsData = mapProducts(await fetchOrdersByCategory(1, 0, 4, "sellingTurn,desc", "", 0, 0))
  //const vaseArrangementsData = mapProducts(await fetchOrdersByCategory(2, 0, 4, "sellingTurn,desc", "", 0, 0))
  const flowerBasketData = mapProducts(await fetchOrdersByCategory(3, 0, 4, "sellingTurn,desc", "", 0, 0))
  const acrylicFlowerContainerData = mapProducts(await fetchOrdersByCategory(4, 0, 4, "sellingTurn,desc", "", 0, 0))
  const flowerShelfData = mapProducts(await fetchOrdersByCategory(6, 0, 4, "sellingTurn,desc", "", 0, 0))
  const flowerVaseData = mapProducts(await fetchOrdersByCategory(10, 0, 4, "sellingTurn,desc", "", 0, 0))
  const bestSellersData = mapProducts(await fetchOrdersByCategory(0, 0, 4, "sellingTurn,desc", "", 0, 0))
  const weddingFlowersData = mapProducts(await fetchOrdersByCategory(5, 0, 4, "sellingTurn,desc", "", 0, 0))



return (
    <div className="min-h-screen bg-white">
      <HeroSlider/>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <FeaturedCategories/>

        <ProductSection title={bouquets}
                        description="Chạm cảm xúc – Gói trọn yêu thương"
                        products={bouquetsData}/>

        <ProductSection title={flowerBasket}
                        description="Chọn để yêu – Mỗi món quà là một lời nhắn nhủ"
                        products={flowerBasketData}/>

        <ProductSection title={acrylicFlowerContainer}
                        description="Thanh thoát trong từng cánh hoa – Lưu giữ bằng vẻ đẹp vĩnh cửu"
                        products={acrylicFlowerContainerData}/>

        <ProductSection
            title={weddingFlowers}
            description="Nét Hoa Vu Quy – Tô Vẽ Mộng Hồng"
            products={weddingFlowersData}
        />

        <ProductSection title={flowerShelf}
                        description="Sắc hoa rạng rỡ – Khởi đầu may mắn"
                        products={flowerShelfData}/>

        <ProductSection
            title={flowerVase}
            description="Thanh thoát trong từng dáng hoa – Nhẹ nhàng tô điểm không gian sống"
            products={flowerVaseData}
        />



        <ProductSection title={bestSeller} description="Đẹp, tinh tế, và luôn cháy hàng"
                        products={bestSellersData}/>
      </div>
    </div>
)
}
