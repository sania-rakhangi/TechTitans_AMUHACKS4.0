import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Subjects from './Subjects';
import Profile from './Profile';
import StudentSetting from './StudentSetting';
import Badges from './Badges';
import ChatSupport from './ChatSupport';

const StudentPortal = () => {
  const [user, setUser] = useState({
    name: 'Tara Singh',
    level: 5,
    title: 'Explorer',
    grade: '7th',
    village: 'Chandrapur Village',
    age: 12,
    joined: 'March 15, 2024',
    badges: 7,
    learningHours: 24,
    daysActive: 18,
    perfectScores: 5,
    progress: {
      xp: 450,
      totalXp: 1000,
      subjects: {
        mathematics: 75,
        science: 42,
        language: 90
      }
    },
    streak: 4,
    recentBadges: [
      { id: 1, name: 'Math Whiz', earned: true, type: 'math' },
      { id: 2, name: 'Science Pro', earned: true, type: 'science' },
      { id: 3, name: '7 Day Streak', earned: false, type: 'streak' },
      { id: 4, name: 'Bookworm', earned: true, type: 'language' }
    ],
    settings: {
      notifications: true,
      soundEffects: true,
      darkMode: false,
      language: 'English',
      textSize: 'Medium',
      offlineMode: false,
      voiceAssistant: true
    },
    accountInfo: {
      email: 'parent@example.com',
      phone: '9876543210'
    }
  });

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <NavBar activePage="Student Dashboard" />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar user={user} />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/subjects" element={<Subjects user={user} />} />
            <Route path="/badges" element={<Badges user={user} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/settings" element={<StudentSetting user={user} setUser={setUser} />} />
            
          </Routes>
          <ChatSupport />
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;