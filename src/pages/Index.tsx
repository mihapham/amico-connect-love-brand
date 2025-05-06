
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import AboutSection from '../components/AboutSection';
import BlogPreview from '../components/BlogPreview';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ProductSection />
      <AboutSection />
      <BlogPreview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
