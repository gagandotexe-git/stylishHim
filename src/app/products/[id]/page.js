"use client"

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "../../productdisplay/page";

export default function ProductDetailPage() {
  const params = useParams();
  const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const product = products.find((item) => String(item.id) === String(idParam));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Product not found.</p>
          <Link href="/productdisplay" className="text-[#AD9682] font-medium mt-4 inline-block">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const primaryImage = product.image;

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
      <main className="max-w-6xl mx-auto px-4 py-10">
        <Link href="/productdisplay" className="text-[#AD9682] font-medium mb-6 inline-block">
          &larr; Back to products
        </Link>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="relative w-full h-96 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
              <img src={primaryImage} alt={product.name} className="max-h-full object-contain p-4" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${index < product.rating ? 'text-[#AD9682]' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-lg">({product.reviews} reviews)</span>
            </div>
            <p className="text-3xl font-bold text-[#AD9682] mb-6">Rs. {product.price.toFixed(2)}</p>
            <p className="text-gray-700 text-base leading-relaxed mb-8">{product.description}</p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-6 py-2 text-lg font-semibold text-gray-800 border-x border-gray-300">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-[#AD9682] hover:bg-[#9a7f6d] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Add to Cart
              </button>
            </div>

            <button className="w-full bg-[#AD9682] hover:bg-[#9a7f6d] text-white font-semibold py-3 rounded-lg transition-colors duration-200 mb-6">
              Buy Now
            </button>

            <div className="border-t border-gray-200 pt-6 text-sm text-gray-600 space-y-2">
              <p>✓ Authentic Product</p>
              <p>✓ Free Shipping on Orders Above Rs. 500</p>
              <p>✓ 7 Days Easy Return Policy</p>
              <p>✓ 100% Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
