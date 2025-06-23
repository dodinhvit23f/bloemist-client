"use client"
import HeroSlider from "@/components/hero-slider"
import FeaturedCategories from "@/components/featured-categories"
import ProductSection from "@/components/product-section"
import {
    acrylicFlowerContainer,
    bestSeller,
    bouquets,
    flowerBasket,
    flowerShelf, flowerVase,
    vaseArrangements
} from "@/lib/constant";
import {useEffect, useState} from "react";
import {fetchOrdersByCategory} from "@/fetch/FetchOrder";
import {mapProducts} from "@/lib/utils";
import {Product} from "@/lib/types";

export default function Home() {
    const [bouquetsData, setBouquetsData] = useState<Product[]>([]);
    const [vaseArrangementsData, setVaseArrangementsData] = useState<Product[]>([]);
    const [flowerBasketData, setFlowerBasketData] = useState<Product[]>([]);
    const [acrylicFlowerContainerData, setAcrylicFlowerContainerData] = useState<Product[]>([]);
    const [flowerShelfData, setFlowerShelfData] = useState<Product[]>([]);
    const [flowerVaseData, setFlowerVaseData] = useState<Product[]>([]);

    const [bestSellersData, setBestSellersData] = useState<Product[]>([]);

    useEffect(() => {
        fetchOrdersByCategory(1, 0, 4, "sellingTurn,desc", "", 0, 0)
            .then(page => {
                setBouquetsData(mapProducts(page))
            })

        fetchOrdersByCategory(2, 0, 4, "sellingTurn,desc", "", 0, 0)
            .then(page => {
                setVaseArrangementsData(mapProducts(page))
            })

        fetchOrdersByCategory(3, 0, 4, "sellingTurn,desc", "", 0, 0)
            .then(page => {
                setFlowerBasketData(mapProducts(page))
            })

        fetchOrdersByCategory(4, 0, 4, "sellingTurn,desc", "", 0, 0)
            .then(page => {
                setAcrylicFlowerContainerData(mapProducts(page))
            })

        fetchOrdersByCategory(6, 0, 4, "sellingTurn,desc", "", 0, 0)
            .then(page => {
                setFlowerShelfData(mapProducts(page))
            })

        fetchOrdersByCategory(10, 0, 4, "sellingTurn,desc", "", 0, 0)
            .then(page => {
                setFlowerVaseData(mapProducts(page))
            })

        fetchOrdersByCategory(0, 0, 4, "sellingTurn,desc", "", 0, 0)
            .then(page => {
                setBestSellersData(mapProducts(page))
            })
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <HeroSlider/>
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <FeaturedCategories/>

                <ProductSection title={bouquets}
                                description="Chạm cảm xúc – Gói trọn yêu thương"
                                products={bouquetsData}/>

                <ProductSection title={vaseArrangements}
                                description="Vẻ đẹp sang trọng lan tỏa không gian"
                                products={vaseArrangementsData}/>

                <ProductSection title={flowerBasket}
                                description="Chọn để yêu – Mỗi món quà là một lời nhắn nhủ"
                                products={flowerBasketData}/>

                <ProductSection title={acrylicFlowerContainer}
                                description="Thanh thoát trong từng cánh hoa – Lưu giữ bằng vẻ đẹp vĩnh cửu"
                                products={acrylicFlowerContainerData}/>

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
