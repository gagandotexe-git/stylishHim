import React from 'react';

const WeFooter = () => {
  const productCategories = [
    'Premium Rice',
    'Pure Sugar',
    'Fresh Seafood',
    'Industrial Chemicals',
    'Shipping Services',
    'Cosmetics',
    'Fine Teas'
  ];

  const quickLinks = [
    'About Us',
    'Our Services',
    'Quality Assurance',
    'Global Network',
    'Sustainability',
    'Careers',
    'News & Updates'
  ];

const contactInfo = [
  { icon: '📧', text: 'ranjanmishra93@gmail.com' },
  { icon: '📞', text: '93117 84712' },
  { icon: '📞', text: 'Info@stylishhim.com' }
];


  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
               StylishHim Pvt Ltd.
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-white mt-2"></div>
            </div>
            <p className="text-blue-100 text-sm lg:text-base leading-relaxed mb-6">
              Your trusted partner in global commodity trading. We deliver quality products across rice, sugar, seafood, chemicals, and more with worldwide shipping excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">🔗</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-6">Our Products</h3>
            <ul className="space-y-3">
              {productCategories.map((product, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-blue-200 hover:text-white text-sm lg:text-base transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-blue-200 hover:text-white text-sm lg:text-base transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-lg mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </span>
                  <span className="text-blue-200 text-sm lg:text-base group-hover:text-white transition-colors duration-300">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-base font-semibold text-white mb-3">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 text-sm"
                />
                <button className="px-4 py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-medium text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-blue-200 text-sm text-center lg:text-left">
              © 2025 StylishHim Pvt Ltd. All rights reserved. | Trusted worldwide commodity trading since 2024.
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Cookie Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-white to-blue-400"></div>
    </footer>
  );
};

export default WeFooter;