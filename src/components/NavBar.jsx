"use client";
import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link"; 
import SearchBar from "./searchbar/SearchBar";
import { useSelector } from "react-redux";
import CartDrawer from "./CartDrawer";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isCartOpen, setIsCartOpen] = useState(false);

  const navItems = [
  // src/constants/navLinks.js

  { href: "/productdisplay", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/fashion", label: "StylishHim Fashion" },
  { href: "/style-advice", label: "Style Advice" },
  { href: "/help", label: "Help" },


  ];
const cartItems = useSelector((state) => state.cart.items);
const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

const AnimatedLogo = () => (
  <Link href="/" className="flex items-center group">
    <div className="relative mr-4">
      {/* Logo text with warm shimmer effect */}
      <h1 className="text-[28px] md:text-[32px] font-bold tracking-wide [font-family:'Cormorant_Garamond',_'Playfair_Display',_serif] relative">
        <span className="relative inline-block bg-gradient-to-r from-[#AD9682] via-[#AEA394] to-[#AD9682] bg-clip-text text-transparent">
          StylishHim
        </span>

        {/* Subtle shimmer overlay */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#AEA394]/40 to-transparent bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_100%] opacity-60">
          StylishHim
        </span>
      </h1>

      {/* Soft underline accent */}
      <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#AD9682] via-[#AEA394] to-[#AD9682] transition-all duration-500 mx-auto rounded-full"></div>
    </div>
  </Link>
);


  // const AnimatedLogo = () => (
  //   <Link href="/" className="flex items-center group">
  //     <div className="relative mr-4">
  //       {/* Logo text with shimmer effect */}
  //       <h1 className="  text-[28px] md:text-[32px] font-bold tracking-wide [font-family:'Cormorant_Garamond',_'Playfair_Display',_serif] relative">
  //         <span className="relative inline-block bg-gradient-to-r from-[#2C2C2C] via-[#1a1a1a] to-[#2C2C2C] bg-clip-text text-transparent">
  //           StylishHim
  //         </span>
          
  //         {/* Animated shimmer overlay */}
  //         <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_100%] opacity-60">
  //           StylishHim
  //         </span>
  //       </h1>
        
  //       {/* Subtle underline accent */}
  //       <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#AD9682] via-[#E8B89A] to-[#AD9682] transition-all duration-500 mx-auto"></div>
  //     </div>
  //   </Link>
  // );

  const Icons = (
    <div className="flex items-center space-x-3">
      <Link
        href="/"
        className="p-2 text-black hover:text-[#AD9682] transition-colors"
      >
        <User className="h-5 w-5" />
      </Link>
     <button
  onClick={() => setIsCartOpen(true)}
  className="relative p-2 text-black hover:text-[#AD9682] transition-colors"
>
  <ShoppingBag className="h-5 w-5" />
  <span className="absolute -top-1 -right-1 bg-[#AD9682] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
    {totalQuantity}
  </span>
</button>

      <button
        className="p-2 text-black md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  );

 

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Raleway:wght@300;400;500;600&family=Lato:wght@300;400;700&family=Italiana&display=swap');
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

       <nav className="bg-[#FFFFFF]  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile */}
          <div className="flex md:hidden justify-between items-center h-14">
            <AnimatedLogo />
            {Icons}
          </div>
          <div className="flex md:hidden mb-4 w-full">
            <SearchBar />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex justify-between items-center h-16">
            <AnimatedLogo />
            <div className="flex items-center space-x-8">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[14px] font-[500] text-black hover:text-[#AD9682] transition-colors [font-family:'Raleway',_'Lato',_sans-serif]"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex-1 max-w-md mx-8"> <SearchBar /></div>
            {Icons}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[14px] font-[500] block px-3 py-2 text-black hover:bg-gray-100 rounded [font-family:'Raleway',_'Lato',_sans-serif] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav> 
    </>
  );
};

export default NavBar;