import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Handle auth state
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      checkSession();
    });

    checkSession();

    return () => listener?.subscription?.unsubscribe?.();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    navigate("/");
  };

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
        {/* Logo */}
        <div className="text-2xl font-bold font-[Comfortaa]">
          <Link
            to="/"
            className="text-white hover:text-pink-300 transition-colors"
          >
            GaonLearn
          </Link>
        </div>

        {/* Center: Nav Items */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`relative transition-colors ${
                  location.pathname === item.path
                    ? "text-pink-300 font-semibold"
                    : "text-white"
                } hover:text-pink-300`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-300"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Language + Auth + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative language-selector">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1 hover:text-pink-300"
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
                      className="block w-full text-left px-4 py-2 hover:bg-pink-100"
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-2">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-pink-300 text-slate-800 rounded hover:bg-pink-400 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-3 py-1 border border-white rounded hover:bg-white hover:text-slate-800 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-1 bg-pink-300 text-slate-800 rounded hover:bg-pink-400 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Hamburger Icon */}
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 py-4 px-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-lg ${
                location.pathname === item.path
                  ? "text-pink-300 font-semibold"
                  : "text-white"
              } hover:text-pink-300 transition-colors`}
            >
              {item.name}
            </Link>
          ))}

          {/* Auth for Mobile */}
          <div className="pt-2 space-y-2">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="block text-white hover:text-pink-300 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-pink-300 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-pink-300 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
