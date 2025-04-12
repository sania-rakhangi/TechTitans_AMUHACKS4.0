import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, BookOpen, Award, User, Settings } from 'lucide-react';

const Sidebar = ({ user }) => {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col h-full">
      <div className="p-6 flex flex-col items-center">
        <div className="relative">
          <img 
            src={`/api/placeholder/96/96`} 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-2 border-yellow-400 object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 border-white">
            {user.level}
          </div>
        </div>
        <h2 className="text-lg font-semibold mt-2">{user.name}</h2>
        <p className="text-gray-500 text-sm">Level {user.level} {user.title}</p>
      </div>

      <nav className="flex-1 px-4 py-3">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center py-3 px-4 rounded-md mb-1 ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <Grid className="mr-3 h-5 w-5" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink 
          to="/subjects" 
          className={({ isActive }) => 
            `flex items-center py-3 px-4 rounded-md mb-1 ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <BookOpen className="mr-3 h-5 w-5" />
          <span>Subjects</span>
        </NavLink>

        <NavLink 
          to="/badges" 
          className={({ isActive }) => 
            `flex items-center py-3 px-4 rounded-md mb-1 ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <Award className="mr-3 h-5 w-5" />
          <span>Badges</span>
        </NavLink>

        <NavLink 
          to="/profile" 
          className={({ isActive }) => 
            `flex items-center py-3 px-4 rounded-md mb-1 ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <User className="mr-3 h-5 w-5" />
          <span>Profile</span>
        </NavLink>

        <NavLink 
          to="/settings" 
          className={({ isActive }) => 
            `flex items-center py-3 px-4 rounded-md mb-1 ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <Settings className="mr-3 h-5 w-5" />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="mt-auto p-4 text-center text-xs text-gray-500">
        <p>GaonLearn v1.0</p>
        <p>Learn • Play • Grow</p>
      </div>
    </div>
  );
};

export default Sidebar;