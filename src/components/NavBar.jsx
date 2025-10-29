"use client";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Heart } from "lucide-react";
import Link from "next/link";
import SearchBar from "./searchbar/SearchBar";
import WishlistDrawer from "./WishlistDrawer";
import { useSelector } from "react-redux";
import CartDrawer from "./CartDrawer";
import { useCartDrawer } from "@/app/context/CartContext";
import ColorPicker from "./ColorPicker";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCartOpen, setIsCartOpen } = useCartDrawer();
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Read user info from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser?.role) {
            setUserRole(parsedUser.role);
            setIsLoggedIn(true);
          }
        } catch (err) {
          console.error("Error parsing user from localStorage:", err);
        }
      }
    }
  }, []);

  // ✅ Default routes (always visible)
  const defaultNavItems = [
    { href: "/productpage", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/fashion", label: "StylishHim Fashion" },
    { href: "/contactus", label: "Contact Us" },
    { href: "/helpcenter", label: "Help" },
  ];

  // ✅ User-only routes (additionally visible when user logged in)
  const userNavItems = [
    { href: "/profile", label: "Profile" },
    { href: "/orders", label: "Orders" },
    // { href: "/orders", label: "Order History" },
  ];

  // ✅ Admin-only routes (replace all)
  const adminNavItems = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/addproducts", label: "Add Products" },
    { href: "/admin/allusers", label: "All Users" },
    { href: "/admin/allproducts", label: "All Products" },
      { href: "/admin/alltransation", label: "All Transation" },
  ];

  // ✅ Combine routes dynamically
  let navItems = [];

  if (isLoggedIn && userRole === "admin") {
    // Admin sees only admin routes
    navItems = adminNavItems;
  } else if (isLoggedIn && userRole === "user") {
    // User sees default + user routes (without Sign In)
    navItems = [...defaultNavItems, ...userNavItems];
  } else {
    // Guest sees default + sign in
    navItems = [...defaultNavItems, { href: "/signin", label: "Sign In" }];
  }

  // Redux selectors
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistItems = useSelector((state) => state.favourite.items);
  const wishlistCount = wishlistItems.length;

  // ✅ Logo animation
  const AnimatedLogo = () => (
    <Link href="/" className="flex items-center group mr-2">
      <div className="relative">
        <h1 className="text-[28px] md:text-[36px] font-bold tracking-wider [font-family:'Playfair_Display',_'Cormorant_Garamond',_serif] relative">
          <span className="relative inline-block bg-gradient-to-r from-[#804003] via-[#A0531F] to-[#C4762F] bg-clip-text text-transparent animate-[gradientShift_4s_ease-in-out_infinite]">
            StylishHim
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A574]/70 to-transparent bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_100%]">
            StylishHim
          </span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm bg-gradient-to-r from-[#804003] via-[#A0531F] to-[#C4762F] bg-clip-text text-transparent">
            StylishHim
          </span>
        </h1>
        <div className="absolute -bottom-1 left-0 right-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#804003] via-[#C4762F] to-[#804003] transition-all duration-700 mx-auto rounded-full shadow-[0_0_10px_rgba(128,64,3,0.5)]"></div>
      </div>
    </Link>
  );

  // ✅ Icons (Cart + Wishlist + ColorPicker)
  const Icons = (
    <div className="flex items-center space-x-0 md:space-x-3">
      <ColorPicker />
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative p-2 text-[#2C2C2C] hover:text-[#804003] transition-all duration-300 transform hover:scale-110"
      >
        <ShoppingBag className="h-5 w-5" />
        {totalQuantity > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#804003] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-lg animate-[bounce_1s_ease-in-out_infinite]">
            {totalQuantity}
          </span>
        )}
      </button>
      <button
        onClick={() => setIsWishlistOpen(true)}
        className="relative p-2 text-[#2C2C2C] hover:text-[#804003] transition-all duration-300 transform hover:scale-110"
      >
        <Heart className="h-5 w-5" />
        {wishlistCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#804003] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-lg">
            {wishlistCount}
          </span>
        )}
      </button>
    </div>
  );

  return (
    <>
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
      `}</style>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />

      <nav className="bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ✅ Mobile Header */}
          <div className="flex md:hidden justify-between items-center h-14">
            <div className="flex items-center gap-2">
              <button
                className="p-2 text-[#2C2C2C] hover:text-[#804003] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <AnimatedLogo />
            </div>
            {Icons}
          </div>
          <div className="flex md:hidden mb-4 w-full">
            <SearchBar />
          </div>

          {/* ✅ Desktop Navbar */}
          <div className="hidden md:flex justify-between items-center h-16">
            <AnimatedLogo />
            <div className="flex items-center space-x-8">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[14px] font-[500] text-[#2C2C2C] hover:text-[#804003] transition-all duration-300 [font-family:'Raleway',_'Lato',_sans-serif] relative group/link"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#804003] transition-all duration-300 group-hover/link:w-full"></span>
                </Link>
              ))}
            </div>
            <div className="flex-1 max-w-md mx-8">
              <SearchBar />
            </div>
            {Icons}
          </div>

          {/* ✅ Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-[slideDown_0.3s_ease-out]">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[14px] font-[500] block px-3 py-2 text-[#2C2C2C] hover:text-[#804003] hover:bg-[#FFF8F0] rounded [font-family:'Raleway',_'Lato',_sans-serif] transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;
