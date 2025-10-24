"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";

export const products = [
  {
    id: 1,
    name: "Stronger Strands - Hairfall Control Shampoo",
    image: "/images/productone.webp",
    price: 349.0,
    rating: 4,
    reviews: 32,
    description:
      "Our Stronger Strands Hairfall Control Shampoo is specially formulated to reduce hair fall and strengthen your hair from the roots.",
  },
  {
    id: 2,
    name: "Radiance Vitamin C FaceMask",
    image: "/images/productone.jpeg",
    price: 249.0,
    rating: 5,
    reviews: 45,
    description:
      "Radiance Vitamin C FaceMask brightens and revitalizes your complexion with potent vitamin C and hydration.",
  },
  {
    id: 3,
    name: "Vitamin C Face Wash",
    image: "/images/producttwo.jpeg",
    price: 399.0,
    rating: 4,
    reviews: 28,
    description:
      "A gentle yet effective cleanser that removes impurities while delivering the brightening benefits of vitamin C.",
  },
  {
    id: 4,
    name: "Glow Boost Serum",
    image: "/images/productthree.jpeg",
    price: 449.0,
    rating: 5,
    reviews: 56,
    description:
      "A lightweight serum that instantly boosts radiance and hydrates deeply while reducing fine lines.",
  },
  {
    id: 5,
    name: "Hydrate Plus Moisturizer",
    image: "/images/productseven.jpeg",
    price: 499.0,
    rating: 5,
    reviews: 89,
    description:
      "A rich, nourishing cream that deeply hydrates and protects your skin for 24 hours.",
  },
  {
    id: 6,
    name: "Gentle Cleanse Micellar Water",
    image: "/images/productfive.jpeg",
    price: 299.0,
    rating: 4,
    reviews: 41,
    description:
      "Micellar water that removes makeup and impurities gently without irritation.",
  },
  {
    id: 7,
    name: "Volume Boost Hair Spray",
    image: "/images/productsix.jpeg",
    price: 379.0,
    rating: 4,
    reviews: 23,
    description:
      "Adds instant volume and thickness with a strong hold — lightweight and non-sticky.",
  },
  {
    id: 8,
    name: "Glow Boost Serum - Premium",
    image: "/images/prodcutfour.jpeg",
    price: 599.0,
    rating: 5,
    reviews: 67,
    description:
      "A luxurious formulation with advanced ingredients that deliver intense hydration and skin renewal.",
  },
];

const ProductCard = ({ product, onNavigate }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={() => onNavigate(product.id)}
      className="bg-white rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden group flex-shrink-0 
        w-[48%] sm:w-[48%] md:w-[23%] lg:w-[23%]"
    >
      {/* Favorite Icon */}
      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
      >
        <Heart
          size={18}
          className={`${
            isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
          } transition-colors duration-300`}
        />
      </button>

      {/* Product Image */}
      <div className="relative h-48 sm:h-64 rounded-t-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-3 sm:p-5">
        <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-2 sm:mb-3 h-10 sm:h-12 line-clamp-2 leading-5 sm:leading-6">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2 sm:mb-3">
          <div className="flex items-center gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  index < product.rating ? "text-[#AD9682]" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs sm:text-sm text-[#AD9682] ml-1 font-medium">
            {product.reviews} reviews
          </span>
        </div>

        {/* Price */}
        <p className="text-lg sm:text-xl font-semibold text-[#AD9682]">
          Rs. {product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default function ProductListingPage() {
  const router = useRouter();

  const handleNavigate = (productId) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className="bg-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Marcellus&family=Work+Sans:wght@300;400;500;600;700&display=swap");

        * {
          font-family: "Work Sans", "Marcellus", serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Marcellus", "Work Sans", serif;
        }
      `}</style>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-10">
        {/* Horizontal Scroll Row */}
        <div className="flex gap-3 sm:gap-6 md:gap-7 overflow-x-auto scroll-smooth scrollbar-hide pb-4 md:pb-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onNavigate={handleNavigate}
            />
          ))}
        </div>
      </main>

      {/* Hide scrollbar */}
      <style jsx>{`
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
}