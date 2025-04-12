import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ activePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  
  // Close menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownOpen && !event.target.closest('.language-selector')) {
        setLangDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langDropdownOpen]);

  const navItems = [
    { name: 'Homepage', path: '/' },
    { name: 'Student Dashboard', path: '/student-dashboard' },
    { name: 'Teacher Portal', path: '/teacher-portal' },
    { name: 'Family Learning', path: '/family-learning' },
    { name: 'Community', path: '/community' }
  ];

  const languages = ['English', 'Hindi', 'Marathi', 'Tamil', 'Telugu', 'Kannada'];
  
  const increaseFontSize = () => document.body.classList.add('font-large');
  const decreaseFontSize = () => document.body.classList.add('font-small');
  const toggleHighContrast = () => document.body.classList.toggle('high-contrast');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">GaonLearn</Link>
        </div>
        
        <div className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={`nav-content ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            {navItems.map(item => (
              <li 
                key={item.name} 
                className={`nav-item ${activePage === item.name ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          
          <div className="auth-links">
            <Link to="/login" className="nav-link login-link">Login</Link>
            <span className="divider">|</span>
            <Link to="/signup" className="nav-link signup-link">Sign Up</Link>
          </div>
        </div>
        
        <div className="language-selector">
          <button 
            className="language-dropdown-button"
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
          >
            <span className="selected-language">{language}</span>
            <span className="dropdown-arrow">{langDropdownOpen ? '▲' : '▼'}</span>
          </button>
          
          {langDropdownOpen && (
            <ul className="language-dropdown-menu">
              {languages.map(lang => (
                <li 
                  key={lang}
                  className={`language-option ${lang === language ? 'active' : ''}`}
                  onClick={() => {
                    setLanguage(lang);
                    setLangDropdownOpen(false);
                  }}
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;