import React from 'react';

export default function BeautyProductsGrid() {
  const products = [
    {
      id: 1,
      image: "https://images-static.nykaa.com/creatives/c0a366ce-e787-4855-afc9-15e1dc8bb0f4/default.jpg?tr=cm-pad_resize,w-450",
      title: "Upto 10% Off",
      description: "Dermat Recommended",
      brand: "CeraVe"
    },
    {
      id: 2,
      image: "https://images-static.nykaa.com/creatives/5c9fba41-d21a-41be-865c-aa0d3944057d/default.jpg?tr=cm-pad_resize,w-450",
      title: "Free Gifts On",
      description: "Orders Above ₹2500",
      brand: "L'Occitane"
    },
    {
      id: 3,
      image: "https://images-static.nykaa.com/creatives/4cb62e45-60be-4b25-b717-0a1b50561d64/default.jpeg?tr=cm-pad_resize,w-450",
      title: "Upto 10% Off",
      description: "+Complimentary Gifts",
      brand: "Crystallure"
    },
    {
      id: 4,
      image: "https://images-static.nykaa.com/creatives/c0c1bfa7-41df-4fce-bf01-153b3825b1f9/default.jpg?tr=cm-pad_resize,w-450",
      title: "Upto 10% Off",
      description: "Treats Adult Acne",
      brand: "Uriage"
    },
    {
      id: 5,
      image: "https://images-static.nykaa.com/creatives/a1abca19-2643-4460-aac6-091451a81464/default.jpg?tr=cm-pad_resize,w-450",
      title: "Min. 55% Off*",
      description: "Limited Time Offer",
      brand: "Lacto Calamine"
    },
    {
      id: 6,
      image: "https://images-static.nykaa.com/creatives/4ebe86e0-1063-4274-be9b-dfeeb8223dd4/default.jpg?tr=cm-pad_resize,w-450",
      title: "Upto 30% Off",
      description: "On Entire Range",
      brand: "Minimalist"
    },
    {
      id: 7,
      image: "https://images-static.nykaa.com/creatives/21643f7b-b70a-46ae-9d5e-fd8f47294be0/default.jpg?tr=cm-pad_resize,w-450",
      title: "Up to 20% Off",
      description: "On Entire Range",
      brand: "Brand 7"
    },
    {
      id: 8,
      image: "https://images-static.nykaa.com/creatives/c0a366ce-e787-4855-afc9-15e1dc8bb0f4/default.jpg?tr=cm-pad_resize,w-450",
      title: "Upto 25% off",
      description: "On entire range",
      brand: "Brand 8"
    }
  ];

  return (
    <div className="min-h-screen  bg-white">
 
      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={product.image}
                  alt={product.brand}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {product.description}
                </p>
              </div>

              {/* Badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                <span className="text-xs font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  OFFER
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}