import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

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
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-gray-200 text-sm flex items-center gap-2">
            <FaEnvelope /> hello@gardenhub.com
          </p>
          <p className="text-gray-400 text-sm mt-1">&copy; 2025 Garden Hub</p>
        </div>

        {/* Terms & Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:underline hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links & Theme Toggle */}
        <div className="flex flex-col gap-4 md:items-end">
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-outline w-full md:w-auto mt-4 md:mt-0"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      </div>
    </footer>
  );
};
