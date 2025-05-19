import React, { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-green-100 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">🌿 Garden Hub</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="hover:text-green-700 font-medium transition">
            Home
          </a>
          <a href="#" className="hover:text-green-700 font-medium transition">
            Share a Tip
          </a>
          <a href="#" className="hover:text-green-700 font-medium transition">
            Explore Gardeners
          </a>
          <a href="#" className="hover:text-green-700 font-medium transition">
            My Tips
          </a>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Login
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-700 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-green-50 shadow">
          <a href="#" className="block text-green-700 font-medium">
            Home
          </a>
          <a href="#" className="block text-green-700 font-medium">
            Share a Tip
          </a>
          <a href="#" className="block text-green-700 font-medium">
            Explore Gardeners
          </a>
          <a href="#" className="block text-green-700 font-medium">
            My Tips
          </a>
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Login
          </button>
        </nav>
      )}
    </header>
  );
};
