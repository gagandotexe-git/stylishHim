"use client";
import { useState } from "react";
import { Minus, Plus, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductDetailPage({ params }) {
    const productId = 2;

    const product = {
        id: productId,
        title: "Scalp Purify Anti-Dandruff Shampoo",
        price: 349,
        rating: 4.8,
        reviews: 10,
        images: [
            "https://seonskin.in/cdn/shop/files/3d_product_mockup_and_render_2.png?v=1750847007&width=1800",
            
            "https://seonskin.in/cdn/shop/files/WhatsApp_Image_2025-07-05_at_19.41.02_1.jpg?v=1751888972&width=1800",
            "https://seonskin.in/cdn/shop/files/WhatsApp_Image_2025-07-05_at_19.41.02.jpg?v=1751888972&width=1800",
            "https://seonskin.in/cdn/shop/files/WhatsApp_Image_2025-07-05_at_19.41.01_1.jpg?v=1751888971&width=1800",
        ],
        details: [
            {
                title: "PRODUCT DETAILS",
                content: "Fresh, flake-free & healthy scalp shampoo. Helps to control dandruff and nourishes the hair roots.",
            },
            {
                title: "MATERIALS + CARE",
                content: "Made with natural extracts and safe for all hair types.",
            },
            {
                title: "SHIPPING + RETURNS",
                content: "Shipping calculated at checkout. Easy 7-day returns.",
            },
        ],
    };

    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const prevImage = () => {
        setActiveImageIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setActiveImageIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        
        <div className="flex flex-col md:flex-row gap-10 px-4 md:px-12 py-10 text-[#2b2b2b] pt-[110px] md:pt-[65px]">
            {/* LEFT SECTION — Image Slider */}
           <div className="flex flex-col md:flex-row items-center gap-6 md:w-1/2">
  {/* Main Image Slider */}
  <div className="relative w-full h-[400px] flex justify-center items-center order-1 md:order-1">
    <img
      src={product.images[activeImageIndex]}
      alt="Product"
      className="object-contain w-full h-full transition-all duration-300"
    />

    {/* Prev Button */}
    <button
      onClick={prevImage}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full shadow-md"
    >
      <ChevronLeft className="w-6 h-6 text-gray-700" />
    </button>

    {/* Next Button */}
    <button
      onClick={nextImage}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full shadow-md"
    >
      <ChevronRight className="w-6 h-6 text-gray-700" />
    </button>
  </div>

  {/* Thumbnail Column */}
  <div className="flex md:flex-col gap-3 order-2 md:order-2 mt-4 md:mt-0">
    {product.images.map((img, i) => (
      <div
        key={i}
        onClick={() => setActiveImageIndex(i)}
        className={`border rounded-md overflow-hidden cursor-pointer ${activeImageIndex === i ? "border-[#c87b65]" : "border-gray-200"
          }`}
      >
        <img
          src={img}
          alt="thumb"
          width={70}
          height={70}
          className="object-cover"
        />
      </div>
    ))}
  </div>
</div>


            {/* RIGHT SECTION — Product Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
  <h1 className="text-3xl md:text-4xl font-serif mb-3">{product.title}</h1>

  <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
      <span className="text-[#c87b65] text-lg">★★★★★</span>
      <span className="text-sm text-gray-600">{product.reviews} reviews</span>
  </div>

  <p className="text-xl font-medium mb-2">Rs. {product.price}.00</p>
  <p className="text-sm text-gray-500 mb-6">
      SHIPPING CALCULATED AT CHECKOUT.
  </p>

  {/* QUANTITY + ADD TO CART ROW */}
  <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-2 hover:bg-gray-50"
          >
              <Minus className="w-4 h-4 text-gray-600" />
          </button>
          <span className="px-4 py-2 text-gray-700 font-medium border-x border-gray-200">
              {quantity}
          </span>
          <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-2 hover:bg-gray-50"
          >
              <Plus className="w-4 h-4 text-gray-600" />
          </button>
      </div>

      <button className="flex items-center gap-2 bg-[#AD9682] hover:bg-[#d16d4f] text-white px-6 py-3 rounded-md transition-all duration-200 shadow-sm w-auto justify-center">
          <ShoppingCart className="w-4 h-4" />
          <span className="text-sm font-medium">Add to cart</span>
      </button>
  </div>

  <button className="w-[280px] bg-[#AD9682] hover:bg-[#d16d4f] text-white text-base font-medium py-3 rounded-md transition-all duration-200 shadow-sm mb-6">
      Buy it now
  </button>

  <div className="flex flex-col gap-1 mb-8 text-sm text-gray-600 items-center md:items-start">
      <p>🚚 Reliable shipping</p>
      <p>↩️ Flexible returns</p>
  </div>

  <div className="divide-y divide-gray-200 border-y border-gray-200 w-full">
      {product.details.map((d, i) => (
          <details
              key={i}
              className="group py-3 transition-all duration-200 hover:bg-gray-50 open:bg-gray-50"
          >
              <summary className="flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700">
                  {d.title}
                  <span className="text-gray-400 text-lg group-open:rotate-45 transform transition-transform duration-300">
                      +
                  </span>
              </summary>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed pl-1 md:pl-2 text-center md:text-left">
                  {d.content}
              </p>
          </details>
      ))}
  </div>
</div>


            
        </div>


            );
}
