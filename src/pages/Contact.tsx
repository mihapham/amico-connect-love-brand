
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <div className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-center mb-4">Liên Hệ Với Chúng Tôi</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất về sản phẩm và dịch vụ.
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Thông Tin Liên Hệ</h2>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-amico-gold/10 p-4 rounded-full mr-4">
                      <svg className="w-6 h-6 text-amico-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Số Điện Thoại</h3>
                      <p className="text-gray-600">0948.345.889</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 bg-amico-gold/10 p-4 rounded-full mr-4">
                      <svg className="w-6 h-6 text-amico-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Email</h3>
                      <p className="text-gray-600">tuongvyflorist@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 bg-amico-gold/10 p-4 rounded-full mr-4">
                      <svg className="w-6 h-6 text-amico-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Địa Chỉ</h3>
                      <p className="text-gray-600">Số 4, Ngõ 78, Thái Thịnh, Ngã tư sở, Đống Đa, Hà Nội</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 bg-amico-gold/10 p-4 rounded-full mr-4">
                      <svg className="w-6 h-6 text-amico-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Giờ Làm Việc</h3>
                      <p className="text-gray-600">Tất cả các ngày trong tuần: 6:30 - 21:30</p>
                      <p className="text-gray-500 text-sm mt-1">Thời gian cụ thể áp dụng riêng cho từng thương hiệu.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Kết Nối Với Chúng Tôi</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/tiemhoaemo" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-serif font-bold mb-6">Gửi Tin Nhắn</h2>
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
                      <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm font-medium">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amico-gold/50"
                        placeholder="Nhập số điện thoại"
                      />
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
                      className="bg-amico-gold hover:bg-amber-600 text-white px-8 py-3 rounded-md transition-colors font-medium w-full"
                    >
                      Gửi Tin Nhắn
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center">Bản Đồ</h2>
            <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5697534275782!2d105.82284551493273!3d21.011070686007737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7eec6b34f9%3A0xc13cf5bece48a33a!2zVGjDoWkgVGjhu4tuaCwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1620620200000!5m2!1svi!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="AMICO location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
