import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Lessons from './Lessons';
import { 
  Home, 
  BookOpen, 
  Globe, 
  Trophy, 
  BookText, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const location = useLocation();
  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", emoji: "🏠", path: "/" },
    { icon: <BookOpen className="w-5 h-5" />, label: "My Lessons", emoji: "📚", path: "/lessons" },
    { icon: <Globe className="w-5 h-5" />, label: "Teach Your Town", emoji: "🌍", path: "/teach" },
    { icon: <Trophy className="w-5 h-5" />, label: "Leaderboard", emoji: "🏆", path: "/leaderboard" },
    { icon: <BookText className="w-5 h-5" />, label: "Stories", emoji: "📖", path: "/stories" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings", emoji: "⚙️", path: "/settings" },
  ];

  return (
    <aside 
      className={`bg-[#f7f3e3] h-screen transition-all duration-300 border-r border-gray-200 relative ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <h1 className="text-xl font-bold text-slate-700">Community</h1>
        )}
        <button
          onClick={toggleSidebar}
          className="rounded-full p-1 hover:bg-amber-100 text-slate-700"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      <div className="py-3">
        <nav className="space-y-1">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center px-4 py-3 text-slate-700 hover:bg-amber-100 ${
                  isActive ? 'bg-amber-100 font-medium' : ''
                } ${collapsed ? 'justify-center' : 'justify-between'}`}
              >
                {collapsed ? (
                  <span className="flex-shrink-0">{item.icon}</span>
                ) : (
                  <>
                    <div className="flex items-center">
                      <span className="flex-shrink-0 mr-3">{item.icon}</span>
                      <span className="flex-grow">{item.label}</span>
                    </div>
                    <span>{item.emoji}</span>
                  </>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {!collapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-amber-200 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-lg">👨‍🏫</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">Tutor Name</p>
              <p className="text-xs text-slate-500">Expert Educator</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;