import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [theme, setTheme] = useState("light");
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const handleLogout = () => logout();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="bg-base-200 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition"
          >
            <FaLeaf className="text-green-600 text-3xl" />
            Garden Hub
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center text-base-content">
          <Link to="/" className="hover:text-primary font-medium transition">
            Home
          </Link>
          <Link
            to="/exploreGardeners"
            className="hover:text-primary font-medium transition"
          >
            Explore Gardeners
          </Link>
          <Link
            to="/BrowseTips"
            className="hover:text-primary font-medium transition"
          >
            Browse Tips
          </Link>
          {user && (
            <>
              <Link
                to="/ShareTip"
                className="hover:text-primary font-medium transition"
              >
                Share a Garden Tip
              </Link>
              <Link
                to="/mytips"
                className="hover:text-primary font-medium transition"
              >
                My Tips
              </Link>
            </>
          )}

          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-outline"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

          {!user ? (
            <Link to="/login">
              <button className="btn btn-primary">Login/SignUp</button>
            </Link>
          ) : (
            <div className="relative">
              <img
                src={user.photoURL}
                alt="User"
                title={user.displayName}
                className="w-10 h-10 rounded-full cursor-pointer border border-primary"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-base-100 shadow-lg rounded-md overflow-hidden z-50">
                  <div className="px-4 py-2 text-sm font-semibold border-b text-primary">
                    {user.displayName}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error/10 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-outline"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            onClick={toggleMenu}
            className="text-primary text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-base-200 shadow text-base-content">
          <Link to="/" className="block hover:text-primary font-medium">
            Home
          </Link>
          <Link
            to="/exploreGardeners"
            className="block hover:text-primary font-medium"
          >
            Explore Gardeners
          </Link>
          <Link
            to="/BrowseTips"
            className="block hover:text-primary font-medium"
          >
            Browse Tips
          </Link>
          {user && (
            <>
              <Link
                to="/ShareTip"
                className="block hover:text-primary font-medium"
              >
                Share a Garden Tip
              </Link>
              <Link
                to="/mytips"
                className="block hover:text-primary font-medium"
              >
                My Tips
              </Link>
            </>
          )}

          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-outline w-full"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>

          {!user ? (
            <Link to="/login">
              <button className="btn btn-primary w-full">Login/SignUp</button>
            </Link>
          ) : (
            <button onClick={handleLogout} className="btn btn-error w-full">
              Logout
            </button>
          )}
        </nav>
      )}
    </header>
  );
};
