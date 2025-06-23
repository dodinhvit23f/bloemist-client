"use client"

import {useEffect, useState} from "react"
import Link from "next/link"
import {ChevronDown, Menu, Search, X} from "lucide-react"
import {bestSeller, blog, categories, contact, policy} from "@/lib/constant";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)

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
              <h1 className="font-playfair text-2xl md:text-3xl font-bold gradient-text">Bloemist</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                  href="/"
                  className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200"
              >
                Trang Chủ
              </Link>

              {/* Categories Dropdown */}
              <div className="relative group">
                <button
                    className="flex items-center gap-1 font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200"
                    onMouseEnter={() => setIsCategoriesOpen(true)}
                    onMouseLeave={() => setIsCategoriesOpen(false)}
                >
                  Danh Mục
                  <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                    className={`absolute top-full left-0 mt-2 w-64 glass-effect shadow-lg rounded-lg border border-white/20 py-2 transition-all duration-200 ${
                        isCategoriesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => setIsCategoriesOpen(true)}
                    onMouseLeave={() => setIsCategoriesOpen(false)}
                >
                  {categories.map((category, index) => (
                      <Link
                          key={index}
                          href={category.href}
                          className="block px-4 py-3 font-montserrat text-neutral-800 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 text-sm"
                          onClick={() => setIsCategoriesOpen(false)}
                      >
                        {category.name}
                      </Link>
                  ))}
                </div>
              </div>

              <Link
                  href="/categories/best-sellers"
                  className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200"
              >
                {bestSeller}
              </Link>

              <Link
                  href="/blogs"
                  className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200">
                {blog}
              </Link>

              <Link
                  href="/policy"
                  className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200">
                {policy}
              </Link>

              <Link
                  href="/contact"
                  className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200">
                {contact}
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center relative">
              <input
                  type="text"
                  placeholder="Tìm kiếm hoa..."
                  className="pl-10 pr-4 py-2.5 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 w-48 lg:w-64 text-sm bg-white/90 backdrop-blur-sm transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden relative z-10 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-neutral-800" /> : <Menu className="w-6 h-6 text-neutral-800" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 right-0 glass-effect shadow-lg p-4 border-t border-white/20 animate-slide-up max-h-96 overflow-y-auto">
                {/* Mobile Search */}
                <div className="flex items-center relative mb-6">
                  <input
                      type="text"
                      placeholder="Tìm kiếm hoa..."
                      className="pl-10 pr-4 py-2.5 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 w-full text-sm bg-white/90 backdrop-blur-sm"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-2">
                  <Link
                      href="/"
                      className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200 py-2 px-2 rounded-lg hover:bg-primary-50"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Trang Chủ
                  </Link>

                  {/* Mobile Categories */}
                  <div className="py-2">
                    <p className="font-montserrat text-neutral-600 text-sm font-medium mb-2 px-2">Danh Mục Sản Phẩm</p>
                    <div className="space-y-1">
                      {categories.map((category, index) => (
                          <Link
                              key={index}
                              href={category.href}
                              className="block font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-primary-50 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                      href="/categories/best-sellers"
                      className="font-montserrat text-neutral-800 hover:text-primary-500 transition-colors duration-200 py-2 px-2 rounded-lg hover:bg-primary-50"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Sản Phẩm Bán Chạy
                  </Link>
                </nav>
              </div>
          )}
        </div>
      </header>
  )
}
