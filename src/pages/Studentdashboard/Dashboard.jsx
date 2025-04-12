import React from 'react';
import { Play, CheckCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

// We'll use a simplified approach rather than importing the full components
// Import only what's needed for the dashboard view
const BadgeItem = ({ name, type, earned }) => {
  const badgeColors = {
    math: 'bg-blue-100 text-blue-600',
    science: 'bg-green-100 text-green-600',
    language: 'bg-purple-100 text-purple-600',
    streak: 'bg-amber-100 text-amber-600',
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-1 ${earned ? badgeColors[type] : 'bg-gray-100 text-gray-400'}`}>
        {type === 'math' && '🧮'}
        {type === 'science' && '🔬'}
        {type === 'language' && '📚'}
        {type === 'streak' && '🔥'}
      </div>
      <span className="text-xs text-center text-gray-600 truncate w-full">{name}</span>
    </div>
  );
};

const SubjectPreview = ({ title, description, progress, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-gray-700">{title}</h3>
        <span className="text-sm text-gray-500">{progress}% Complete</span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

const Dashboard = ({ user }) => {
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Sample subject data for display in the dashboard
  const featuredSubjects = [
    {
      id: 1,
      title: 'Addition & Subtraction',
      description: 'Learn basic addition and subtraction with fun examples',
      progress: 100,
      icon: '➕'
    },
    {
      id: 2,
      title: 'Multiplication Basics',
      description: 'Start your multiplication journey with simple examples',
      progress: 75,
      icon: '✖️'
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-amber-50 p-4 rounded-xl mb-6 flex items-center justify-between">
        <span className="font-medium text-gray-700">You're on fire today! 🔥</span>
      </div>
      
      <div className="mb-4">
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-gray-600">Level {user.level} Progress</span>
            <span className="text-sm">{user.progress.xp}/{user.progress.totalXp} XP</span>
          </div>
          <ProgressBar 
            progress={user.progress.xp / user.progress.totalXp * 100}
            markers={[25, 50, 75, 100]}
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Your Subjects</h2>
        <Link to="/student-dashboard/subjects" className="text-blue-500 text-sm hover:underline">
          View All
        </Link>
      </div>
      
      {/* Preview of subjects */}
      <div className="mb-8">
        {featuredSubjects.map(subject => (
          <SubjectPreview 
            key={subject.id}
            title={subject.title}
            description={subject.description}
            progress={subject.progress}
            icon={subject.icon}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-700">Your Learning Streak</h3>
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm flex items-center">
              <span className="mr-1">🔥</span> {user.streak} days
            </span>
          </div>
          
          <div className="flex justify-between">
            {weekdays.map((day, i) => (
              <div key={day} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
                  i < 4 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  <span className="text-lg">🔥</span>
                </div>
                <span className="text-xs text-gray-500">{day}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-700">Recent Badges</h3>
            <Link to="/student-dashboard/badges" className="text-blue-500 text-sm hover:underline">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {user.recentBadges.map(badge => (
              <BadgeItem
                key={badge.id}
                name={badge.name}
                type={badge.type}
                earned={badge.earned}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;