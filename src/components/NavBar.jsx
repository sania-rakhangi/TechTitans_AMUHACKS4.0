import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ activePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownOpen && !event.target.closest(".language-selector")) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langDropdownOpen]);

  const navItems = [
    { name: "Homepage", path: "/" },
    { name: "Student Dashboard", path: "/student-dashboard" },
    { name: "Teacher Portal", path: "/teacher-portal" },
    { name: "Family Learning", path: "/family-learning" },
    { name: "Community", path: "/community" },
  ];

  const languages = [
    "English",
    "Hindi",
    "Marathi",
    "Tamil",
    "Telugu",
    "Kannada",
  ];

  return (
    <nav className="bg-slate-800 text-white shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-bold font-comfortaa">
          <Link
            to="/"
            className="text-white hover:text-pink-300 transition-colors"
          >
            GaonLearn
          </Link>
        </div>

        {/* Center: Nav Items (hidden on mobile) */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`relative transition-colors ${
                  activePage === item.name
                    ? "text-pink-300 font-semibold"
                    : "text-white"
                } hover:text-pink-300`}
              >
                {item.name}
                {activePage === item.name && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-300"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Language Selector + Auth Buttons + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative language-selector">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1 hover:text-pink-300 cursor-pointer"
            >
              <span>{language}</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  langDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {langDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white text-slate-800 rounded shadow-lg z-50">
                {languages.map((lang) => (
                  <li key={lang}>
                    <button
                      onClick={() => {
                        setLanguage(lang);
                        setLangDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-pink-100 cursor-pointer"
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-2">
            <Link
              to="/login"
              className="px-3 py-1 bg-accent-orange hover:bg-accent-orange text-white rounded cursor-pointer transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-3 py-1 bg-white text-accent-orange hover:bg-pink-100 rounded cursor-pointer transition-colors"
            >
              Signup
            </Link>
          </div>

          {/* Hamburger Menu (for mobile, optional) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 text-white px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2 ${
                activePage === item.name
                  ? "text-pink-300 font-semibold"
                  : "text-white"
              } hover:text-pink-300 cursor-pointer`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="flex space-x-2 mt-2">
            <Link
              to="/login"
              className="flex-1 px-3 py-1 bg-accent-orange hover:bg-accent-orange text-white rounded cursor-pointer text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="flex-1 px-3 py-1 bg-white text-accent-orange hover:bg-pink-100 rounded cursor-pointer text-center"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
