
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../components/ProductSection';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-center mb-4">Sản Phẩm & Dịch Vụ</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Chúng tôi cung cấp đa dạng sản phẩm và dịch vụ chất lượng cao,
              mang lại trải nghiệm tuyệt vời cho khách hàng.
            </p>
          </div>
        </div>

        <div className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Link to={`/products/${product.id}`} className="block">
                  <div className="h-64 overflow-hidden relative">
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
                    <Link 
                      to={`/products/${product.id}`} 
                      className="text-amico-blue hover:text-amico-blue-dark text-sm font-medium transition-colors duration-300 inline-flex items-center"
                    >
                      Chi tiết
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
