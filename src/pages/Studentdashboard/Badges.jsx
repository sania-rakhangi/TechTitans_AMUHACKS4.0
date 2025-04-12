import React, { useState } from 'react';
import { FaMedal, FaStar, FaFire, FaBook, FaAtom, FaCalculator, FaLanguage, FaTrophy } from 'react-icons/fa';

const Badges = ({ user }) => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample badge data - you would replace this with your actual badge data
  const allBadges = [
    { id: 1, name: 'Math Whiz', description: 'Completed 10 math lessons with perfect scores', earned: true, progress: 100, type: 'math', icon: <FaCalculator className="text-yellow-500" /> },
    { id: 2, name: 'Science Pro', description: 'Finished all science modules in Level 4', earned: true, progress: 100, type: 'science', icon: <FaAtom className="text-blue-500" /> },
    { id: 3, name: '7 Day Streak', description: 'Logged in for 7 consecutive days', earned: false, progress: 60, type: 'streak', icon: <FaFire className="text-orange-500" /> },
    { id: 4, name: 'Bookworm', description: 'Read 15 digital stories in the library', earned: true, progress: 100, type: 'language', icon: <FaBook className="text-green-500" /> },
    { id: 5, name: 'Quiz Master', description: 'Scored 100% in 5 consecutive quizzes', earned: false, progress: 40, type: 'achievement', icon: <FaStar className="text-purple-500" /> },
    { id: 6, name: 'Language Explorer', description: 'Completed all vocabulary exercises in Level 5', earned: true, progress: 100, type: 'language', icon: <FaLanguage className="text-indigo-500" /> },
    { id: 7, name: 'Perfect Attendance', description: 'Completed daily activities for 30 days', earned: false, progress: 20, type: 'streak', icon: <FaFire className="text-red-500" /> },
    { id: 8, name: 'Super Scholar', description: 'Completed all subjects in your grade level', earned: false, progress: 75, type: 'achievement', icon: <FaTrophy className="text-amber-500" /> }
  ];
  
  // Filter badges based on activeTab
  const filteredBadges = activeTab === 'all' 
    ? allBadges 
    : activeTab === 'earned' 
      ? allBadges.filter(badge => badge.earned) 
      : allBadges.filter(badge => !badge.earned && badge.progress > 0);
  
  // Group badges by type for the dashboard view
  const badgeTypes = {
    math: { name: 'Mathematics', icon: <FaCalculator className="text-yellow-500" /> },
    science: { name: 'Science', icon: <FaAtom className="text-blue-500" /> },
    language: { name: 'Language', icon: <FaLanguage className="text-indigo-500" /> },
    streak: { name: 'Streaks', icon: <FaFire className="text-orange-500" /> },
    achievement: { name: 'Achievements', icon: <FaTrophy className="text-amber-500" /> }
  };
  
  const groupedBadges = {};
  allBadges.forEach(badge => {
    if (!groupedBadges[badge.type]) {
      groupedBadges[badge.type] = [];
    }
    groupedBadges[badge.type].push(badge);
  });
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">My Badges</h1>
        <div className="bg-white rounded-full shadow px-2 py-1 flex space-x-1">
          <button 
            className={`px-4 py-1 rounded-full ${activeTab === 'all' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-1 rounded-full ${activeTab === 'earned' ? 'bg-green-100 text-green-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('earned')}
          >
            Earned
          </button>
          <button 
            className={`px-4 py-1 rounded-full ${activeTab === 'progress' ? 'bg-yellow-100 text-yellow-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('progress')}
          >
            In Progress
          </button>
        </div>
      </div>
      
      {/* Badge Stats */}
      <div className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">Total Badges</h3>
            <p className="text-2xl font-bold text-blue-600">{allBadges.length}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">Badges Earned</h3>
            <p className="text-2xl font-bold text-green-600">{allBadges.filter(b => b.earned).length}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">In Progress</h3>
            <p className="text-2xl font-bold text-yellow-600">{allBadges.filter(b => !b.earned && b.progress > 0).length}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">Completion Rate</h3>
            <p className="text-2xl font-bold text-purple-600">
              {Math.round((allBadges.filter(b => b.earned).length / allBadges.length) * 100)}%
            </p>
          </div>
        </div>
      </div>
      
      {/* Badge Grid */}
      {activeTab !== 'all' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBadges.map(badge => (
            <div key={badge.id} className={`bg-white rounded-lg shadow overflow-hidden ${badge.earned ? 'border-2 border-green-200' : ''}`}>
              <div className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-full">
                    {badge.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">{badge.name}</h3>
                    <p className="text-sm text-gray-500">{badge.description}</p>
                  </div>
                </div>
                {!badge.earned && (
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${badge.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-right mt-1 text-gray-500">{badge.progress}% complete</p>
                  </div>
                )}
              </div>
              {badge.earned && (
                <div className="bg-green-100 py-2 px-4 text-center">
                  <span className="text-sm text-green-700 flex items-center justify-center">
                    <FaMedal className="mr-1" /> Earned!
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        // Dashboard view - organized by category
        <div className="space-y-6">
          {Object.keys(groupedBadges).map(type => (
            <div key={type} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center mb-3">
                <div className="h-8 w-8 flex items-center justify-center bg-gray-100 rounded-full mr-2">
                  {badgeTypes[type].icon}
                </div>
                <h2 className="text-lg font-semibold">{badgeTypes[type].name}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {groupedBadges[type].map(badge => (
                  <div key={badge.id} className={`bg-gray-50 rounded-lg p-3 ${badge.earned ? 'border-l-4 border-green-400' : 'border-l-4 border-gray-200'}`}>
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full shadow-sm mr-3">
                        {badge.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700">{badge.name}</h3>
                        {badge.earned ? (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Earned</span>
                        ) : (
                          <div className="w-24 bg-gray-200 rounded-full h-1.5 mt-1">
                            <div 
                              className="bg-blue-600 h-1.5 rounded-full" 
                              style={{ width: `${badge.progress}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Badges;