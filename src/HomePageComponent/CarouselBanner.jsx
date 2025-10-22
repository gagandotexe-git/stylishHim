'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  // Banner data
  const banners = [
    {
      id: 1,
      src: 'https://images-static.nykaa.com/uploads/fd058a86-bec3-4b52-9aba-e86ece98128d.jpg?tr=cm-pad_resize,w-900',
      alt: 'Nykaa Diwali Dhamaka Sale',
      link: '/sale'
    },
    {
      id: 2,
      src: 'https://images-static.nykaa.com/uploads/fd058a86-bec3-4b52-9aba-e86ece98128d.jpg?tr=cm-pad_resize,w-900',
      alt: 'Get Glowing',
      link: '/get-glowing'
    },
    {
      id: 3,
      src: 'https://images-static.nykaa.com/uploads/fd058a86-bec3-4b52-9aba-e86ece98128d.jpg?tr=cm-pad_resize,w-900',
      alt: 'Nykaaland',
      link: '/nykaaland'
    },
    {
      id: 4,
      src: 'https://images-static.nykaa.com/uploads/fd058a86-bec3-4b52-9aba-e86ece98128d.jpg?tr=cm-pad_resize,w-900',
      alt: 'Festive Gift Store',
      link: '/gift-store'
    }
  ];

  // Update visible slides based on screen size
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1200) setVisibleSlides(3);
        else if (window.innerWidth >= 768) setVisibleSlides(2);
        else setVisibleSlides(1);
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const totalSlides = banners.length;
  const maxIndex = Math.max(0, totalSlides - visibleSlides);
  const GAP = 10; // 10px gap between images

  // Navigation handlers
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-80 md:h-96 lg:h-[400px]"
          style={{
            transform: `translateX(-${(currentIndex * (100 + GAP)) / visibleSlides}%)`,
            gap: `${GAP}px` // 10px gap between slides
          }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="flex-shrink-0 w-full lg:w-[calc(33.333%-10px)] md:w-[calc(50%-10px)] h-80 md:h-96 lg:h-[400px] relative"
            >
              <a href={banner.link} className="block w-full h-full">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-300 w-full h-full"
                  priority
                />
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {maxIndex > 0 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 z-10 md:left-2 lg:left-4 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:-translate-x-1 transition-transform duration-200" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 z-10 md:right-2 lg:right-4 group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-800 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {maxIndex > 0 && (
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`
                w-3 h-3 rounded-full transition-all duration-200 ${
                  i === currentIndex
                    ? 'bg-[#AD9682] scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselBanner;