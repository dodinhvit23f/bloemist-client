import ProductCard from "./product-card"
import type { Product } from "@/lib/types"

interface ProductSectionProps {
    title: string
    description: string
    products: Product[]
}

export default function ProductSection({ title, description, products }: ProductSectionProps) {
    const sectionId = title

    return (
        <section id={sectionId} className="py-12 md:py-16 lg:py-20 scroll-mt-20">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="gradient-text text-balance">{title}</span>
                </h2>
                <p className="font-montserrat text-neutral-600 text-lg md:text-xl max-w-3xl mx-auto text-balance">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}
