"use client"
import { useState } from 'react';
import { Heart } from 'lucide-react';

// Product data array
const products = [
  {
    id: 1,
    name: "Stronger Strands - Hairfall Control Shampoo",
    image: "/images/productone.webp",
    price: 349.00,
    rating: 4,
    reviews: 32
  },
  {
    id: 2,
    name: "Radiance Vitamin C Facewash",
    image: "/images/productone.webp",
    price: 249.00,
    rating: 5,
    reviews: 45
  },
  {
    id: 3,
    name: "Scalp Purify Anti-Dandruff Shampoo",
    image: "/images/productone.webp",
    price: 399.00,
    rating: 4,
    reviews: 28
  },
  {
    id: 4,
    name: "Hair Nourish Deep Conditioning Mask",
    image: "/images/productone.webp",
    price: 449.00,
    rating: 5,
    reviews: 56
  },
  {
    id: 5,
    name: "Glow Boost Serum",
    image: "/images/productone.webp",
    price: 599.00,
    rating: 5,
    reviews: 67
  },
  {
    id: 6,
    name: "Gentle Cleanse Micellar Water",
    image: "/images/productone.webp",
    price: 299.00,
    rating: 4,
    reviews: 41
  },
  {
    id: 7,
    name: "Volume Boost Hair Spray",
    image: "/images/productone.webp",
    price: 379.00,
    rating: 4,
    reviews: 23
  },
  {
    id: 8,
    name: "Hydrate Plus Moisturizer",
    image: "/images/productone.webp",
    price: 499.00,
    rating: 5,
    reviews: 89
  }
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
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden group"
    >
      {/* Favorite Icon */}
      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
      >
        <Heart
          size={18}
          className={`${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'} transition-colors duration-300`}
        />
      </button>

      {/* Product Image */}
      <div className="relative h-48 sm:h-64    rounded-t-xl overflow-hidden">
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
                  index < product.rating ? 'text-[#AD9682]' : 'text-gray-300'
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
  const handleNavigate = (productId) => {
    window.location.href = `/product/${productId}`;
    console.log(`Navigating to product ${productId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Work+Sans:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Work Sans', 'Marcellus', serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Marcellus', 'Work Sans', serif;
        }
      `}</style>

    

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-10">
        {/* Product Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-7">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onNavigate={handleNavigate}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-10 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <p className="text-center text-xs sm:text-sm text-gray-600">
            © 2024 Your Brand. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}