
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-0"></div>
      
      {/* Gold accent */}
      <div className="absolute top-24 -left-24 w-96 h-96 bg-amico-gold/10 rounded-full blur-3xl z-0"></div>
      
      {/* Blue accent */}
      <div className="absolute bottom-12 -right-24 w-96 h-96 bg-amico-blue/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/3de4b567-634f-4216-a766-63bccae32694.png" 
              alt="AMICO Logo" 
              className="h-32 md:h-40 mx-auto" 
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            <span className="block">
              Công ty cổ phần Quốc tế
            </span>
            <span className="gold-gradient">
              Âu Mỹ (AMICO)
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-serif text-gray-700 mb-8 max-w-3xl">
            "Kết nối yêu thương qua từng sản phẩm"
          </p>
          
          <p className="text-gray-600 mb-10 max-w-2xl">
            Chúng tôi không chỉ cung cấp sản phẩm, mà còn mang đến những trải nghiệm tuyệt vời 
            và kết nối yêu thương trong từng sản phẩm của mình.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="btn-gold">
              Khám Phá Sản Phẩm
            </a>
            <a href="#about" className="btn-blue">
              Tìm Hiểu Thêm Về Chúng Tôi!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
