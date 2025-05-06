
import React from 'react';

const AboutSection = () => {
  const values = [
    {
      title: "Chất lượng",
      description: "Cam kết cung cấp sản phẩm và dịch vụ chất lượng cao nhất.",
      icon: (
        <svg className="w-12 h-12 text-amico-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Đam mê",
      description: "Đặt tâm huyết vào từng chi tiết để tạo ra sản phẩm tuyệt vời.",
      icon: (
        <svg className="w-12 h-12 text-amico-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      )
    },
    {
      title: "Kết nối",
      description: "Kết nối yêu thương qua từng sản phẩm và dịch vụ.",
      icon: (
        <svg className="w-12 h-12 text-amico-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Giới Thiệu Về <span className="gold-gradient">AMICO</span></h2>
          <p className="section-subtitle">
            Công ty cổ phần Quốc tế Âu Mỹ (AMICO) là đơn vị chuyên kinh doanh về hoa tươi, 
            nến thơm, trầm hương, trung tâm Tiếng Anh và dịch vụ xuất nhập khẩu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gray-800">
                Chất lượng và đam mê trong từng chi tiết
              </h3>
              <p className="text-gray-600 mb-6">
                Tại AMICO, chúng tôi tin rằng mỗi sản phẩm không chỉ đơn thuần là một món hàng, 
                mà còn là cầu nối để kết nối tình cảm giữa con người với nhau.
              </p>
              <p className="text-gray-600 mb-6">
                Với đa dạng lĩnh vực hoạt động từ hoa tươi, nến thơm, trầm hương đến giáo dục và xuất nhập khẩu, 
                chúng tôi luôn nỗ lực mang đến những trải nghiệm tốt nhất cho khách hàng.
              </p>
              <a href="#contact" className="btn-gold inline-block">
                Kết Nối Với Chúng Tôi
              </a>
            </div>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-amico-gold/20 z-0"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-amico-blue/20 z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="AMICO Team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
