import React, { useState } from 'react';
import { Search, Play, CheckCircle, Lock } from 'lucide-react';
import LessonCard from './LessonCard';

const Subjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Math', 'Science', 'Language'];
  
  const lessons = [
    {
      id: 1,
      title: 'Addition & Subtraction',
      description: 'Learn basic addition and subtraction with fun examples',
      duration: 15,
      progress: 100,
      status: 'complete',
      subject: 'math'
    },
    {
      id: 2,
      title: 'Multiplication Basics',
      description: 'Start your multiplication journey with simple examples',
      duration: 20,
      progress: 75,
      status: 'in-progress',
      subject: 'math'
    },
    {
      id: 3,
      title: 'Division Made Easy',
      description: 'Master division with step-by-step guidance',
      duration: 25,
      progress: 0,
      status: 'locked',
      subject: 'math'
    },
    {
      id: 4,
      title: 'Plants & Growth',
      description: 'Discover how plants grow and make their own food',
      duration: 20,
      progress: 100,
      status: 'complete',
      subject: 'science'
    },
    {
      id: 5,
      title: 'Animal Kingdom',
      description: 'Explore different types of animals and their habitats',
      duration: 30,
      progress: 20,
      status: 'in-progress',
      subject: 'science'
    },
    {
      id: 6,
      title: 'Weather Patterns',
      description: 'Learn about clouds, rain, and weather forecasting',
      duration: 15,
      progress: 0,
      status: 'locked',
      subject: 'science'
    },
    {
      id: 7,
      title: 'Reading Stories',
      description: 'Improve reading with fun village stories',
      duration: 25,
      progress: 0,
      status: 'available',
      subject: 'language'
    },
    {
      id: 8,
      title: 'Vocabulary Builder',
      description: 'Learn new words and their meanings',
      duration: 15,
      progress: 0,
      status: 'available',
      subject: 'language'
    }
  ];
  
  const filteredLessons = activeFilter === 'All' 
    ? lessons 
    : lessons.filter(lesson => lesson.subject.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Explore Subjects</h1>
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div className="relative w-full md:w-auto flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search lessons..." 
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex space-x-2">
          {filters.map(filter => (
            <button 
              key={filter} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === filter 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default Subjects;