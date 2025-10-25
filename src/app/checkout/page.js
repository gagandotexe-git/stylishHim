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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    router.push("/");
  };

  return (
    <div className="min-h-screen  py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Shipping Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#3AA2CC] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#3AA2CC] outline-none"
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#3AA2CC] outline-none"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#3AA2CC] outline-none"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={form.zip}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#3AA2CC] outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#3AA2CC] outline-none"
              />
            </div>

            {/* Payment Method */}
            <div className="border rounded-md p-4 bg-gray-50 mt-4">
              <h2 className="font-medium mb-2">Payment Method</h2>
              <p className="text-sm text-gray-600">
                (For now, this is a demo checkout. Add Razorpay / Stripe later.)
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3AA2CC] hover:bg-[#3AA2CC] text-white py-3 rounded-md font-semibold mt-6 transition-colors"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3 border-b pb-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × Rs.{item.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="font-semibold text-gray-700">
                    Rs.{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Totals */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>Rs.{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span>Rs.50.00</span>
            </div>
            <div className="flex justify-between text-base font-semibold mt-2">
              <span>Total</span>
              <span>Rs.{(total + 50).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
