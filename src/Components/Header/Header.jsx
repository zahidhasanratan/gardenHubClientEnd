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
        <nav className="hidden md:flex space-x-6 items-center text-green-700 font-medium">
          <Link to="/" className="hover:text-green-800 transition">
            Home
          </Link>
          <Link to="/explore" className="hover:text-green-800 transition">
            Explore Gardeners
          </Link>
          <Link to="/browse" className="hover:text-green-800 transition">
            Browse Tips
          </Link>
          <Link to="/share" className="hover:text-green-800 transition">
            Share a Garden Tip
          </Link>
          <Link to="/my-tips" className="hover:text-green-800 transition">
            My Tips
          </Link>
          <Link to="/login">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Login / SignUp
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
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-green-50 shadow text-green-700 font-medium">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/explore" className="block">
            Explore Gardeners
          </Link>
          <Link to="/browse" className="block">
            Browse Tips
          </Link>
          <Link to="/share" className="block">
            Share a Garden Tip
          </Link>
          <Link to="/my-tips" className="block">
            My Tips
          </Link>
          <Link to="/login">
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Login / SignUp
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};
