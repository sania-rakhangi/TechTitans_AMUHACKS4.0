import React from 'react';
import { Award, Clock, Calendar, Star } from 'lucide-react';
import ProgressBar from './ProgressBar';

const Profile = ({ user }) => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-blue-300 to-green-300 rounded-xl p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <img 
              src="src\assets\girl.png" 
              alt="Profile" 
              className="w-24 h-24 rounded-full border-2 border-white object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-yellow-400 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 border-white">
              {user.level}
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full">
              <div>
                <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
                <div className="text-sm text-gray-600 mb-2">Grade {user.grade} • {user.village}</div>
                <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                  <span className="bg-white bg-opacity-50 px-3 py-1 rounded-full text-xs">Level {user.level} Explorer</span>
                  <span className="bg-white bg-opacity-50 px-3 py-1 rounded-full text-xs flex items-center">
                    <Award size={12} className="mr-1" /> {user.badges} Badges
                  </span>
                </div>
              </div>
              
              <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-600">Level {user.level} Progress</span>
              <span className="text-sm">{user.progress.xp}/{user.progress.totalXp} XP</span>
            </div>
            <ProgressBar 
              progress={user.progress.xp / user.progress.totalXp * 100} 
              markers={[25, 50, 75, 100]} 
            />
            <div className="text-xs text-gray-600 mt-1">{user.progress.totalXp - user.progress.xp} XP needed for Level {user.level + 1}</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
            <span className="text-blue-500"><Award size={18} /></span>
            Student Information
          </h2>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Age</span>
              <span className="font-medium">{user.age} years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Grade</span>
              <span className="font-medium">{user.grade}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Village</span>
              <span className="font-medium">{user.village}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Joined</span>
              <span className="font-medium">{user.joined}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
            <span className="text-amber-500"><Award size={18} /></span>
            Learning Statistics
          </h2>
          
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-semibold text-gray-700">{user.badges}</div>
              <div className="text-xs text-gray-500">Badges Earned</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-gray-700">{user.learningHours}</div>
              <div className="text-xs text-gray-500">Learning Hours</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-gray-700">{user.daysActive}</div>
              <div className="text-xs text-gray-500">Days Active</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-gray-700">{user.perfectScores}</div>
              <div className="text-xs text-gray-500">Perfect Scores</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
            <span className="text-rose-500"><Award size={18} /></span>
            Learning Style
          </h2>
          
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Problem Solving</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Critical Thinking</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Visual Learning</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Teamwork</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-medium text-gray-700 mb-4">Subject Progress</h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Mathematics</span>
                <span className="text-sm">{user.progress.subjects.mathematics}% Complete</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-400 rounded-full" 
                  style={{ width: `${user.progress.subjects.mathematics}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Science</span>
                <span className="text-sm">{user.progress.subjects.science}% Complete</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-400 rounded-full" 
                  style={{ width: `${user.progress.subjects.science}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Language</span>
                <span className="text-sm">{user.progress.subjects.language}% Complete</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-400 rounded-full" 
                  style={{ width: `${user.progress.subjects.language}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;