
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Liên Hệ Với Chúng Tôi</h2>
          <p className="section-subtitle">
            Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất về sản phẩm và dịch vụ.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-serif font-bold mb-6 text-gray-800">Gửi Tin Nhắn</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 text-sm font-medium">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amico-gold/50"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amico-gold/50"
                    placeholder="Nhập email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2 text-sm font-medium">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amico-gold/50"
                  placeholder="Nhập tiêu đề"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2 text-sm font-medium">
                  Nội dung
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amico-gold/50"
                  placeholder="Nhập nội dung tin nhắn"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-gold w-full"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-serif font-bold mb-6 text-gray-800">Thông Tin Liên Hệ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amico-gold/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-amico-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Số Điện Thoại</h4>
                    <p className="text-gray-600">0948.345.889</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amico-gold/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-amico-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">tuongvyflorist@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amico-gold/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-amico-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Trụ Sở Chính</h4>
                    <p className="text-gray-600">Số 4, Ngõ 78, Thái Thịnh, Ngã tư sở, Đống Đa, Hà Nội</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-serif font-bold mb-6 text-gray-800">Giờ Làm Việc</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Thứ Hai - Thứ Sáu:</span>
                  <span className="font-medium text-gray-800">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Thứ Bảy:</span>
                  <span className="font-medium text-gray-800">8:00 - 12:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Chủ Nhật:</span>
                  <span className="font-medium text-gray-800">Đóng cửa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
