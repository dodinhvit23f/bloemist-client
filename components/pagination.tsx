"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
    currentPage: number
    totalPages: number
    pageSize: number
    totalItems: number
    onPageChange: (page: number) => void
    onPageSizeChange: (size: number) => void
}

export default function Pagination({
                                       currentPage,
                                       totalPages,
                                       pageSize,
                                       totalItems,
                                       onPageChange,
                                       onPageSizeChange,
                                   }: PaginationProps) {
    const startItem = (currentPage - 1) * pageSize + 1
    const endItem = Math.min(currentPage * pageSize, totalItems)

    const getVisiblePages = () => {
        const delta = 2
        const range = []
        const rangeWithDots = []

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i)
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, "...")
        } else {
            rangeWithDots.push(1)
        }

        rangeWithDots.push(...range)

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push("...", totalPages)
        } else if (totalPages > 1) {
            rangeWithDots.push(totalPages)
        }

        return rangeWithDots
    }

    if (totalPages <= 1) return null

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-200">
            {/* Results Info */}
            <div className="flex items-center gap-4">
                <p className="font-montserrat text-sm text-neutral-600">
                    Hiển thị {startItem}-{endItem} trong {totalItems} kết quả
                </p>

                {/* Page Size Selector */}
                <div className="flex items-center gap-2">
                    <label className="font-montserrat text-sm text-neutral-600">Hiện:</label>
                    <select
                        value={pageSize}
                        onChange={(e) => onPageSizeChange(Number(e.target.value))}
                        className="border border-neutral-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                    >
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-montserrat border border-neutral-200 rounded-lg hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                    {getVisiblePages().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === "number" && onPageChange(page)}
                            disabled={page === "..."}
                            className={`min-w-[40px] h-10 flex items-center justify-center text-sm font-montserrat rounded-lg transition-colors duration-200 ${
                                page === currentPage
                                    ? "bg-primary-500 text-white"
                                    : page === "..."
                                        ? "cursor-default text-neutral-400"
                                        : "border border-neutral-200 hover:bg-neutral-50 text-neutral-700"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-montserrat border border-neutral-200 rounded-lg hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    Next
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}