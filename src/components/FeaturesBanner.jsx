"use client"
import React from 'react';
import { Truck, RefreshCw, BadgeCheck, Tag, Instagram, Facebook, Youtube, Twitter, Music } from 'lucide-react';

export default function FeaturesBanner() {
  const features = [
    {
      icon: Truck,
      title: 'FREE SHIPPING',
      description: 'On Orders Above ₹299'
    },
    {
      icon: RefreshCw,
      title: 'EASY RETURNS',
      description: '15-Day Return Policy'
    },
    {
      icon: BadgeCheck,
      title: '100% AUTHENTIC',
      description: 'Products Sourced Directly'
    },
    {
      icon: Tag,
      title: '1900+ BRANDS',
      description: '1.2 Lakh+ Products'
    }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: '#', 
      label: 'Instagram'
    },
    { 
      icon: Facebook, 
      href: '#', 
      label: 'Facebook'
    },
    { 
      icon: Youtube, 
      href: '#', 
      label: 'YouTube'
    },
    { 
      icon: Twitter, 
      href: '#', 
      label: 'Twitter'
    },
    { 
      icon: Music, 
      href: '#', 
      label: 'Pinterest'
    }
  ];

  return (
    <section className="w-full bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:items-center md:justify-between md:gap-8">
          {/* Features */}
          <div className="flex items-center gap-8 flex-1">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-[#F6CBB0] rounded-full p-4 flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-white stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-black font-bold text-sm whitespace-nowrap">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <p className="text-black font-medium text-sm whitespace-nowrap">
              Show us some love ❤️ on social media
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-black rounded-full p-2.5 hover:scale-110 transition-transform"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Horizontal Scroll */}
        <div className="md:hidden">
          {/* Features - Scrollable */}
          <div className="overflow-x-auto scrollbar-hide mb-6 -mx-4 px-4">
            <div className="flex gap-6 pb-2" style={{ minWidth: 'max-content' }}>
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center gap-2 min-w-[120px]">
                  <div className="relative">
                    {/* Outer circular border */}
                    <div className="absolute inset-0 bg-[#F6CBB0] rounded-full" style={{ padding: '3px' }}>
                      <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                    {/* Inner icon circle */}
                    <div className="relative bg-[#F6CBB0] rounded-full p-4">
                      <feature.icon className="w-7 h-7 text-white stroke-[2.5]" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-black font-bold text-xs mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-tight">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media - Scrollable */}
          <div>
            <p className="text-black font-medium text-sm mb-3 text-center">
              Show us some love ❤️ on social media
            </p>
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex justify-center gap-4 pb-2" style={{ minWidth: 'max-content' }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-black rounded-full p-2.5 hover:scale-110 transition-transform flex-shrink-0"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}