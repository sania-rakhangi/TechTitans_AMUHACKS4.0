import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold mb-4 text-indigo-900">404</h1>
        <p className="text-xl text-indigo-700 mb-6">Oops! This page seems to be on a field trip</p>
        <a 
          href="/" 
          className="text-white bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 rounded-lg font-medium inline-block"
        >
          Return to Class
        </a>
      </div>
    </div>
  );
};

export default NotFound;