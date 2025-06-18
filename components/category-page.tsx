import { useState, useEffect } from "react"
import ProductCard from "./product-card"
import SearchAndFilter from "./search-and-filter"
import Pagination from "./pagination"
import type { Product } from "@/lib/types"
import {fetchOrdersByCategory} from "@/fetch/FetchOrder";
import {mapOrders} from "@/lib/utils";

interface CategoryPageProps {
    category: string
    categoryTitle: string
}

export default function CategoryPage({ category, categoryTitle }: CategoryPageProps) {
    const [products, setProducts] = useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(30)
    const [searchQuery, setSearchQuery] = useState("")
    const [minPrice, setMinPrice] = useState<number | undefined>(undefined)
    const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)

    useEffect(() => {

        switch (category) {
            case "bouquets":
                setCategoryId(1)
                break
            case "vase-arrangements":
                setCategoryId(2)
                break
            case "best-sellers":
                setCategoryId(0)
                break
        }

        fetchOrdersByCategory(categoryId, currentPage - 1, pageSize, "sellingTurn,desc", "", 0 , 0)
        .then(page => {
            setProducts(mapOrders(page))
        })

        setIsLoading(false)
    }, [category])

    useEffect(() => {
        let filtered = [...products]

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.code.toLowerCase().includes(searchQuery.toLowerCase()),
            )
        }

        // Apply price filters
        if (minPrice !== undefined) {
            filtered = filtered.filter((product) => product.price >= minPrice)
        }
        if (maxPrice !== undefined) {
            filtered = filtered.filter((product) => product.price <= maxPrice)
        }

        setFilteredProducts(filtered)
        // Reset to page 1 when filters change
        setCurrentPage(1)
    }, [products, searchQuery, minPrice, maxPrice])

    const handleFilterChange = (filters: {
        search: string
        minPrice: number | undefined
        maxPrice: number | undefined
    }) => {
        setSearchQuery(filters.search.trim())
        setMinPrice(filters.minPrice)
        setMaxPrice(filters.maxPrice)

        fetchOrdersByCategory(categoryId, 0, 30, "sellingTurn,desc", filters.search.trim(), filters.minPrice!, filters.maxPrice!)
        .then(page => {
            setProducts(mapOrders(page))
        })
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const handlePageSizeChange = (size: number) => {
        setPageSize(size)
        setCurrentPage(1) // Reset to page 1 when page size changes
    }

    // Calculate pagination
    const totalProducts = filteredProducts.length
    const totalPages = Math.ceil(totalProducts / pageSize)
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    const currentProducts = filteredProducts.slice(startIndex, endIndex)

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="animate-pulse">
                    <div className="h-8 bg-neutral-200 rounded w-64 mx-auto mb-8"></div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="space-y-4">
                                <div className="aspect-square bg-neutral-200 rounded-xl"></div>
                                <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                                <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Category Header */}
            <div className="mb-8 text-center">
                <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">{categoryTitle}</h1>
                <p className="font-montserrat text-neutral-600 text-lg">
                    {totalProducts} sản phẩm
                </p>
            </div>

            {/* Search and Filter */}
            <SearchAndFilter
                initialSearch={searchQuery}
                initialMinPrice={minPrice}
                initialMaxPrice={maxPrice}
                onFilterChange={handleFilterChange}
            />

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="max-w-md mx-auto">
                        <div className="w-24 h-24 mx-auto mb-6 bg-neutral-100 rounded-full flex items-center justify-center">
                            <span className="text-4xl">🌸</span>
                        </div>
                        <h3 className="font-playfair text-2xl font-semibold text-neutral-800 mb-2">No products found</h3>
                        <p className="font-montserrat text-neutral-600 mb-6">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => handleFilterChange({ search: "", minPrice: undefined, maxPrice: undefined })}
                            className="font-montserrat bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>
            )}

            {/* Pagination */}
            {totalProducts > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    pageSize={pageSize}
                    totalItems={totalProducts}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                />
            )}
        </div>
    )
}
