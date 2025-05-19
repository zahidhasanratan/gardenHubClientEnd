import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import React, { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-green-100 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700 flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-green-800 transition"
          >
            <FaLeaf className="text-green-600 text-3xl" />
            Garden Hub
          </Link>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-green-700 font-medium transition">
            Home
          </Link>
          <Link
            to="/share"
            className="hover:text-green-700 font-medium transition"
          >
            Share a Tip
          </Link>
          <Link
            to="/explore"
            className="hover:text-green-700 font-medium transition"
          >
            Explore Gardeners
          </Link>
          <Link
            to="/my-tips"
            className="hover:text-green-700 font-medium transition"
          >
            My Tips
          </Link>
          <Link to="/login">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Login
            </button>
          </Link>
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
          <Link to="/" className="block text-green-700 font-medium">
            Home
          </Link>
          <Link to="/share" className="block text-green-700 font-medium">
            Share a Tip
          </Link>
          <Link to="/explore" className="block text-green-700 font-medium">
            Explore Gardeners
          </Link>
          <Link to="/my-tips" className="block text-green-700 font-medium">
            My Tips
          </Link>
          <Link to="/login">
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Login
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};
