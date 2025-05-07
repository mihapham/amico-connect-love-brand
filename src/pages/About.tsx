
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        <div className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-center mb-4">Giới Thiệu Về AMICO</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Công ty cổ phần Quốc tế Âu Mỹ (AMICO) - Kết nối yêu thương qua từng sản phẩm.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Câu Chuyện Của Chúng Tôi</h2>
                <p className="text-gray-600 mb-6">
                  Được thành lập vào năm 2015, AMICO bắt đầu với sứ mệnh mang đến những sản phẩm và dịch vụ chất lượng cao, 
                  đáp ứng nhu cầu đa dạng của khách hàng. Từ những bước đi đầu tiên, chúng tôi luôn đặt chất lượng và sự hài lòng 
                  của khách hàng lên hàng đầu.
                </p>
                <p className="text-gray-600 mb-6">
                  Qua nhiều năm phát triển, AMICO đã xây dựng được danh tiếng vững chắc và trở thành đối tác tin cậy của nhiều khách hàng 
                  trong và ngoài nước. Chúng tôi không ngừng mở rộng lĩnh vực kinh doanh, từ hoa tươi, nến thơm, trầm hương đến các dịch vụ 
                  giáo dục và xuất khẩu lao động.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" 
                  alt="Office"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-amico-gold w-24 h-24 rounded-full hidden lg:block"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Giá Trị Cốt Lõi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tại AMICO, chúng tôi định hướng mọi hoạt động dựa trên những giá trị cốt lõi, giúp chúng tôi 
                không ngừng phát triển và mang đến những trải nghiệm tốt nhất cho khách hàng.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-amico-gold/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amico-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Chất Lượng</h3>
                <p className="text-gray-600">
                  Chúng tôi cam kết mang đến những sản phẩm và dịch vụ chất lượng cao nhất, được tuyển chọn và kiểm soát nghiêm ngặt.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-amico-gold/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amico-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Trách Nhiệm</h3>
                <p className="text-gray-600">
                  Chúng tôi luôn đặt trách nhiệm với khách hàng, đối tác và xã hội lên hàng đầu trong mọi hoạt động kinh doanh.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-amico-gold/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amico-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Đổi Mới</h3>
                <p className="text-gray-600">
                  Chúng tôi không ngừng đổi mới và cải tiến, luôn cập nhật xu hướng mới nhất để mang đến những trải nghiệm tốt nhất.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Đội Ngũ Của Chúng Tôi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Đội ngũ AMICO gồm những chuyên gia giàu kinh nghiệm, nhiệt huyết và luôn sẵn sàng hỗ trợ khách hàng.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Nguyễn Văn A</h3>
                <p className="text-gray-600 mb-2">Giám Đốc Điều Hành</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
                    alt="Marketing Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Nguyễn Thị B</h3>
                <p className="text-gray-600 mb-2">Giám Đốc Marketing</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1542190891-2093d38760f2" 
                    alt="Product Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Trần Văn C</h3>
                <p className="text-gray-600 mb-2">Quản Lý Sản Phẩm</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d" 
                    alt="Customer Support"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Lê Thị D</h3>
                <p className="text-gray-600 mb-2">Hỗ Trợ Khách Hàng</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Sẵn Sàng Trải Nghiệm Dịch Vụ AMICO?</h2>
              <p className="text-gray-300 mb-8">
                Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất về các sản phẩm và dịch vụ.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-amico-gold hover:bg-amber-600 text-white px-8 py-3 rounded-md transition-colors font-medium"
                >
                  Liên Hệ Ngay
                </Link>
                <Link 
                  to="/products" 
                  className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-md transition-colors font-medium"
                >
                  Xem Sản Phẩm
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
