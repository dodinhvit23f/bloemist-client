"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"

export const home : string = "Trang chủ"
export const bouquets : string = "Bó hoa"
export const vaseArrangements  : string = "Hoa thả lọ"
export const bestSeller : string = " Sản phẩm bán chạy"
export const shopName = "Bloemist"
export const aboutUs = "Về chúng tôi"
export const contact = "Liên hệ"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? "glass-effect shadow-sm py-2" : "bg-transparent py-4"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <h1 className="font-playfair text-2xl md:text-3xl font-bold gradient-text">{shopName}</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                  href="/"
                  className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200"
              >
                {home}
              </Link>
              <Link
                  href="/categories/bouquets"
                  className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200"
              >
                {bouquets}
              </Link>
              <Link
                  href="/categories/vase-arrangements"
                  className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200"
              >
                {vaseArrangements}
              </Link>
              <Link
                  href="/categories/best-sellers"
                  className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200"
              >
                {bestSeller}
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center relative">
              <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="pl-10 pr-4 py-2.5 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 w-48 lg:w-64 text-sm bg-white/90 backdrop-blur-sm transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden relative z-10 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-neutral-800" /> : <Menu className="w-6 h-6 text-neutral-800" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 glass-effect shadow-lg p-4 border-t border-white/20 animate-slide-up">
                <div className="flex items-center relative mb-4">
                  <input
                      type="text"
                      placeholder="Search flowers..."
                      className="pl-10 pr-4 py-2.5 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 w-full text-sm bg-white/90 backdrop-blur-sm"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                </div>
                <nav className="flex flex-col space-y-4">
                  <Link
                      href="/"
                      className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    {home}
                  </Link>
                  <Link
                      href="/categories/bouquets"
                      className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    {bouquets}
                  </Link>
                  <Link
                      href="/categories/vase-arrangements"
                      className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    {vaseArrangements}
                  </Link>
                  <Link
                      href="/categories/best-sellers"
                      className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    {bestSeller}
                  </Link>
                </nav>
              </div>
          )}
        </div>
      </header>
  )
}
