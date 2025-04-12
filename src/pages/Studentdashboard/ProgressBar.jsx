import React from 'react';

const ProgressBar = ({ progress, markers = [], height = 8, backgroundColor = 'bg-gray-100', progressColor = 'bg-blue-500' }) => {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div className={`relative h-${height} ${backgroundColor} rounded-full overflow-hidden`}>
      {/* Progress fill */}
      <div 
        className={`absolute left-0 top-0 h-full ${progressColor} rounded-full transition-all duration-300 ease-in-out`}
        style={{ width: `${clampedProgress}%` }}
      />
      
      {/* Markers */}
      {markers.map((marker, index) => (
        <div 
          key={index}
          className="absolute top-0 bottom-0 w-0.5 bg-white bg-opacity-70"
          style={{ left: `${marker}%` }}
        />
      ))}
    </div>
  );
};

export default ProgressBar;