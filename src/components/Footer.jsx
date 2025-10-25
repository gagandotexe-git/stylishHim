"use client";
import React, { useState } from "react";
import Link from "next/link";
import { THEME_COLOR } from "@/helpers/colorHelper";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const menuItems = [
    {
      title: "Who are we?",
      items: [
        { label: "Authenticity", href: "/authenticity" },
        { label: "Sustainability", href: "/sustainability" }
      ]
    },
    {
      title: "Help",
      items: [
        { label: "Contact Us", href: "/contactus" },
        { label: "StylishHim Help", href: "/helpcenter" },
        { label: "Cancellation & Return", href: "/returns" },
        { label: "Shipping & Delivery", href: "/shipping" }
      ]
    },
    {
      title: "Quick Links",
      items: [
        { label: "We are into", href: "https://stylishhim.com" },
        { label: "For investors", href: "/new-launches" },
      ]
    },
    {
      title: "Top Categories",
      items: [
        { label: "Makeup", href: "/categories/makeup" },
        { label: "Skin", href: "/categories/skin" },
        { label: "Hair", href: "/categories/hair" },
        { label: "Appliances", href: "/categories/appliances" },
        { label: "Bath & Body", href: "/categories/bath-body" },
        { label: "Fragrance", href: "/categories/fragrance" }
      ]
    }
  ];


  const renderMenuItem = (item) => (
    <Link
      key={item.href}
      href={item.href}
      className="text-[#5C6268] text-[14px] font-[400] transition-colors block py-1"
      onMouseEnter={(e) => e.target.style.color = THEME_COLOR}
      onMouseLeave={(e) => e.target.style.color = '#5C6268'}
    >
      {item.label}
    </Link>
  );

  return (
    <footer className="px-6 md:px-[32px] mt-[10px] border-t border-[#D4D4D5]">
      <div className="max-w-7xl mx-auto pt-6">
        <div className="flex justify-start mb-[10px]">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <h1 className="text-[24px] md:text-[28px] font-bold tracking-wide [font-family:'Cormorant_Garamond',_'Playfair_Display',_serif] relative">
                <span className="relative inline-block bg-clip-text text-transparent" style={{backgroundImage: `linear-gradient(to right, ${THEME_COLOR}, #FFEEE2, ${THEME_COLOR})`}}>
                  StylishHim
                </span>
                <span className="absolute inset-0 bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_100%] opacity-70" style={{backgroundImage: `linear-gradient(to right, transparent, ${THEME_COLOR}, transparent)`}}>
                  StylishHim
                </span>
              </h1>
              <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 mx-auto rounded-full" style={{backgroundImage: `linear-gradient(to right, ${THEME_COLOR}, #FFEEE2, ${THEME_COLOR})`}}></div>
            </div>
          </Link>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-4 gap-8 mb-[16px]">
          {menuItems.map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-[#1C252E] font-[600] text-[14px] pt-[10px] pb-[10px]">
                {title}
              </h3>
              <ul>{items.map(renderMenuItem)}</ul>
            </div>
          ))}
        </div>

        {/* Mobile Accordion View */}
        <div className="md:hidden space-y-4">
          {menuItems.map(({ title, items }, index) => (
            <div key={title} className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-[#1C252E] font-[600] text-[15px]">
                  {title}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {openIndex === index && (
                <ul className="mt-2 pl-2 animate-fadeIn">
                  {items.map(renderMenuItem)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
