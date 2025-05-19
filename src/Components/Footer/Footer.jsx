import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <p>&copy; 2025 Garden Hub</p>
          <p className="text-sm">hello@gardenhub.com</p>
        </div>
        <div className="flex space-x-4 text-sm mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};
