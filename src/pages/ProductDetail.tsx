
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../components/ProductSection';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0');
  const product = products.find((p) => p.id === productId);
  const { toast } = useToast();
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
    toast({
      title: "Thông tin liên hệ",
      description: "Hãy điền thông tin của bạn bên dưới để nhận tư vấn về dịch vụ của chúng tôi.",
    });
    
    // Scroll to contact form
    const contactElement = document.getElementById('product-contact-form');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 py-20 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Không tìm thấy sản phẩm</h1>
          <p className="text-gray-600 mb-8">Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/#products" className="btn-blue">
            Quay lại danh sách sản phẩm
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12">
        <Link 
          to="/#products" 
          className="inline-flex items-center text-amico-blue hover:text-amico-blue-dark transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Quay lại danh sách sản phẩm
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
          
          <div>
            <span className="inline-block px-3 py-1 bg-amico-gold text-white text-sm font-medium rounded-full mb-4">
              {product.brand}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-800">{product.name}</h1>
            <div className="w-20 h-1 bg-amico-gold mb-6"></div>
            
            <p className="text-gray-700 text-lg mb-8">
              {product.description}
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-gray-800">Chi tiết sản phẩm</h3>
            <p className="text-gray-700 mb-8">
              Đây là sản phẩm/dịch vụ chất lượng cao của AMICO, được khách hàng tin tưởng và đánh giá cao. 
              Chúng tôi cam kết mang đến trải nghiệm tốt nhất và sự hài lòng cho khách hàng với mỗi sản phẩm.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
              <h3 className="text-lg font-bold mb-2 text-gray-800">Tại sao chọn chúng tôi?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Chất lượng sản phẩm/dịch vụ hàng đầu</li>
                <li>Đội ngũ nhân viên chuyên nghiệp</li>
                <li>Giá cả hợp lý và cạnh tranh</li>
                <li>Hỗ trợ khách hàng 24/7</li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Button 
                size="lg"
                className="bg-amico-blue hover:bg-amico-blue-dark text-white px-8"
                onClick={handleContactClick}
              >
                Liên hệ ngay
              </Button>
            </div>
          </div>
        </div>

        {showContactForm && (
          <div id="product-contact-form" className="my-16 scroll-mt-24 animate-fade-in">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-gray-800">Liên hệ tư vấn</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">Số Điện Thoại</h4>
                      <p className="text-gray-600">0948.345.889</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">tuongvyflorist@gmail.com</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">Địa Chỉ</h4>
                      <p className="text-gray-600">Số 4, Ngõ 78, Thái Thịnh, Ngã tư sở, Đống Đa, Hà Nội</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-gray-700 mb-2 text-sm font-medium">
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amico-gold/50"
                          placeholder="Nhập họ và tên"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-gray-700 mb-2 text-sm font-medium">
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amico-gold/50"
                          placeholder="Nhập số điện thoại"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="contact-email" className="block text-gray-700 mb-2 text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amico-gold/50"
                        placeholder="Nhập email"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="contact-message" className="block text-gray-700 mb-2 text-sm font-medium">
                        Nội dung
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amico-gold/50"
                        placeholder="Nhập nội dung tin nhắn"
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      className="bg-amico-gold hover:bg-amber-600 text-white px-8"
                    >
                      Gửi tin nhắn
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="my-20">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">Sản phẩm khác có thể bạn quan tâm</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== product.id)
              .map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">{relatedProduct.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{relatedProduct.description}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
