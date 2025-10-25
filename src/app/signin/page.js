import React, { useState } from 'react';
import { Package, Star } from 'lucide-react';

export default function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#A40753] p-4 flex justify-end">
        <button className="text-white text-sm font-medium">
          Skip
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-[#A40753] px-6 pb-12 pt-8 flex flex-col items-center relative">
        {/* Decorative stars */}
        <Star className="absolute top-12 left-8 w-3 h-3 text-pink-300 fill-pink-300" />
        <Star className="absolute top-20 right-12 w-2 h-2 text-pink-300 fill-pink-300" />
        <Star className="absolute bottom-24 left-12 w-2 h-2 text-pink-300 fill-pink-300" />
        <Star className="absolute bottom-32 right-8 w-3 h-3 text-pink-300 fill-pink-300" />

        {/* Shopping bag illustration */}
        <div className="relative w-40 h-40 mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl transform rotate-45"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-pink-200 w-24 h-28 rounded-t-3xl flex items-center justify-center shadow-lg">
              <Package className="w-12 h-12 text-white" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Policy text */}
        <p className="text-white text-sm font-medium">
          15 Day Easy Return Policy
        </p>
      </div>

      {/* Login Form Section */}
      <div className="bg-white rounded-t-3xl -mt-6 px-6 pt-8 pb-12">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#A40753] tracking-tight">
            StylishHim
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
          Login or Signup
        </h2>
        <p className="text-sm text-gray-500 text-center mb-8">
          Get started & grab best offers on top brands!
        </p>

        {/* Mobile Number Input */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">
            Mobile Number
          </label>
          <div className="flex gap-2">
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter mobile number"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#A40753] focus:ring-1 focus:ring-[#A40753]"
              maxLength="10"
            />
            <button className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
              Get OTP
            </button>
          </div>
        </div>

        {/* Google Login Button */}
        <button className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors mb-6">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-gray-700 font-medium">Continue With Google</span>
        </button>

        {/* Email Login Link */}
        <div className="text-center">
          <button className="text-sm text-gray-600 hover:text-[#A40753] transition-colors">
            Use Email ID
          </button>
        </div>
      </div>
    </div>
  );
}