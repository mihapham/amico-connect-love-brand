
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/3de4b567-634f-4216-a766-63bccae32694.png" 
                alt="AMICO Logo" 
                className="h-12 mr-2" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                >
                  Sản phẩm
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                >
                  Liên hệ
                </a>
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
                <a
                  href="#home"
                  className="block text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="block text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Sản phẩm
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="block text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-gray-700 hover:text-amico-gold font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
