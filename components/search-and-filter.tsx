

import type React from "react"
import { useState, useEffect } from "react"
import { Search, Filter, X } from "lucide-react"

interface SearchAndFilterProps {
    initialSearch: string
    initialMinPrice: number | undefined
    initialMaxPrice: number | undefined
    onFilterChange: (filters: {
        search: string
        minPrice: number | undefined
        maxPrice: number | undefined
    }) => void
}

export default function SearchAndFilter({
                                            initialSearch,
                                            initialMinPrice,
                                            initialMaxPrice,
                                            onFilterChange,
                                        }: SearchAndFilterProps) {
    const [search, setSearch] = useState(initialSearch)
    const [minPrice, setMinPrice] = useState<string>(initialMinPrice?.toString() || "")
    const [maxPrice, setMaxPrice] = useState<string>(initialMaxPrice?.toString() || "")
    const [showFilters, setShowFilters] = useState(false)

    useEffect(() => {
        setSearch(initialSearch)
        setMinPrice(initialMinPrice?.toString() || "")
        setMaxPrice(initialMaxPrice?.toString() || "")
    }, [initialSearch, initialMinPrice, initialMaxPrice])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const minPriceNum = minPrice ? Number.parseFloat(minPrice) : undefined
        const maxPriceNum = maxPrice ? Number.parseFloat(maxPrice) : undefined

        onFilterChange({
            search,
            minPrice: minPriceNum,
            maxPrice: maxPriceNum,
        })
    }

    const handleClear = () => {
        setSearch("")
        setMinPrice("")
        setMaxPrice("")
        onFilterChange({ search: "", minPrice: undefined, maxPrice: undefined })
    }

    const hasActiveFilters = search || minPrice || maxPrice

    return (
        <div className="mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Search Bar */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Tìm sản phẩm..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 bg-white text-neutral-800 placeholder-neutral-500"
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    </div>

                    {/* Filter Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center gap-2 px-4 py-3 border rounded-lg transition-colors duration-200 ${
                            showFilters || hasActiveFilters
                                ? "border-primary-500 bg-primary-50 text-primary-700"
                                : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                        }`}
                    >
                        <Filter className="w-5 h-5" />
                        <span className="font-montserrat">Lọc</span>
                        {hasActiveFilters && (
                            <span className="bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {[search, minPrice, maxPrice].filter(Boolean).length}
              </span>
                        )}
                    </button>
                </div>

                {/* Price Filters */}
                {showFilters && (
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 animate-slide-up">
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <div className="flex-1">
                                <label className="block font-montserrat text-sm font-medium text-neutral-700 mb-2">Giá sàn</label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    step="10000"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 bg-white"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block font-montserrat text-sm font-medium text-neutral-700 mb-2">Giá trần</label>
                                <input
                                    type="number"
                                    placeholder="999999999"
                                    min="0"
                                    step="10000"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 bg-white"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                type="submit"
                                className="flex-1 bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-montserrat font-medium"
                            >
                                Xác nhận
                            </button>
                            {hasActiveFilters && (
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="flex items-center justify-center gap-2 px-6 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors duration-200 font-montserrat"
                                >
                                    <X className="w-4 h-4" />
                                    Bỏ chọn
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </form>
        </div>
    )
}
