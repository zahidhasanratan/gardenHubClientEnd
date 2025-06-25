import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaLeaf,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <footer className="bg-green-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-white text-xl font-bold mb-3"
          >
            <FaLeaf className="text-green-300 text-2xl" />
            Garden Hub
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed">
            Join a thriving community of gardeners who share tips, ideas, and
            support eco-friendly practices around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/exploreGardeners" className="hover:underline">
                Explore Gardeners
              </Link>
            </li>
            <li>
              <Link to="/BrowseTips" className="hover:underline">
                Browse Tips
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact - Enhanced */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <div className="space-y-3 text-sm text-gray-200">
            <p className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-green-300" />
              <span>support@gardenhub.com</span>
            </p>
            <p className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-green-300" />
              <span>+1 (555) 123-4567</span>
            </p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-green-300" />
              <span>123 Green Street, Eco City, Earth 45678</span>
            </p>
          </div>
        </div>

        {/* Social & Theme */}
        <div className="flex flex-col items-start md:items-end justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-green-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400 border-t border-green-700 pt-4">
        &copy; 2025 Garden Hub — All Rights Reserved
      </div>
    </footer>
  );
};
