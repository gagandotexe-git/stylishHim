'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const banners = [
    {
      id: 1,
      src: '/bannerImages/stylishhimbanner8.png',
      alt: 'Nykaa Diwali Dhamaka Sale',
      link: '#',
      title: 'Nykaa Diwali Dhamaka Sale',
      subtitle: 'Up to 50% Off',
      buttonText: 'Know More',
    },
    {
      id: 2,
      src: '/bannerImages/stylishhimbanner10.png',
      alt: 'Get Glowing',
      link: '#',
      title: 'Only At Nykaa',
      subtitle: 'Up to 10% Off',
      buttonText: 'Know More',
    },
    {
      id: 3,
      src: '/bannerImages/stylishhimbanner14.png',
      alt: 'Foxtale Offer',
      link: '#',
      title: 'Up To 30% Off',
      subtitle: 'Free Gift on ₹599+',
      buttonText: 'Know More',
    },
    {
      id: 4,
      src: '/bannerImages/stylishhimbanner10.png',
      alt: 'Festive Gift Store',
      link: '#',
      title: 'Festive Gift Store',
      subtitle: 'Perfect Gifts for Everyone',
      buttonText: 'Know More',
    },
  ];

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        setIsMobile(width < 768);
        if (width >= 1200) setVisibleSlides(3);
        else if (width >= 768) setVisibleSlides(2);
        else setVisibleSlides(1);
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const totalSlides = banners.length;
  const maxIndex = Math.max(0, totalSlides - visibleSlides);
  const GAP = 16;

  const goToNext = () => {
    setCurrentIndex((prev) => {
      if (isMobile) return (prev + 1) % totalSlides;
      return (prev + 1) % (maxIndex + 1);
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => {
      if (isMobile) return (prev - 1 + totalSlides) % totalSlides;
      return (prev - 1 + (maxIndex + 1)) % (maxIndex + 1);
    });
  };

  const goToSlide = (index) => setCurrentIndex(index);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) goToNext();
    if (touchStartX.current - touchEndX.current < -50) goToPrev();
  };

  const StarIcon = ({ style }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  );

  const AnimatedStars = () => {
    const starColors = ['#FBE0CD', '#F1F1EF', '#F4D138'];
    const stars = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      size: Math.random() * 20 + 15,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 1.5,
      blinkDuration: Math.random() * 2 + 1,
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              color: star.color,
              animation: `starFloat ${star.duration}s ease-in-out ${star.delay}s infinite,
                          starBlink ${star.blinkDuration}s ease-in-out ${star.delay}s infinite,
                          colorChange 4s ease-in-out ${star.delay}s infinite`,
            }}
          >
            <StarIcon />
          </div>
        ))}
        <style jsx>{`
          @keyframes starFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
          }
          @keyframes starBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.2; }
          }
          @keyframes colorChange {
            0% { color: #FBE0CD; }
            33% { color: #F1F1EF; }
            66% { color: #F4D138; }
            100% { color: #FBE0CD; }
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className="relative w-full overflow-hidden bg-white md:bg-[#FFEEE2]">
      {!isMobile && <AnimatedStars />}

      <div className="relative w-full max-w-7xl mx-auto px-0 md:px-4 py-0 md:py-8">
        {!isMobile && (
          <h2 className="text-center text-4xl font-bold text-[#9e7653] mb-6 tracking-[0.8px]">
            GET GLOWING
          </h2>
        )}

        {/* Carousel Container */}
        <div
          className={`relative overflow-hidden rounded-none md:rounded-2xl ${
            isMobile ? 'mx-0' : 'mx-4'
          }`}
          onTouchStart={isMobile ? handleTouchStart : null}
          onTouchMove={isMobile ? handleTouchMove : null}
          onTouchEnd={isMobile ? handleTouchEnd : null}
        >
          {/* Slides */}
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              isMobile ? 'h-[300px]' : 'h-[400px] md:h-96 lg:h-[420px]'
            }`}
            style={{
              transform: isMobile
                ? `translateX(-${currentIndex * 100}%)`
                : `translateX(-${(currentIndex * (100 + GAP / visibleSlides)) / visibleSlides}%)`,
              gap: isMobile ? '0px' : `${GAP}px`,
            }}
          >
            {banners.map((banner) => (
              <div
                key={banner.id}
                className={`flex-shrink-0 relative group ${
                  isMobile
                    ? 'w-full h-[300px]'
                    : 'md:w-[calc(50%-8px)] lg:w-[calc(33.333%-12px)] h-[400px] md:h-96 lg:h-[420px]'
                }`}
              >
                <a href={banner.link} className="block w-full h-full relative">
                  <img
                    src={banner.src}
                    alt={banner.alt}
                    className="object-cover w-full h-full rounded-none md:rounded-2xl"
                    style={{ objectPosition: 'center' }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                
                </a>
              </div>
            ))}
          </div>

          {/* Arrows (Desktop Only) */}
          {!isMobile && maxIndex > 0 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 z-10 group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:-translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 z-10 group"
              >
                <ChevronRight className="w-6 h-6 text-gray-800 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </>
          )}
        </div>

        {/* ✅ Indicators (visible over images) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center space-x-2 z-20">
          {Array.from({ length: isMobile ? totalSlides : maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all duration-200 rounded-full ${
                i === currentIndex
                  ? 'w-8 h-3 bg-[#AD9682]'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;
