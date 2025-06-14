
import React from 'react';
import { Link } from 'react-router-dom';

// Product type definition
type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  cta: string;
  ctaLink: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Dịch vụ hoa tươi",
    brand: "Tiệm hoa Emo Flowers",
    description: "Nơi mang đến những bó hoa tươi đẹp cho mọi dịp.",
    cta: "Đặt Hoa Tươi Cho Dịp Đặc Biệt!",
    ctaLink: "#contact",
    image: "public/lovable-uploads/1f726c13-d0c4-470d-b460-1ac30ac72abb.png",
  },
  {
    id: 2,
    name: "Nến thơm",
    brand: "Tường Vy",
    description: "Sản phẩm nến thơm với hương liệu tự nhiên, tạo không gian thư giãn.",
    cta: "Mua Nến Thơm Tạo Không Gian Thư Giãn!",
    ctaLink: "#contact",
    image: "public/lovable-uploads/7c212f22-98e6-4471-b066-48cf0abeb713.png",
  },
  {
    id: 3,
    name: "Trầm hương",
    brand: "Emo Incense",
    description: "Trầm hương cao cấp, mang lại trải nghiệm tâm linh và thư giãn.",
    cta: "Đặt Trầm Hương Cao Cấp Ngay Hôm Nay!",
    ctaLink: "#contact",
    image: "public/lovable-uploads/7f22cd46-4844-4882-b49b-43181ffd1ae1.png",
  },
  {
    id: 4,
    name: "Kho xuất nhập khẩu hoa",
    brand: "Amico",
    description: "Đối tác tin cậy cho các dịch vụ xuất nhập khẩu hoa.",
    cta: "Đặt Hoa Nhập Khẩu Chất Lượng Tại Amico!",
    ctaLink: "#contact",
    image: "public/lovable-uploads/0c8cadf5-62df-49e8-a97f-dca6b5e56305.png",
  },
  {
    id: 5,
    name: "Trung tâm tiếng Anh",
    brand: "Cam English Center",
    description: "Nơi học tiếng Anh hiệu quả và thú vị.",
    cta: "Đăng Ký Học Tiếng Anh Hiệu Quả Ngay!",
    ctaLink: "#contact",
    image: "public/lovable-uploads/08d66898-ee47-4b84-92ea-c01bc66e7986.png",
  },
  {
    id: 6,
    name: "Tư vấn xuất khẩu lao động và du học",
    brand: "Amico Consulting",
    description: "Dịch vụ tư vấn chuyên nghiệp cho mọi nhu cầu.",
    cta: "Liên Hệ Để Tư Vấn Xuất Khẩu Miễn Phí!",
    ctaLink: "#contact",
    image: "public/lovable-uploads/ded00725-3442-49aa-9cf7-7071c81d68db.png",
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/products/${product.id}`} className="block">
        <div className="h-48 overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-3 left-4 text-white">
            <h4 className="text-sm font-medium">{product.brand}</h4>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-xl font-serif font-bold mb-2 text-gray-800 hover:text-amico-blue transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        <div className="flex justify-between items-center">
          <a 
            href={product.ctaLink} 
            className="text-amico-blue hover:text-amico-blue-dark text-sm font-medium transition-colors duration-300 inline-flex items-center"
          >
            {product.cta}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
          <Link 
            to={`/products/${product.id}`} 
            className="text-gray-500 hover:text-amico-blue text-sm transition-colors"
          >
            Chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Sản Phẩm & Dịch Vụ</h2>
          <p className="section-subtitle">
            Chúng tôi cung cấp đa dạng sản phẩm và dịch vụ chất lượng cao,
            mang lại trải nghiệm tuyệt vời cho khách hàng.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
