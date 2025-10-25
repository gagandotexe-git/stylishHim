"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TopBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const banners = [
    {
      id: 1,
      src: "https://images-static.nykaa.com/uploads/0b12049e-a26a-4588-8bad-369d32f057b6.gif",
      alt: "Nykaa Diwali Dhamaka Sale",
      link: "#",
      title: "Nykaa Diwali Dhamaka Sale",
      subtitle: "Up to 50% Off",
      buttonText: "Know More",
    },
    {
      id: 2,
      src: "https://images-static.nykaa.com/uploads/0b12049e-a26a-4588-8bad-369d32f057b6.gif",
      alt: "Get Glowing",
      link: "#",
      title: "Only At Nykaa",
      subtitle: "Up to 10% Off",
      buttonText: "Know More",
    },
    {
      id: 3,
      src: "https://images-static.nykaa.com/uploads/0b12049e-a26a-4588-8bad-369d32f057b6.gif",
      alt: "Foxtale Offer",
      link: "#",
      title: "Up To 30% Off",
      subtitle: "Free Gift on ₹599+",
      buttonText: "Know More",
    },
    {
      id: 4,
      src: "https://images-static.nykaa.com/uploads/0b12049e-a26a-4588-8bad-369d32f057b6.gif",
      alt: "Festive Gift Store",
      link: "#",
      title: "Festive Gift Store",
      subtitle: "Perfect Gifts for Everyone",
      buttonText: "Know More",
    },
  ];

  useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width >= 1200) setVisibleSlides(3);
      else if (width >= 768) setVisibleSlides(2);
      else setVisibleSlides(1);
    };
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const totalSlides = banners.length;
  const maxIndex = Math.max(0, totalSlides - visibleSlides);
  const GAP = 16;

  const goToNext = () => {
    setCurrentIndex((prev) =>
      isMobile ? (prev + 1) % totalSlides : (prev + 1) % (maxIndex + 1)
    );
  };
  const goToPrev = () => {
    setCurrentIndex((prev) =>
      isMobile
        ? (prev - 1 + totalSlides) % totalSlides
        : (prev - 1 + (maxIndex + 1)) % (maxIndex + 1)
    );
  };
  const goToSlide = (i) => setCurrentIndex(i);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) goToNext();
    if (touchStartX.current - touchEndX.current < -50) goToPrev();
  };

  return (
    <div className="relative w-full flex justify-center">
      <div className="w-full max-w-[1500px] px-4 md:px-8 py-4 md:py-8">
        <div
          className="relative overflow-hidden rounded-2xl"
          onTouchStart={isMobile ? handleTouchStart : null}
          onTouchMove={isMobile ? handleTouchMove : null}
          onTouchEnd={isMobile ? handleTouchEnd : null}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out h-[400px] md:h-96 lg:h-[420px]"
            style={{
              transform: isMobile
                ? `translateX(-${currentIndex * 100}%)`
                : `translateX(-${
                    (currentIndex * (100 + GAP / visibleSlides)) / visibleSlides
                  }%)`,
              gap: `${GAP}px`,
            }}
          >
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-10px)] h-[400px] md:h-96 lg:h-[420px] relative group"
              >
                <a href={banner.link} className="block w-full h-full relative">
                  <img
                    src={banner.src}
                    alt={banner.alt}
                    className="object-fill rounded-2xl w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                  {isMobile ? (
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <button className="bg-[#AD9682] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#f4b899] transition-colors inline-flex items-center gap-2">
                        {banner.buttonText}
                        <span>→</span>
                      </button>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl" />
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Desktop navigation */}
          {!isMobile && maxIndex > 0 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 z-10 group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:-translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 z-10 group"
              >
                <ChevronRight className="w-6 h-6 text-gray-800 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </>
          )}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: isMobile ? totalSlides : maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all duration-200 rounded-full ${
                i === currentIndex
                  ? "w-8 h-3 bg-[#000]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
