import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, Users, Tag } from "lucide-react";

const Lessons = () => {
  const lessons = [
    {
      id: 1,
      title: "Introduction to Mathematics",
      description: "Fundamental math concepts for beginners",
      date: "2025-04-10",
      audience: "Beginners",
      duration: "45 minutes",
      tags: ["Mathematics", "Fundamentals"]
    },
    {
      id: 2,
      title: "Advanced Physics Concepts",
      description: "Deep dive into quantum mechanics and relativity",
      date: "2025-04-08",
      audience: "Advanced Learners",
      duration: "60 minutes",
      tags: ["Physics", "Advanced"]
    },
    {
      id: 3,
      title: "Literature Analysis Techniques",
      description: "Methods for analyzing classic and modern literature",
      date: "2025-04-05",
      audience: "Intermediate",
      duration: "50 minutes",
      tags: ["Literature", "Analysis"]
    }
  ];

  return (
    <div className="animate-fade-in p-6">
      <div className="flex items-center mb-6">
        <Link to="/" className="inline-flex items-center px-3 py-2 mr-2 text-sm rounded-md hover:bg-gray-100">
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back to Home
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-indigo-900 mb-6">My Lessons</h1>
      
      <div className="grid gap-6">
        {lessons.map((lesson) => (
          <div 
            key={lesson.id} 
            className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold text-indigo-900 flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-blue-500" />
              {lesson.title}
            </h2>
            <p className="text-indigo-700 mt-2">{lesson.description}</p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center text-sm text-indigo-700">
                <Clock className="h-4 w-4 mr-1" />
                {lesson.duration}
              </div>
              <div className="flex items-center text-sm text-indigo-700">
                <Users className="h-4 w-4 mr-1" />
                {lesson.audience}
              </div>
              <div className="flex items-center text-sm text-indigo-700">
                <Tag className="h-4 w-4 mr-1" />
                {lesson.tags.join(", ")}
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-indigo-700">
                Posted on {new Date(lesson.date).toLocaleDateString()}
              </span>
              <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50">
                View Lesson
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;