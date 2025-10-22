"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
    const Logo = (
        <Link href="/" className="flex items-center">
            <span className="text-[20px] font-bold bg-gradient-to-r from-[#AD9682] to-[#AD9682] bg-clip-text text-transparent">
                StylishHim
            </span>
        </Link>
    );

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
            className="text-[#5C6268] text-[13px] font-[400] hover:text-[#AD9682] transition-colors block py-1"
        >
            {item.label}
        </Link>
    );

    return (
        <footer className="px-10 md:px-[32px] mt-[10px]">
            <div className="max-w-7xl mx-auto">
                <div className="pt-6 border-t border-[#D4D4D5]">
                    <div className="flex justify-start mb-[10px]">
                        {Logo}
                    </div>

                    <div className="grid grid-cols-4 gap-8 mb-[16px]">
                        {menuItems.map(({ title, items }) => (
                            <div key={title}>
                                <h3 className="text-[#1C252E] font-[600] text-[13px] pt-[10px] pb-[10px]">
                                    {title}
                                </h3>
                                <ul>{items.map(renderMenuItem)}</ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}