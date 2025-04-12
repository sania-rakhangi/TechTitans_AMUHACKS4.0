import React, { useState } from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ languages, selectedLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLanguageSelect = (lang) => {
    onLanguageChange(lang);
    setIsOpen(false);
  };
  
  return (
    <div className="language-selector">
      <button className="language-button" onClick={toggleDropdown}>
        <span>{selectedLanguage}</span>
        <span className="dropdown-arrow">▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map(lang => (
            <div
              key={lang}
              className={`language-option ${selectedLanguage === lang ? 'selected' : ''}`}
              onClick={() => handleLanguageSelect(lang)}
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;