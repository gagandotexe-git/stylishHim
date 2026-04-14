 

"use client"
import React, { useState, useEffect } from 'react';

const WeCraousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
    {
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Premium Rice Quality',
      description: 'High-quality rice varieties from trusted suppliers worldwide',
      buttonText: 'Order Rice'
    },
    {
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Pure Sugar Supply',
      description: 'Refined sugar products for industrial and commercial use',
      buttonText: 'Get Quote'
    },
    {
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Fresh Fish & Seafood',
      description: 'Premium quality fresh and frozen seafood products',
      buttonText: 'View Catalog'
    },
    {
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Chemical Solutions',
      description: 'Industrial chemicals and specialty compounds for various applications',
      buttonText: 'Contact Us'
    },
    {
      image: 'https://img.freepik.com/free-photo/shipping-industry-delivering-cargo-large-container-ship-generative-ai_188544-9112.jpg?semt=ais_incoming&w=740&q=80',
      title: 'Global Shipping 🚢',
      description: 'Worldwide maritime transport and logistics services',
      buttonText: 'Track Shipment'
    },
    {
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Cosmetics & Beauty',
      description: 'Premium beauty products and cosmetic manufacturing',
      buttonText: 'Shop Now'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUX8SqDsEFfu6OAwvz9sEsnzzuRL5gtu7_8Q2gtTi8pKPMvBH3X1THZm_e3E7pr44PdA8&usqp=CAU',
      title: 'Fine Tea Collection',
      description: 'Premium tea varieties sourced from the finest gardens',
      buttonText: 'Browse Teas'
    },
    {
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Dairy Products',
      description: 'Fresh milk, cheese, butter, and dairy supplies worldwide',
      buttonText: 'Shop Dairy'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGHliGmCXGraybLhGH5SG3crQp8htFX4lgh8-iH44MOh_-HIZ_4fjDirr-VVcGmAPSWY&usqp=CAU',
      title: 'Delicious Chocolate',
      description: 'Premium chocolates and cocoa products for every taste',
      buttonText: 'Indulge Now'
    },
    {
      image: 'https://images.unsplash.com/photo-1553375456-af2fa339e7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Big Shop Cargo',
      description: 'Heavy cargo and bulk logistics solutions for businesses',
      buttonText: 'Explore Cargo'
    }
  ];

  // Auto-rotate slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                
                <button className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/50">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    {slide.buttonText}
                    <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white shadow-lg scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default WeCraousel;