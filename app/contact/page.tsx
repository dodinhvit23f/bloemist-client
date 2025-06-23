import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import {shopName} from "@/lib/constant";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
                        Liên Hệ Với Chúng Tôi
                    </h1>
                    <p className="font-montserrat text-neutral-600 text-lg max-w-2xl mx-auto">
                        Hãy liên hệ với {shopName} để được tư vấn và đặt hàng những bó hoa tươi đẹp nhất
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-playfair text-2xl font-semibold text-neutral-800 mb-6">Thông Tin Liên Hệ</h2>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-100 p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-montserrat font-semibold text-neutral-800 mb-1">Địa Chỉ</h3>
                                        <p className="font-montserrat text-neutral-600 leading-relaxed">
                                            5 Ngõ 36 - Nguyễn Hồng
                                            <br />
                                            Láng Hạ, Đống Đa
                                            <br />
                                            Hà Nội 100000
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-100 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-montserrat font-semibold text-neutral-800 mb-1">Điện Thoại</h3>
                                        <p className="font-montserrat text-neutral-600">
                                            <a href="tel:0868 642 828" className="hover:text-primary-600 transition-colors">
                                                0868 642 828
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-100 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-montserrat font-semibold text-neutral-800 mb-1">Email</h3>
                                        <p className="font-montserrat text-neutral-600">
                                            <a href="mailto:botbloemist@gmail.com" className="hover:text-primary-600 transition-colors">
                                                botbloemist@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-100 p-3 rounded-full">
                                        <Clock className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-montserrat font-semibold text-neutral-800 mb-1">Giờ Mở Cửa</h3>
                                        <div className="font-montserrat text-neutral-600 space-y-1">
                                            <p>Thứ 2 - Chủ Nhật: 8:00 - 19:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                       {/* <div className="bg-neutral-50 p-6 rounded-xl">
                            <h3 className="font-playfair text-xl font-semibold text-neutral-800 mb-4">Gửi Tin Nhắn</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-montserrat text-sm font-medium text-neutral-700 mb-2">
                                            Họ và Tên *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors"
                                            placeholder="Nhập họ và tên của bạn"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-montserrat text-sm font-medium text-neutral-700 mb-2">
                                            Số Điện Thoại *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors"
                                            placeholder="Nhập số điện thoại"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-montserrat text-sm font-medium text-neutral-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors"
                                        placeholder="Nhập địa chỉ email"
                                    />
                                </div>

                                <div>
                                    <label className="block font-montserrat text-sm font-medium text-neutral-700 mb-2">
                                        Loại Dịch Vụ
                                    </label>
                                    <select className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors">
                                        <option value="">Chọn loại dịch vụ</option>
                                        <option value="lang-hoa">Lẵng Hoa</option>
                                        <option value="hop-hoa">Hộp Hoa Mica</option>
                                        <option value="hoa-cuoi">Hoa Cưới - Xe Hoa</option>
                                        <option value="ke-hoa">Kệ Hoa Chúc Mừng</option>
                                        <option value="hoa-tet">Hoa Tết</option>
                                        <option value="hoa-vieng">Hoa Viếng</option>
                                        <option value="khac">Khác</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-montserrat text-sm font-medium text-neutral-700 mb-2">Tin Nhắn *</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors resize-none"
                                        placeholder="Mô tả chi tiết yêu cầu của bạn..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-montserrat font-medium hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Gửi Tin Nhắn
                                </button>
                            </form>
                        </div>*/}
                    </div>

                    {/* Map */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="font-playfair text-2xl font-semibold text-neutral-800 mb-4">Vị Trí Cửa Hàng</h2>
                            <p className="font-montserrat text-neutral-600 mb-6">
                                Cửa hàng {shopName} tọa lạc tại vị trí thuận tiện trong khu vực Láng Hạ, dễ dàng di chuyển bằng các
                                phương tiện giao thông công cộng.
                            </p>
                        </div>

                        {/* Google Map Embed */}
                        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6962447815147!2d105.81947831533394!3d21.01503939399654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab61384801cb%3A0xb438f91a0b8a44d5!2s5%20Ng%C3%B5%2036%20-%20Nguy%C3%AAn%20H%E1%BB%93ng%2C%20L%C3%A1ng%20H%E1%BA%A1%2C%20%C4%90%E1%BB%91ng%20%C4%90a%2C%20H%C3%A0%20N%E1%BB%99i%20100000%2C%20Vietnam!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`{shopName} Location`}
                            ></iframe>
                        </div>

                        {/* Directions */}
                        <div className="bg-primary-50 p-6 rounded-xl">
                            <h3 className="font-playfair text-lg font-semibold text-neutral-800 mb-3">Hướng Dẫn Đường Đi</h3>
                            <div className="font-montserrat text-neutral-600 space-y-2 text-sm">
                                <p>
                                    <strong>Từ Hồ Gươm:</strong> Di chuyển theo đường Điện Biên Phủ → Nguyễn Chí Thanh → Láng Hạ
                                </p>
                                <p>
                                    <strong>Từ Sân bay Nội Bài:</strong> Taxi hoặc xe bus 86 đến khu vực Láng Hạ
                                </p>
                                <p>
                                    <strong>Giao thông công cộng:</strong> Xe bus tuyến 01, 03, 18, 23 dừng gần cửa hàng
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
                    <div className="text-center">
                        <h3 className="font-playfair text-2xl font-semibold text-neutral-800 mb-4">Dịch Vụ Giao Hàng Tận Nơi</h3>
                        <p className="font-montserrat text-neutral-600 max-w-3xl mx-auto mb-6">
                            {shopName} cung cấp dịch vụ giao hàng tận nơi trong khu vực Hà Nội và các tỉnh lân cận. Chúng tôi cam
                            kết giao hàng nhanh chóng và đảm bảo hoa tươi đẹp nhất đến tay khách hàng.
                        </p>
                       {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h4 className="font-montserrat font-semibold text-neutral-800 mb-2">Nội Thành Hà Nội</h4>
                                    <p className="font-montserrat text-neutral-600 text-sm">Giao hàng trong 2-4 giờ</p>
                                    <p className="font-montserrat text-primary-600 font-medium">Phí: 30.000đ</p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h4 className="font-montserrat font-semibold text-neutral-800 mb-2">Ngoại Thành Hà Nội</h4>
                                    <p className="font-montserrat text-neutral-600 text-sm">Giao hàng trong 4-6 giờ</p>
                                    <p className="font-montserrat text-primary-600 font-medium">Phí: 50.000đ</p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h4 className="font-montserrat font-semibold text-neutral-800 mb-2">Tỉnh Lân Cận</h4>
                                    <p className="font-montserrat text-neutral-600 text-sm">Giao hàng trong 1-2 ngày</p>
                                    <p className="font-montserrat text-primary-600 font-medium">Phí: 100.000đ</p>
                                </div>
                            </div
                        </div>>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
