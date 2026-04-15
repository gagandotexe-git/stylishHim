"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Premium Rice Quality",
    description: "High-quality rice varieties from trusted suppliers worldwide",
    buttonText: "Order Rice",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Pure Sugar Supply",
    description: "Refined sugar products for industrial and commercial use",
    buttonText: "Get Quote",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Fresh Fish & Seafood",
    description: "Premium quality fresh and frozen seafood products",
    buttonText: "View Catalog",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Chemical Solutions",
    description: "Industrial chemicals and specialty compounds for various applications",
    buttonText: "Contact Us",
  },
  {
    image:
      "https://img.freepik.com/free-photo/shipping-industry-delivering-cargo-large-container-ship-generative-ai_188544-9112.jpg?semt=ais_incoming&w=740&q=80",
    title: "Global Shipping \ud83d\udea2",
    description: "Worldwide maritime transport and logistics services",
    buttonText: "Track Shipment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Cosmetics & Beauty",
    description: "Premium beauty products and cosmetic manufacturing",
    buttonText: "Shop Now",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUX8SqDsEFfu6OAwvz9sEsnzzuRL5gtu7_8Q2gtTi8pKPMvBH3X1THZm_e3E7pr44PdA8&usqp=CAU",
    title: "Fine Tea Collection",
    description: "Premium tea varieties sourced from the finest gardens",
    buttonText: "Browse Teas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Dairy Products",
    description: "Fresh milk, cheese, butter, and dairy supplies worldwide",
    buttonText: "Shop Dairy",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGHliGmCXGraybLhGH5SG3crQp8htFX4lgh8-iH44MOh_-HIZ_4fjDirr-VVcGmAPSWY&usqp=CAU",
    title: "Delicious Chocolate",
    description: "Premium chocolates and cocoa products for every taste",
    buttonText: "Indulge Now",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553375456-af2fa339e7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Big Shop Cargo",
    description: "Heavy cargo and bulk logistics solutions for businesses",
    buttonText: "Explore Cargo",
  },
];

const WeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(slideNext, 5000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] lg:h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 scale-105"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-20">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                {slides[currentIndex].title}
              </h2>
              <p className="text-base md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
                {slides[currentIndex].description}
              </p>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
                {slides[currentIndex].buttonText}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Hidden on small mobile for cleaner look, but added touch targets */}
      <button
        onClick={slidePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button
        onClick={slideNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 md:w-10 bg-blue-600"
                : "w-2 md:w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WeCarousel;
