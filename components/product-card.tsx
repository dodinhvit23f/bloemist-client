import Image from "next/image"
import type { Product } from "@/lib/types"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group card-hover">
            <div className="relative overflow-hidden rounded-xl aspect-square mb-4 bg-neutral-100">
                <Image
                    loading={"lazy"}
                    src={product.imgUrl ? product.imgUrl.split(",")[0].concat("?sz=s500") : "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="space-y-2">
                <h3 className="font-playfair text-lg font-medium text-neutral-800 group-hover:text-primary-600 transition-colors duration-200 text-balance">
                    {product.name}
                </h3>
                <div className="flex justify-between items-center">
                    <p className="font-montserrat text-primary-600 font-semibold text-lg">{product.price.toFixed(2)}</p>
                    <p className="font-montserrat text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded-md">{product.code}</p>
                </div>
            </div>
        </div>
    )
}
