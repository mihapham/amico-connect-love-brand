
import React from 'react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
};

const blogs: BlogPost[] = [
  {
    id: 1,
    title: "Cách chọn hoa tươi cho những dịp đặc biệt",
    excerpt: "Khám phá những bí quyết để chọn được bó hoa tươi hoàn hảo cho mỗi dịp khác nhau.",
    date: "20 tháng 4, 2025",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    category: "Hoa Tươi"
  },
  {
    id: 2,
    title: "5 lợi ích của việc đốt trầm hương mỗi ngày",
    excerpt: "Trầm hương không chỉ có mùi thơm dễ chịu mà còn mang lại nhiều lợi ích sức khỏe bất ngờ.",
    date: "15 tháng 4, 2025",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    category: "Trầm Hương"
  },
  {
    id: 3,
    title: "Phương pháp học tiếng Anh hiệu quả dành cho người mới bắt đầu",
    excerpt: "Những phương pháp đơn giản nhưng cực kỳ hiệu quả để bắt đầu hành trình chinh phục tiếng Anh.",
    date: "10 tháng 4, 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Tiếng Anh"
  }
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Bài Viết Mới Nhất</h2>
          <p className="section-subtitle">
            Cập nhật những thông tin hữu ích và xu hướng mới nhất từ AMICO
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amico-gold text-white text-xs font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                <h3 className="text-xl font-serif font-bold mb-3 text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{blog.excerpt}</p>
                <a 
                  href="#" 
                  className="text-amico-blue hover:text-amico-blue-dark font-medium transition-colors duration-300 inline-flex items-center"
                >
                  Đọc thêm
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-blue">
            Xem Tất Cả Bài Viết
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
