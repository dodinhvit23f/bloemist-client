"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"
import type { Product } from "@/lib/types"
import {formatMoney} from "@/lib/utils";

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const images = product.imgUrl.split(",").map((url) => url.trim())
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const displayPrice = product.ceremony ? product.ceremonyPrice : product.price

  return (
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-montserrat">Back to Home</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden">
              <Image
                  src={images[currentImageIndex].concat("&sz=s500") || "/placeholder.svg"}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
              />

              {/* Image Counter */}
              {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-montserrat">
                    {currentImageIndex + 1} / {images.length}
                  </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                      <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                              index === currentImageIndex
                                  ? "border-primary-500 ring-2 ring-primary-200"
                                  : "border-neutral-200 hover:border-primary-300"
                          }`}
                      >
                        <Image
                            loading={"lazy"}
                            src={image.concat("&sz=s220") || "/placeholder.svg"}
                            alt={`${product.name} thumbnail ${index + 1}`}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                        />
                      </button>
                  ))}
                </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Product Title and Code */}
            <div>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{product.name}</h1>
              <p className="font-montserrat text-neutral-500 text-lg">
                Product Code: <span className="font-medium text-neutral-700">{product.code}</span>
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {product?.categories?.map((category) => (
                  <span
                      key={category.id}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-montserrat"
                  >
                {category.name}
              </span>
              ))}
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="font-playfair text-4xl font-bold text-primary-600">{formatMoney(displayPrice)}</span>
                {product.ceremony && (
                    <div className="flex flex-col">
                      <span className="text-sm text-neutral-500 font-montserrat">Regular Price:</span>
                      <span className="text-lg text-neutral-400 line-through font-montserrat">
                    ${formatMoney(product.price)}
                  </span>
                    </div>
                )}
              </div>
              {product.ceremony && (
                  <p className="text-sm text-primary-600 font-montserrat">✨ Special ceremony pricing applied</p>
              )}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {product.isBestSeller && (
                  <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-montserrat font-medium">Best Seller</span>
                  </div>
              )}
              {product.ceremony && (
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    <span className="text-sm font-montserrat font-medium">Ceremony Special</span>
                  </div>
              )}
            </div>

            {/* Selling Turn */}
            <div className="bg-neutral-50 p-4 rounded-lg">
              <p className="text-sm text-neutral-600 font-montserrat mb-1">Popularity</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-neutral-200 rounded-full h-2">
                  <div
                      className="bg-gradient-to-r from-primary-400 to-primary-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((product.sellingTurn / 50) * 100, 100)}%` }}
                  />
                </div>
                <span className="text-sm font-montserrat font-medium text-neutral-700">{product.sellingTurn} sold</span>
              </div>
            </div>

            {/* Description */}
            {product.description && (
                <div className="space-y-3">
                  <h3 className="font-playfair text-xl font-semibold text-neutral-800">Description</h3>
                  <p className="font-montserrat text-neutral-600 leading-relaxed">{product.description}</p>
                </div>
            )}

            {/* Action Buttons */}
           {/* <div className="space-y-3 pt-4">
              <button className="w-full bg-primary-500 text-white py-4 px-6 rounded-lg font-montserrat font-medium hover:bg-primary-600 transition-colors duration-200">
                Contact for Order
              </button>
              <button className="w-full border border-primary-500 text-primary-600 py-3 px-6 rounded-lg font-montserrat font-medium hover:bg-primary-50 transition-colors duration-200">
                Add to Wishlist
              </button>
            </div>*/}
          </div>
        </div>
      </div>
  )
}
