import React, { useState } from "react";

const LanguageSelector = ({
  languages,
  selectedLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (lang) => {
    onLanguageChange(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        className="flex items-center border-2 border-primary-medium text-primary-dark px-4 py-2 rounded-full cursor-pointer text-base transition-all duration-300 hover:bg-black/5"
        onClick={toggleDropdown}
      >
        <span>{selectedLanguage}</span>
        <span className="ml-2 text-xs">▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white rounded-md mt-1 shadow-lg overflow-hidden">
          {languages.map((lang) => (
            <div
              key={lang}
              className={`px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-primary-light ${
                selectedLanguage === lang ? "bg-accent-yellow font-bold" : ""
              }`}
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
