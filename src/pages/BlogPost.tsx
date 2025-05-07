
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogs } from '../components/BlogPreview';

const BlogPost = () => {
  const { id } = useParams();
  const blogId = parseInt(id || '0');
  
  const post = blogs.find(blog => blog.id === blogId);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-20 flex-grow">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Không tìm thấy bài viết</h1>
            <p className="mb-8">Bài viết bạn đang tìm kiếm không tồn tại.</p>
            <Button asChild>
              <Link to="/blog">Quay lại tất cả bài viết</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-10 flex-grow">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-amico-gold">Trang chủ</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/blog" className="hover:text-amico-gold">Blog</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-800">{post.title}</span>
        </div>
        
        {/* Blog Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <span className="px-3 py-1 bg-amico-gold text-white text-xs font-medium rounded-full">
              {post.category}
            </span>
            <span className="ml-4 text-gray-500">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">{post.title}</h1>
        </div>
        
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 mb-10 overflow-hidden rounded-xl">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Blog Content */}
        <div className="prose max-w-4xl mx-auto">
          <p className="mb-4 text-lg">{post.excerpt}</p>
          
          {post.content ? (
            <div className="whitespace-pre-line">
              {post.content}
            </div>
          ) : (
            <>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 font-serif">Nội dung chính của bài viết</h2>
              
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <p className="mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 font-serif">Kết luận</h2>
              
              <p className="mb-8">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </>
          )}
          
          {/* Related Posts Section */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-xl font-bold mb-6">Bài viết liên quan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.filter(blog => blog.id !== post.id).slice(0, 2).map((relatedPost) => (
                <div key={relatedPost.id} className="flex items-start">
                  <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden mr-4">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 leading-tight">
                      <Link to={`/blog/${relatedPost.id}`} className="hover:text-amico-gold">
                        {relatedPost.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-gray-500">{relatedPost.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
