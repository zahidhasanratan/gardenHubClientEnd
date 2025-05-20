import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const handleLogout = () => logout();

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

        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-green-700 font-medium transition">
            Home
          </Link>
          <Link
            to="/exploreGardeners"
            className="hover:text-green-700 font-medium transition"
          >
            Explore Gardeners
          </Link>
          <Link
            to="/BrowseTips"
            className="hover:text-green-700 font-medium transition"
          >
            Browse Tips
          </Link>
          {user && (
            <>
              <Link
                to="/ShareTip"
                className="hover:text-green-700 font-medium transition"
              >
                Share a Garden Tip
              </Link>
              <Link
                to="/mytips"
                className="hover:text-green-700 font-medium transition"
              >
                My Tips
              </Link>
            </>
          )}

          {!user ? (
            <Link to="/login">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Login/SignUp
              </button>
            </Link>
          ) : (
            <div className="relative">
              <img
                src={user.photoURL}
                alt="User"
                title={user.displayName}
                className="w-10 h-10 rounded-full cursor-pointer border border-green-500"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-50">
                  <div className="px-4 py-2 text-sm text-green-700 font-semibold border-b">
                    {user.displayName}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
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
          <Link
            to="/exploreGardeners"
            className="block text-green-700 font-medium"
          >
            Explore Gardeners
          </Link>
          <Link to="/BrowseTips" className="block text-green-700 font-medium">
            Browse Tips
          </Link>
          {user && (
            <>
              <Link to="/ShareTip" className="block text-green-700 font-medium">
                Share a Garden Tip
              </Link>
              <Link to="/mytips" className="block text-green-700 font-medium">
                My Tips
              </Link>
            </>
          )}
          {!user ? (
            <Link to="/login">
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                Login/SignUp
              </button>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </nav>
      )}
    </header>
  );
};
