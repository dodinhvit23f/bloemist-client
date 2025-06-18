import Link from "next/link"
import {Instagram, Facebook, Twitter, Mail, Phone, MapPin, AtSign} from "lucide-react"
import {aboutUs, bestSeller, bouquets, contact, home, shopName, vaseArrangements} from "@/components/header";

export default function Footer() {
  return (
      <footer className="bg-gradient-to-br from-neutral-50 via-primary-50 to-primary-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Shop Information */}
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-semibold gradient-text">{shopName}</h3>
              <p className="font-montserrat text-neutral-600 leading-relaxed">
                Nơi tạo những tác phẩm hoa tuyệt đẹp cho những khoảnh khắc đặc biệt của bạn bằng niềm đam mê và nghệ thuật.
              </p>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-1 group-hover:text-primary-600 transition-colors" />
                  <p className="font-montserrat text-neutral-600 leading-relaxed">
                    Số 5 Ngõ 36 Nguyên Hồng
                    <br />
                    Đống Đa
                    <br />
                    Hà Nội, HN 10000
                  </p>
                </div>
                <div className="flex items-center group">
                  <Phone className="w-5 h-5 text-primary-500 mr-3 group-hover:text-primary-600 transition-colors" />
                  <p className="font-montserrat text-neutral-600">0868 642 828</p>
                </div>
                <div className="flex items-center group">
                  <Mail className="w-5 h-5 text-primary-500 mr-3 group-hover:text-primary-600 transition-colors" />
                  <p className="font-montserrat text-neutral-600">botbloemist@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-playfair text-xl font-semibold text-neutral-800">Đường dẫn</h3>
              <ul className="space-y-3 font-montserrat">
                <li>
                  <Link
                      href="/"
                      className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {home}
                  </Link>
                </li>
                <li>
                  <Link
                      href="/categories/bouquets"
                      className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {bouquets}
                  </Link>
                </li>
                <li>
                  <Link
                      href="/categories/vase-arrangements"
                      className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {vaseArrangements}
                  </Link>
                </li>
                <li>
                  <Link
                      href="/categories/best-sellers"
                      className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {bestSeller}
                  </Link>
                </li>
                <li>
                  <Link
                      href="#"
                      className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {aboutUs}
                  </Link>
                </li>
                <li>
                  <Link
                      href="#"
                      className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {contact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Opening Hours & Social */}
            <div className="space-y-6">
              <h3 className="font-playfair text-xl font-semibold text-neutral-800">Giờ mở cửa</h3>
              <ul className="space-y-3 font-montserrat">
                <li className="flex justify-between items-center">
                  <span className="text-neutral-600">Monday - Sunday</span>
                  <span className="text-neutral-800 font-medium">8:00 AM - 7:00 PM</span>
                </li>
              </ul>

              <div className="pt-4">
                <h3 className="font-playfair text-xl font-semibold mb-4 text-neutral-800">Mạng xã hội</h3>
                <div className="flex space-x-4">
                  <Link
                      href="https://www.instagram.com/tiemhoabloemist"
                      className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 group"
                  >
                    <Instagram className="w-5 h-5 text-primary-500 group-hover:text-primary-600" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                      href="https://www.facebook.com/hoatuoibloemist"
                      className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 group"
                  >
                    <Facebook className="w-5 h-5 text-primary-500 group-hover:text-primary-600" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                      href="https://www.threads.com/@tiemhoabloemist"
                      className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 group"
                  >
                    <AtSign className="w-5 h-5 text-primary-500 group-hover:text-primary-600" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <p className="font-montserrat text-sm text-neutral-500 text-center">
              © {new Date().getFullYear()} {shopName}. All rights reserved. Made with ❤️ for flower lovers.
            </p>
          </div>
        </div>
      </footer>
  )
}
