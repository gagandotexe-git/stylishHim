"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const WeNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Update navItems with proper routes
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/pages/about' },
    { name: 'Contact', href: '/pages/contact' },
  ];

  return (
    <>
      {/* Main WeNavbar */}
      <nav className="bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-2 mr-3 shadow-md">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  StylishHim Pvt Ltd.
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-blue-100 hover:text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="text-blue-100 hover:text-white hover:bg-blue-700 p-2 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-blue-900 to-blue-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-blue-700">
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2 mr-3 shadow-md">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              StylishHim Pvt Ltd.
            </h2>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-blue-100 hover:text-white hover:bg-blue-700 p-2 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="px-6 py-8">
          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleSidebar}
                className="block text-blue-100 hover:text-white hover:bg-blue-700 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:shadow-lg border-l-4 border-transparent hover:border-blue-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-blue-800 bg-opacity-50 rounded-lg p-4 text-center">
            <p className="text-blue-200 text-sm">Welcome to StylishHim Pvt Ltd</p>
            <p className="text-blue-300 text-xs mt-1">Style • Fashion • Lifestyle</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeNavbar;