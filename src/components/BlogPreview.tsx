
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  content?: string;
};

export const blogs: BlogPost[] = [
  {
    id: 1,
    title: "Cách chọn hoa tươi cho những dịp đặc biệt",
    excerpt: "Khám phá những bí quyết để chọn được bó hoa tươi hoàn hảo cho mỗi dịp khác nhau.",
    date: "20 tháng 4, 2025",
    image: "public/lovable-uploads/c67c68c2-0791-468a-9652-ca03896486b8.png",
    category: "Hoa Tươi",
    content: `Hoa tươi luôn là món quà ý nghĩa trong mọi dịp, từ sinh nhật, kỷ niệm, đến những ngày lễ lớn. Nhưng làm thế nào để chọn được bó hoa phù hợp và truyền tải đúng thông điệp? Dưới đây là một vài bí quyết giúp bạn:

1. Hiểu Ý Nghĩa Của Hoa
Mỗi loại hoa đều mang một ý nghĩa riêng. Ví dụ:

Hoa hồng đỏ: Biểu tượng của tình yêu và đam mê.
Hoa hướng dương: Đại diện cho sự lạc quan và niềm vui.
Hoa lan: Thể hiện sự sang trọng và tinh tế.
Hãy chọn hoa phù hợp với thông điệp bạn muốn gửi gắm.

2. Chọn Hoa Theo Dịp
Sinh nhật: Những bó hoa rực rỡ, tươi tắn như cúc họa mi, hướng dương hoặc hoa hồng.
Kỷ niệm: Hoa lan hoặc hoa lily trắng mang lại sự trang nhã, tinh tế.
Ngày lễ: Hoa hồng đỏ hoặc hoa tulip là lựa chọn phổ biến.

3. Kiểm Tra Độ Tươi Của Hoa
Hãy chú ý đến cánh hoa, lá và thân. Hoa tươi thường có màu sắc sáng, lá không bị héo úa, và cánh hoa không bị dập nát.

4. Chọn Bó Hoa Có Thiết Kế Đẹp
Một bó hoa được gói cẩn thận sẽ tạo ấn tượng mạnh hơn. Bạn có thể chọn các bó hoa được phối màu hài hòa hoặc có phụ kiện đi kèm như ruy băng, giấy gói cao cấp.

5. Đặt Hoa Tại Nơi Uy Tín
Hãy tìm đến các cửa hàng hoa chuyên nghiệp như Emo Flowers, nơi cam kết mang đến những bó hoa tươi đẹp, chất lượng cho mọi dịp đặc biệt.

Với những bí quyết trên, bạn sẽ dễ dàng chọn được bó hoa hoàn hảo để gửi gắm tình cảm của mình. Hãy để hoa tươi thay lời muốn nói và làm cho mỗi dịp đặc biệt trở nên đáng nhớ hơn!

Đặt hoa ngay hôm nay tại Emo Flowers để nhận ưu đãi đặc biệt!`
  },
  {
    id: 2,
    title: "5 lợi ích của việc đốt trầm hương mỗi ngày",
    excerpt: "Trầm hương không chỉ có mùi thơm dễ chịu mà còn mang lại nhiều lợi ích sức khỏe bất ngờ.",
    date: "15 tháng 4, 2025",
    image: "public/lovable-uploads/69b3da34-0b09-4fe3-aefa-d2342247dc1f.png",
    category: "Trầm Hương",
    content: `Trầm hương từ lâu đã được xem là một món quà quý giá từ thiên nhiên. Không chỉ có hương thơm dễ chịu, trầm hương còn mang lại nhiều lợi ích sức khỏe và tinh thần đáng kinh ngạc. Dưới đây là 5 lý do bạn nên đốt trầm hương mỗi ngày:

1. Thư Giãn Tâm Trí
Hương thơm dịu nhẹ từ trầm hương giúp giảm căng thẳng, lo âu và mang lại cảm giác thư thái. Đây là cách tuyệt vời để thư giãn sau một ngày làm việc mệt mỏi.

2. Cải Thiện Chất Lượng Giấc Ngủ
Đốt trầm hương trước khi ngủ giúp làm dịu tâm trí, tạo không gian yên tĩnh và hỗ trợ giấc ngủ sâu hơn, đặc biệt phù hợp với những người thường xuyên mất ngủ.

3. Thanh Lọc Không Khí
Trầm hương có khả năng khử mùi và làm sạch không khí, loại bỏ các tạp chất và tạo ra không gian sống trong lành, dễ chịu hơn.

4. Tăng Cường Sự Tập Trung
Hương trầm giúp kích thích sự tỉnh táo và tập trung, rất hữu ích khi bạn cần làm việc, học tập hoặc thiền định.

5. Mang Lại Phong Thủy Tốt
Trong phong thủy, trầm hương được xem như một vật phẩm mang lại may mắn, tài lộc và năng lượng tích cực cho gia đình.

Đốt trầm hương không chỉ là một thói quen thư giãn mà còn là cách để chăm sóc sức khỏe tinh thần và không gian sống. Hãy thử ngay hôm nay với các sản phẩm trầm hương cao cấp từ Emo Incense để cảm nhận sự khác biệt!

Khám phá các loại trầm hương tại Emo Incense và mang lại sự bình an cho ngôi nhà của bạn!`
  },
  {
    id: 3,
    title: "Phương pháp học tiếng Anh hiệu quả dành cho trẻ em",
    excerpt: "Khám phá những phương pháp học tiếng Anh thú vị và hiệu quả, giúp trẻ phát triển kỹ năng ngôn ngữ tự nhiên ngay từ nhỏ.",
    date: "10 tháng 4, 2025",
    image: "public/lovable-uploads/43b60ac7-d863-4973-8b20-98ea143615e4.png",
    category: "Tiếng Anh",
    content: `Việc học tiếng Anh từ nhỏ không chỉ giúp trẻ phát triển tư duy ngôn ngữ mà còn mở ra nhiều cơ hội trong tương lai. Tuy nhiên, để trẻ học hiệu quả, bố mẹ cần áp dụng các phương pháp phù hợp. Dưới đây là một số gợi ý hữu ích:

1. Học Qua Trò Chơi
Trẻ em học tốt nhất khi được vui chơi. Các trò chơi như ghép chữ, đố vui, hoặc học từ vựng qua hình ảnh sẽ giúp trẻ ghi nhớ từ mới một cách tự nhiên và lâu dài.

2. Xem Phim Hoặc Nghe Nhạc Tiếng Anh
Phim hoạt hình và bài hát tiếng Anh không chỉ giúp trẻ làm quen với cách phát âm mà còn kích thích sự yêu thích ngôn ngữ. Hãy chọn những nội dung phù hợp với độ tuổi của trẻ.

3. Tạo Môi Trường Học Tập Tự Nhiên
Hãy khuyến khích trẻ sử dụng tiếng Anh trong các tình huống hàng ngày, như gọi tên đồ vật, chào hỏi hoặc trò chuyện đơn giản. Một môi trường học tập tự nhiên sẽ giúp trẻ tự tin hơn.

4. Học Cùng Giáo Viên Bản Ngữ
Việc tiếp xúc với giáo viên bản ngữ giúp trẻ rèn luyện khả năng phát âm và ngữ điệu chuẩn ngay từ đầu. Đây là cách hiệu quả để trẻ làm quen với ngôn ngữ một cách chuyên nghiệp.

5. Luyện Tập Đều Đặn Và Kiên Nhẫn
Để trẻ học tốt, điều quan trọng là duy trì sự luyện tập đều đặn. Hãy tạo lịch học cố định nhưng không quá áp lực để trẻ cảm thấy thoải mái.

Cam English Center – Đồng Hành Cùng Bé Yêu Học Tiếng Anh
Tại Cam English Center, chúng tôi áp dụng các phương pháp học tập hiện đại, kết hợp giữa vui chơi và học tập để giúp trẻ phát triển toàn diện kỹ năng tiếng Anh.

Hãy để bé yêu của bạn trải nghiệm môi trường học tiếng Anh thú vị và hiệu quả ngay hôm nay! Đăng ký ngay để nhận ưu đãi đặc biệt!`
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
                <Link 
                  to={`/blog/${blog.id}`}
                  className="text-amico-blue hover:text-amico-blue-dark font-medium transition-colors duration-300 inline-flex items-center"
                >
                  Đọc thêm
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="btn-blue">
            Xem Tất Cả Bài Viết
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
