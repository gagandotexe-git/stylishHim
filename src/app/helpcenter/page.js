"use client";

import React from "react";
import {
  ShoppingBag,
  User,
  MessageCircle,
  ChevronRight,
  Package,
  Wallet,
  UserCircle,
  Building2,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export default function HelpCenter() {
  const whatsappNumber = "919569125048";

  const openWhatsApp = (message) => {
    if (typeof window !== "undefined") {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    }
  };

  const handleTopicClick = (topic) => {
    openWhatsApp(`Hi, I need help with ${topic}`);
  };

  const handleChatClick = () => {
    openWhatsApp("Hi, I need assistance");
  };

  const topics = [
    {
      icon: Package,
      label: "Order Related",
      color: "bg-gradient-to-br from-purple-100 to-purple-50",
      iconColor: "text-purple-600",
      shadowColor: "group-hover:shadow-purple-200",
    },
    {
      icon: ShoppingBag,
      label: "Shopping",
      color: "bg-gradient-to-br from-pink-100 to-pink-50",
      iconColor: "text-pink-600",
      shadowColor: "group-hover:shadow-pink-200",
    },
    {
      icon: UserCircle,
      label: "StylishHim Account",
      color: "bg-gradient-to-br from-blue-100 to-blue-50",
      iconColor: "text-blue-600",
      shadowColor: "group-hover:shadow-blue-200",
    },
    {
      icon: Wallet,
      label: "Payments",
      color: "bg-gradient-to-br from-green-100 to-green-50",
      iconColor: "text-green-600",
      shadowColor: "group-hover:shadow-green-200",
    },
    {
      icon: Building2,
      label: "Sell On StylishHim",
      color: "bg-gradient-to-br from-amber-100 to-amber-50",
      iconColor: "text-amber-600",
      shadowColor: "group-hover:shadow-amber-200",
    },
    {
      icon: HelpCircle,
      label: "Others",
      color: "bg-gradient-to-br from-indigo-100 to-indigo-50",
      iconColor: "text-indigo-600",
      shadowColor: "group-hover:shadow-indigo-200",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Sign In Card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#AD9682]/10 to-transparent rounded-full -mr-16 -mt-16" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#AD9682] to-[#8d7662] w-12 h-12 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                  Getting help is easy
                  <Sparkles className="w-4 h-4 text-[#AD9682]" />
                </h3>
                <p className="text-sm text-gray-600">
                  Sign in to get help with recent orders
                </p>
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-[#AD9682] to-[#8d7662] hover:from-[#9d8672] hover:to-[#7d6652] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap w-full sm:w-auto"
            >
              Sign in
            </button>
          </div>
        </div>

        {/* Browse Topics Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            Browse Topics
            <div className="h-1 w-12 bg-gradient-to-r from-[#AD9682] to-transparent rounded-full" />
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleTopicClick(topic.label)}
                  className={`bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-[#AD9682] hover:shadow-xl transition-all duration-300 group ${topic.shadowColor}`}
                >
                  <div
                    className={`${topic.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${topic.iconColor}`} strokeWidth={2} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#AD9682] transition-colors duration-300 leading-tight">
                    {topic.label}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Need More Help Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            Need more help?
            <div className="h-1 w-12 bg-gradient-to-r from-[#AD9682] to-transparent rounded-full" />
          </h2>
          <button
            onClick={handleChatClick}
            className="w-full bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-[#AD9682] hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#AD9682] via-[#8d7662] to-[#AD9682] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#AD9682] to-[#8d7662] w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg relative">
                  <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#AD9682] transition-colors duration-300">
                    Chat with us
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    Get instant query assistance
                  </p>
                </div>
              </div>
              <ChevronRight
                className="w-7 h-7 text-gray-400 group-hover:text-[#AD9682] group-hover:translate-x-2 transition-all duration-300"
                strokeWidth={2.5}
              />
            </div>
          </button>
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 font-medium">
            We're here to help you 24/7. Click any topic or chat with us directly on WhatsApp.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Online now
          </div>
        </div>
      </div>
    </div>
  );
}
