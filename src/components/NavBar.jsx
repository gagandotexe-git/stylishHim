"use client";
import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Products" },
    { href: "/", label: "About" },
    { href: "/", label: "StylishHim Fashion" },
    { href: "/", label: "Style Advice" },
    { href: "/", label: "Help" },
  ];

  const Logo = (
    <Link href="/" className="flex items-center">
      <span className="text-[20px] font-bold bg-gradient-to-r from-[#AD9682] to-[#AD9682] bg-clip-text text-transparent">
        StylishHim
      </span>
    </Link>
  );

  const Icons = (
    <div className="flex items-center space-x-3">
      <Link href="/" className="p-2 text-black hover:text-[#AD9682] transition-colors">
        <User className="h-5 w-5" />
      </Link>
      <Link href="/" className="relative p-2 text-black hover:text-[#AD9682] transition-colors">
        <ShoppingBag className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 bg-[#AD9682] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
      </Link>
      <button className="p-2 text-black md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  );

  const SearchBar = (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <input
        type="text"
        placeholder="Search on StylishHim"
        className="w-full pl-12 pr-4 py-1.5 text-[14px] border border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#AD9682] focus:border-transparent"
      />
    </div>
  );

  return (
    <nav className="bg-[#FFFFFF] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile */}
        <div className="flex md:hidden justify-between items-center h-12">
          {Logo} {Icons}
        </div>
        <div className="flex md:hidden mb-4 w-full">{SearchBar}</div>

        {/* Desktop */}
        <div className="hidden md:flex justify-between items-center h-14">
          {Logo}
          <div className="flex items-center space-x-8">
            {navItems.map(({ href, label }) => (
              <Link key={label} href={href} className="text-[14px] font-[500] text-black hover:text-[#AD9682] transition-colors">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex-1 max-w-md mx-8">{SearchBar}</div>
          {Icons}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map(({ href, label }) => (
              <Link key={href} href={href} className="text-[14px] font-[500] block px-3 py-2 text-black hover:bg-gray-100 rounded">
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;