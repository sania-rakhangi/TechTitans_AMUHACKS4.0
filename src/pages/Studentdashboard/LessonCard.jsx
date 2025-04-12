import React from 'react';
import { Play, CheckCircle, Lock } from 'lucide-react';

const LessonCard = ({ lesson }) => {
  const { title, description, duration, progress, status, subject } = lesson;

  // Define icon and action button based on lesson status
  const renderStatusContent = () => {
    switch (status) {
      case 'complete':
        return (
          <button className="flex items-center justify-center px-4 py-1.5 rounded-md bg-teal-100 text-teal-700 font-medium">
            <CheckCircle size={16} className="mr-1" />
            Complete
          </button>
        );
      case 'in-progress':
        return (
          <button className="flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-100 text-blue-700 font-medium">
            <Play size={16} className="mr-1" />
            Continue
          </button>
        );
      case 'locked':
        return (
          <div className="flex items-center">
            <Lock size={16} className="text-gray-400 mr-2" />
            <button className="flex items-center justify-center px-4 py-1.5 rounded-md bg-gray-100 text-gray-700 font-medium">
              <Play size={16} className="mr-1" />
              Start
            </button>
          </div>
        );
      default:
        return (
          <button className="flex items-center justify-center px-4 py-1.5 rounded-md bg-gray-100 text-gray-700 font-medium">
            <Play size={16} className="mr-1" />
            Start
          </button>
        );
    }
  };

  // Subject icon (simplified version)
  const getSubjectIcon = () => {
    const iconClasses = "p-1 rounded mr-1";
    
    switch (subject) {
      case 'math':
        return <div className={`${iconClasses} bg-blue-50 text-blue-500`}>M</div>;
      case 'science':
        return <div className={`${iconClasses} bg-green-50 text-green-500`}>S</div>;
      case 'language':
        return <div className={`${iconClasses} bg-red-50 text-red-500`}>L</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start mb-2">
        {getSubjectIcon()}
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        {status === 'locked' && <Lock size={16} className="ml-auto text-gray-400" />}
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm">{duration} min</span>
        
        {progress > 0 && (
          <div className="flex-grow mx-4">
            <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${
                  progress === 100 ? 'bg-teal-500' : 'bg-blue-500'
                }`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-xs text-right text-gray-500 mt-1">{progress}%</div>
          </div>
        )}
        
        {renderStatusContent()}
      </div>
    </div>
  );
};

export default LessonCard;