import { useState } from 'react';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    'New Launches',
    'Kits',
    'Blog',
    'Track Order',
    'Reviews',
    'Contact Us'
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-3 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-lg lg:text-3xl font-bold text-eco-green-600">
                <span className="hidden sm:inline">Supermagic Enterprises</span>
                <span className="sm:hidden">Supermagic</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-eco-green-600 transition-colors rounded-md"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Search */}
              <button className="p-2 text-gray-600 hover:text-eco-green-600 hover:bg-eco-green-50 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Account - Desktop Only */}
              <button className="hidden lg:block p-2 text-gray-600 hover:text-eco-green-600 hover:bg-eco-green-50 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Cart */}
              <button className="p-2 text-gray-600 hover:text-eco-green-600 hover:bg-eco-green-50 rounded-full transition-colors relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute top-0 right-0 w-4 h-4 bg-eco-green-500 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-eco-green-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        title="Menu"
      >
        <div className="flex flex-col space-y-2">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="px-3 py-3 text-base font-medium text-gray-700 hover:text-eco-green-600 hover:bg-eco-green-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </MobileDrawer>
    </>
  );
};

export default Navbar;
