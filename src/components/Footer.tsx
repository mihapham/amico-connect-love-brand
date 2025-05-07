
import React from 'react';
import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-amico-gold">AMICO</h3>
            <p className="text-gray-400 mb-6">
              Công ty cổ phần Quốc tế Âu Mỹ (AMICO) - Kết nối yêu thương qua từng sản phẩm.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/tiemhoaemo" 
                className="text-gray-400 hover:text-amico-gold transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Dịch Vụ</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amico-gold transition-colors duration-300">
                  Hoa Tươi - Emo Flowers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amico-gold transition-colors duration-300">
                  Nến Thơm - Tường Vy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amico-gold transition-colors duration-300">
                  Trầm Hương - Emo Incense
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amico-gold transition-colors duration-300">
                  Xuất Nhập Khẩu Hoa - Amico
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amico-gold transition-colors duration-300">
                  Giáo dục - Cam English Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amico-gold transition-colors duration-300">
                  Tư Vấn Xuất Khẩu Lao Động
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Liên Kết</h4>
            <ul className="space-y-3">
              <li>
                <a href="/products" className="text-gray-400 hover:text-amico-gold transition-colors duration-300">
                  Sản Phẩm & Dịch Vụ
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-amico-gold transition-colors duration-300">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-amico-gold transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-amico-gold transition-colors duration-300">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex">
                <svg className="w-5 h-5 text-amico-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-400">0948.345.889</span>
              </li>
              <li className="flex">
                <svg className="w-5 h-5 text-amico-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-400">tuongvyflorist@gmail.com</span>
              </li>
              <li className="flex">
                <svg className="w-5 h-5 text-amico-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-400">Số 4, Ngõ 78, Thái Thịnh, Ngã tư sở, Đống Đa, Hà Nội</span>
              </li>
              <li className="flex pt-3">
                <svg className="w-5 h-5 text-amico-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="text-gray-400">
                  <h5 className="font-medium mb-1">Giờ Làm Việc</h5>
                  <p>Tất cả các ngày trong tuần: 6:30 - 21:30</p>
                  <p className="text-sm text-gray-500 mt-1">Thời gian cụ thể áp dụng riêng cho từng thương hiệu.</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-lg font-medium mb-3">Đăng ký nhận tin</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amico-gold/50 text-white w-full"
                />
                <button className="bg-amico-gold hover:bg-amico-gold-dark px-4 py-2 rounded-r-md transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Công ty cổ phần Quốc tế Âu Mỹ (AMICO). Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
