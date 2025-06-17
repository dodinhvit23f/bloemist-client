import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Bloom & Petal | Elegant Floral Arrangements",
  description: "Beautiful floral arrangements for all occasions",
  keywords: ["flowers", "bouquets", "floral arrangements", "wedding flowers"],
  authors: [{ name: "Bloom & Petal" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-montserrat antialiased">
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
      </html>
  )
}
