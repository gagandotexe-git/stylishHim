// import React from "react";

// const categories = [
//   { id: 1, name: "Gifting", image: "/images/gifting.png" }, 
//   { id: 2, name: "Makeup", image: "/images/gifting.png" },
//   { id: 3, name: "Skin", image: "/images/gifting.png" },
//   { id: 4, name: "Hair", image: "/images/gifting.png" },
//   { id: 5, name: "Appliances", image: "/images/gifting.png" },
//   { id: 6, name: "Bath & Body", image: "/images/gifting.png" },
//   { id: 7, name: "Natural", image: "/images/gifting.png" },
//   { id: 8, name: "Mom & Baby", image: "/images/gifting.png" },
//   { id: 9, name: "Health & Wellness", image: "/images/gifting.png" },
//   { id: 10, name: "Men", image: "/images/gifting.png" },
//   { id: 11, name: "Fragrance", image: "/images/gifting.png" },
//   { id: 12, name: "Lingerie & Accessories", image: "/images/gifting.png" },
//   { id: 13, name: "Sale", isSale: true },
// ];

// const CategoryBar = () => {
//   return (
//     <div className="w-full border-b border-gray-200 bg-white overflow-x-auto">
//       <div className="flex justify-center items-center space-x-6 py-3 px-4 min-w-max">
//         {categories.map((cat) => (
//           <div
//             key={cat.id}
//             className={`cursor-pointer whitespace-nowrap transition-all duration-300 flex flex-col items-center ${
//               cat.isSale
//                 ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white px-2 py-1 rounded-[20px] shadow-lg hover:scale-105 hover:shadow-xl text-sm sm:text-xs md:text-sm lg:text-base"
//                 : "text-secondary hover:text-primary"
//             }`}
//           >
//             {cat.isSale ? (
//               <span className="text-[14px] font-medium">{cat.name}</span>
//             ) : (
//               <>
//                 {/* Desktop / Large screens: show text */}
//                 <span className="hidden md:block text-[14px] font-medium">
//                   {cat.name}
//                 </span>
//                 {/* Mobile / Tablet: show image */}
//                 <img
//                   src={cat.image}
//                   alt={cat.name}
//                   className="block md:hidden w-12 h-12 object-contain"
//                 />
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryBar;
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
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
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
                    sizes="20vw"
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
