"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const menuItems = [
    {
      title: "Who are we?",
      items: [
        { label: "Authenticity", href: "/about/authenticity" },
        { label: "Sustainability", href: "/about/sustainability" }
      ]
    },
    {
      title: "Help",
      items: [
        { label: "Contact Us", href: "/help/contact" },
        { label: "FAQ", href: "/help/faq" },
        { label: "Cancellation & Return", href: "/help/returns" },
        { label: "Shipping & Delivery", href: "/help/shipping" }
      ]
    },
    {
      title: "Quick Links",
      items: [
        { label: "Offer Zone", href: "/offers" },
        { label: "New Launches", href: "/new-launches" }
      ]
    },
    {
      title: "Top Categories",
      items: [
        { label: "Makeup", href: "/makeup" },
        { label: "Skin", href: "/skin" },
        { label: "Hair", href: "/hair" },
        { label: "Appliances", href: "/appliances" },
        { label: "Bath & Body", href: "/bathandbody" },
        { label: "Fragrance", href: "/fragrance" }
      ]
    }
  ];

  const renderMenuItem = (item) => (
    <Link
      key={item.href}
      href={item.href}
      className="text-[#5C6268] text-[14px] font-[400] hover:text-[#AD9682] transition-colors block py-1"
    >
      {item.label}
    </Link>
  );

  return (
    <footer className="px-6 md:px-[32px] mt-[10px] border-t border-[#D4D4D5]">
      <div className="max-w-7xl mx-auto pt-6">
        <div className="flex justify-start mb-[10px]">
          <Link href="/" className="flex items-center">
            <span className="text-[20px] font-bold bg-gradient-to-r from-[#AD9682] to-[#AD9682] bg-clip-text text-transparent">
              StylishHim
            </span>
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
