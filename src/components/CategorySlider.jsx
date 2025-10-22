
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CategorySlider = () => {
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { name: "Makeup", image: "/images/categoryImage/gifting.png", link: "/gifting" },
    { name: "Skin", image: "/images/categoryImage/skin.png", link: "/skin" },
    { name: "Hair", image: "/images/categoryImage/hair.png", link: "/hair" },
    { name: "Appliances", image: "/images/categoryImage/glow.png", link: "/glow" },
    { name: "Bath & Body", image: "/images/categoryImage/bathbody.png", link: "/bath-body" },
    { name: "Fragrance", image: "/images/categoryImage/glow.png", link: "/fragrance" },
  ];

  return (
    <div className="w-full bg-white pt-[85px] md:pt-[65px]">
      {/* Desktop View - Text Navigation */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-8 flex-wrap">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="text-gray-700 hover:text-[#AD9682] transition-colors duration-200 text-sm font-medium whitespace-nowrap"
              >
                {category.name}
              </Link>
            ))}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              SALE
            </span>
          </nav>
        </div>
      </div>

      {/* Mobile View - Image Slider */}
      <div className="lg:hidden">
        <div
          ref={scrollContainerRef}
          className="mt-2 flex overflow-x-auto gap-4 px-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="flex-shrink-0 snap-start"
              style={{ width: "calc(20% - 12.8px)" }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-full aspect-square rounded-full overflow-hidden   hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
              
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CategorySlider;
