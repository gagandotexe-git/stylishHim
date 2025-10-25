"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const freeDeliveryThreshold = 999;
  const shippingCost = total >= freeDeliveryThreshold ? 0 : 50;
  const amountNeeded = freeDeliveryThreshold - total;
  const progressPercentage = Math.min((total / freeDeliveryThreshold) * 100, 100);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Shipping Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-semibold mb-6 text-gray-800">Checkout</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#3AA2CC] focus:border-transparent outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#3AA2CC] focus:border-transparent outline-none transition-all"
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#3AA2CC] focus:border-transparent outline-none transition-all"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#3AA2CC] focus:border-transparent outline-none transition-all"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={form.zip}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#3AA2CC] focus:border-transparent outline-none transition-all"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#3AA2CC] focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Payment Method */}
            <div className="border border-gray-200 rounded-lg p-4 bg-gradient-to-r from-gray-50 to-blue-50 mt-4">
              <h2 className="font-medium mb-2 text-gray-800">Payment Method</h2>
              <p className="text-sm text-gray-600">
                (For now, this is a demo checkout. Add Razorpay / Stripe later.)
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3AA2CC] to-[#2D8AB3] hover:from-[#2D8AB3] hover:to-[#3AA2CC] text-white py-3 rounded-lg font-semibold mt-6 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Order Summary</h2>

          <div className="space-y-3 border-b border-gray-200 pb-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × ₹{item.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="font-semibold text-gray-700">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Totals */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span className={shippingCost === 0 ? "text-green-600 font-semibold line-through" : ""}>
                ₹{shippingCost === 0 ? "50.00" : shippingCost.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-base font-semibold mt-2 pt-2 border-t border-gray-200">
              <span>Total</span>
              <span className="text-[#3AA2CC]">₹{(total + shippingCost).toFixed(2)}</span>
            </div>
          </div>

          {/* Free Delivery Indicator */}
          {total < freeDeliveryThreshold && total > 0 && (
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-[#3AA2CC] border-opacity-30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Add ₹{amountNeeded.toFixed(2)} more for FREE delivery!
                </span>
                <span className="text-xs font-semibold text-[#3AA2CC]">
                  {progressPercentage.toFixed(0)}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-[#3AA2CC] to-[#2D8AB3] transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              
              <p className="text-xs text-gray-600 mt-2 text-center">
                🚚 Free delivery on orders above ₹999
              </p>
            </div>
          )}

          {/* Free Delivery Achieved */}
          {total >= freeDeliveryThreshold && (
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-400 animate-pulse">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-700 font-semibold">
                  🎉 You&apos;ve unlocked FREE Delivery!
                </span>
              </div>
              <p className="text-xs text-green-600 mt-2 text-center">
                Your shipping cost has been waived
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}