import React, { useState } from 'react';
import { FaBell, FaVolumeUp, FaMoon, FaGlobe, FaFont, FaMobile, FaMicrophone, FaEye, FaEyeSlash } from 'react-icons/fa';

const StudentSetting = ({ user, setUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSettingToggle = (setting) => {
    setUser(prevUser => ({
      ...prevUser,
      settings: {
        ...prevUser.settings,
        [setting]: !prevUser.settings[setting]
      }
    }));
  };
  
  const handleLanguageChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      settings: {
        ...prevUser.settings,
        language: e.target.value
      }
    }));
  };
  
  const handleTextSizeChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      settings: {
        ...prevUser.settings,
        textSize: e.target.value
      }
    }));
  };
  
  const handleNameChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      name: e.target.value
    }));
  };
  
  const handleParentEmailChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      accountInfo: {
        ...prevUser.accountInfo,
        email: e.target.value
      }
    }));
  };
  
  const handleParentPhoneChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      accountInfo: {
        ...prevUser.accountInfo,
        phone: e.target.value
      }
    }));
  };
  
  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Here you would typically send the updated user data to your backend
    alert('Changes saved successfully!');
  };
  
  const handleDownloadData = () => {
    // Logic to download learning data
    alert('Downloading your learning data...');
  };
  
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* App Settings Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">App Settings</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaBell className="text-gray-600" />
                <span className="text-gray-600">Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={user.settings.notifications}
                  onChange={() => handleSettingToggle('notifications')}
                />
                <div className={`w-11 h-6 rounded-full peer ${user.settings.notifications ? 'bg-green-200' : 'bg-gray-200'} 
                  after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 
                  after:transition-all ${user.settings.notifications ? 'after:translate-x-5 after:bg-green-500' : ''}`}></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaVolumeUp className="text-gray-600" />
                <span className="text-gray-600">Sound Effects</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={user.settings.soundEffects}
                  onChange={() => handleSettingToggle('soundEffects')}
                />
                <div className={`w-11 h-6 rounded-full peer ${user.settings.soundEffects ? 'bg-green-200' : 'bg-gray-200'} 
                  after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 
                  after:transition-all ${user.settings.soundEffects ? 'after:translate-x-5 after:bg-green-500' : ''}`}></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaMoon className="text-gray-600" />
                <span className="text-gray-600">Dark Mode</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={user.settings.darkMode}
                  onChange={() => handleSettingToggle('darkMode')}
                />
                <div className={`w-11 h-6 rounded-full peer ${user.settings.darkMode ? 'bg-green-200' : 'bg-gray-200'} 
                  after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 
                  after:transition-all ${user.settings.darkMode ? 'after:translate-x-5 after:bg-green-500' : ''}`}></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaGlobe className="text-gray-600" />
                <span className="text-gray-600">Language</span>
              </div>
              <select 
                className="bg-gray-50 border border-gray-300 text-gray-700 rounded-md px-3 py-1.5 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={user.settings.language}
                onChange={handleLanguageChange}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaFont className="text-gray-600" />
                <span className="text-gray-600">Text Size</span>
              </div>
              <select 
                className="bg-gray-50 border border-gray-300 text-gray-700 rounded-md px-3 py-1.5 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={user.settings.textSize}
                onChange={handleTextSizeChange}
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaMobile className="text-gray-600" />
                <span className="text-gray-600">Offline Mode</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={user.settings.offlineMode}
                  onChange={() => handleSettingToggle('offlineMode')}
                />
                <div className={`w-11 h-6 rounded-full peer ${user.settings.offlineMode ? 'bg-green-200' : 'bg-gray-200'} 
                  after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 
                  after:transition-all ${user.settings.offlineMode ? 'after:translate-x-5 after:bg-green-500' : ''}`}></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaMicrophone className="text-gray-600" />
                <span className="text-gray-600">Voice Assistant</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={user.settings.voiceAssistant}
                  onChange={() => handleSettingToggle('voiceAssistant')}
                />
                <div className={`w-11 h-6 rounded-full peer ${user.settings.voiceAssistant ? 'bg-green-200' : 'bg-gray-200'} 
                  after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 
                  after:transition-all ${user.settings.voiceAssistant ? 'after:translate-x-5 after:bg-green-500' : ''}`}></div>
              </label>
            </div>
          </div>
        </div>
        
        {/* Account Settings Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Account Settings</h2>
          
          <form onSubmit={handleSaveChanges} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.name}
                onChange={handleNameChange}
              />
            </div>
            
            <div>
              <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-500 mb-1">Parent/Guardian Email</label>
              <input 
                type="email" 
                id="parentEmail" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.accountInfo.email}
                onChange={handleParentEmailChange}
              />
            </div>
            
            <div>
              <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-500 mb-1">Parent/Guardian Phone</label>
              <input 
                type="tel" 
                id="parentPhone" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.accountInfo.phone}
                onChange={handleParentPhoneChange}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-500 mb-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="••••••••"
                  readOnly
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full flex justify-center items-center py-2 px-4 bg-green-200 text-green-800 rounded-md hover:bg-green-300 transition duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h1a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h1v5.586l-1.293-1.293z" />
              </svg>
              Save Changes
            </button>
          </form>
          
          {/* Data Management Section */}
          <div className="mt-8">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Data Management</h2>
            <button 
              onClick={handleDownloadData}
              className="w-full bg-blue-200 text-blue-800 py-2 px-4 rounded-md hover:bg-blue-300 transition duration-200"
            >
              Download My Learning Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSetting;