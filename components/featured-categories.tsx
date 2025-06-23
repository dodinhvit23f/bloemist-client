import Link from "next/link"
import Image from "next/image"

import {categories} from "@/lib/constant";

export default function FeaturedCategories() {
    const title = "Danh mục nổi bật"
    return (
        <section className="mb-16 md:mb-24">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
                <span className="gradient-text text-balance">{title}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {categories
                    .filter((category) => category.popularity)
                    .map((category) => (
                    <Link
                        href={category.href}
                        key={category.id}
                        className="group relative overflow-hidden rounded-2xl aspect-square card-hover"
                    >
                        <Image
                            loading="lazy"
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
                        <div className="absolute inset-0 flex items-end p-6 md:p-8">
                            <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl font-semibold text-white group-hover:text-primary-200 transition-colors duration-300">
                                {category.name}
                            </h3>
                        </div>
                    </Link>
                ))}
               {/* <Link
                    href={"/categories/best-sellers"}
                    key={0}
                    className="group relative overflow-hidden rounded-2xl aspect-square card-hover"
                >
                    <Image
                        loading="lazy"
                        src={"https://lh3.googleusercontent.com/d/1VkRsl098y-nNjbn2wW8tlNQvjVmlDpZu".concat("?sz=500") || "/placeholder.svg"}
                        alt={bestSeller}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
                    <div className="absolute inset-0 flex items-end p-6 md:p-8">
                        <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl font-semibold text-white group-hover:text-primary-200 transition-colors duration-300">
                            {bestSeller}
                        </h3>
                    </div>
                </Link>*/}
            </div>
        </section>
    )
}
