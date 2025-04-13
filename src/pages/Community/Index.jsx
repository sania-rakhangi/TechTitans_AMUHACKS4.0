import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Sidebar from './SideBar';
import { Home, Calendar, BookOpen, Clock, Users, BookText } from 'lucide-react';

// import your page components
import Lessons from './Lessons'; // 👈 adjust path as needed
//import TeachPage from './TeachPage'; // if this is /teach
//import StoriesPage from './StoriesPage'; // if this is /stories
//<Route path="/teach" element={<TeachPage />} />
//<Route path="/stories" element={<StoriesPage />} />
const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const recentMaterials = [
    {
      id: 1,
      title: "Advanced Calculus Concepts",
      type: "Lesson",
      date: "2025-04-10",
      audience: "College Students",
      learningPoints: ["Derivatives of Vector Functions", "Applications of Partial Derivatives", "Multiple Integrals"]
    },
    {
      id: 2,
      title: "Introduction to Literary Analysis",
      type: "Reading Material",
      date: "2025-04-08",
      audience: "High School Students",
      learningPoints: ["Critical Reading Techniques", "Character Analysis Methods", "Thematic Development"]
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#f9f7f2]">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <main className="flex-1 overflow-y-auto p-6">
        <Routes>
          <Route path="/" element={
            <>
              <div className="mb-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#2d2d2d]">Welcome to Teach Town</h1>
                <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </div>
              <p className="text-gray-600 mb-6">Share your knowledge and empower others through teaching. Browse available materials or create your own.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl font-semibold text-[#2d2d2d] mb-4">Start Teaching</h2>
                  <p className="text-gray-600 mb-4">Share your expertise with others by creating and uploading educational materials.</p>
                  <Link 
                    to="/teach" 
                    className="block w-full py-2 px-4 bg-[#e97f67] hover:bg-[#e97f67]/90 text-white text-center font-medium rounded-md"
                  >
                    Teach Your Town
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl font-semibold text-[#2d2d2d] mb-4">Featured Content</h2>
                  <p className="text-gray-600 mb-4">Explore educational materials shared by our community of tutors and experts.</p>
                  <Link 
                    to="/stories" 
                    className="block w-full py-2 px-4 bg-[#7aaec4] hover:bg-[#7aaec4]/90 text-white text-center font-medium rounded-md"
                  >
                    Browse Materials
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="flex items-center text-xl font-semibold text-[#2d2d2d]">
                    <BookText className="mr-2 h-5 w-5 text-gray-500" />
                    My Teaching Timeline
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {recentMaterials.map((material, index) => (
                      <div key={material.id} className="relative pl-6 pb-6 border-l-2 border-gray-300 last:border-0 last:pb-0">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#7fc570]"></div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-[#2d2d2d]">{material.title}</h3>
                            <div className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-600">
                              {material.type}
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {new Date(material.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {material.audience}
                            </div>
                          </div>
                          <div className="mt-3">
                            <h4 className="text-sm font-medium text-[#2d2d2d] flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              What students will learn:
                            </h4>
                            <ul className="mt-1 list-disc pl-5 text-sm text-gray-700 space-y-1">
                              {material.learningPoints.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path="/test" element={<div>Test route works!</div>} />

          <Route path="/lessons" element={<Lessons />} />
         
        </Routes>
      </main>
    </div>
  );
};

export default Index;
