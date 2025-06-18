import type React from "react"
import type {Metadata, Viewport} from "next"
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
    title: `Bloemist | Elegant Floral Arrangements`,
    description: "Beautiful floral arrangements for all occasions",
    keywords: ["flowers",
        "bouquets",
        "floral arrangements",
        "wedding flowers",
        "acrylic flower container",
        "event flowers"],
    authors: [{ name: "Bloemist" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="font-montserrat antialiased">
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
      </html>
  )
}
