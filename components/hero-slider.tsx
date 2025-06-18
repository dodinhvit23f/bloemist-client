"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/d/1PqdaKJSFnH94dide1O-J8k6fwWNxEAQ8".concat("?sz=s1980"),
    title: "Trọn Đời Nên Nhau",
    subtitle: "Tình yêu dẫn lối – Hạnh phúc kết trái",
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/d/1bSEXK2xA0jbWGgI3VYSNpPjphhH_YTtc".concat("?sz=s1980"),
    title: "Tinh Tế Là Một Ngôn Ngữ Không Lời",
    subtitle: "Bố cục ngăn nắp – Sắc hoa nhẹ nhàng lan tỏa",
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/d/1e_YMaHZr8sxad4G0VNqZAl77ephFHyq6".concat("?sz=s1980"),
    title: "Mỗi bó hoa là lời yêu chưa nói",
    subtitle: "Tạo nên từ trái tim, dành riêng cho người bạn yêu thương",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden mt-16">
        {slides.map((slide, index) => (
            <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10" />
              <Image
                  loading="lazy"
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  //priority={index === 0}
                  className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4 animate-fade-in">
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 max-w-4xl text-balance">
                  {slide.title}
                </h2>
                <p className="font-montserrat text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl text-balance">
                  {slide.subtitle}
                </p>
              </div>
            </div>
        ))}

        {/* Navigation Arrows */}
        <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-white drop-shadow-lg hover:text-white/80 transition-colors duration-200" />
        </button>
        <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-white drop-shadow-lg hover:text-white/80 transition-colors duration-200" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
              <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
              />
          ))}
        </div>
      </div>
  )
}
