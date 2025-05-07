
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/3de4b567-634f-4216-a766-63bccae32694.png" 
                alt="AMICO Logo" 
                className="h-12 mr-2" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-amico-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <ul className="flex flex-col space-y-4 pb-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
