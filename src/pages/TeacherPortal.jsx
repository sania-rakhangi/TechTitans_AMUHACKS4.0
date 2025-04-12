import { useState } from "react";
import {
  Bell,
  Search,
  Plus,
  BookOpen,
  FileText,
  MessageSquare,
  ChevronDown,
  LogOut,
  User,
} from "lucide-react";

export default function TeacherPortal() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [activePage, setActivePage] = useState("dashboard");
  const [filterOption, setFilterOption] = useState("All Students");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const students = [
    {
      id: 1,
      initials: "EJ",
      name: "Emma Johnson",
      lessons: 75,
      engagement: 85,
    },
    { id: 2, initials: "LS", name: "Liam Smith", lessons: 92, engagement: 68 },
    {
      id: 3,
      initials: "OD",
      name: "Olivia Davis",
      lessons: 45,
      engagement: 93,
    },
    { id: 4, initials: "NW", name: "Noah Wilson", lessons: 88, engagement: 79 },
    {
      id: 5,
      initials: "SM",
      name: "Sophia Martinez",
      lessons: 65,
      engagement: 82,
    },
    { id: 6, initials: "LB", name: "Lucas Brown", lessons: 78, engagement: 70 },
  ];

  const getFilteredStudents = () => {
    if (filterOption === "Needs Attention") {
      return students.filter(
        (student) => student.lessons < 60 || student.engagement < 70
      );
    } else if (filterOption === "High Progress") {
      return students.filter(
        (student) => student.lessons > 80 && student.engagement > 80
      );
    }
    return students;
  };

  const handleNavigation = (nav) => {
    setActiveNav(nav);
    setActivePage(nav);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    // Add logout functionality here
    alert("Logging out...");
    // In a real app, you would clear session/tokens and redirect to login page
  };

  return (
    <div className="flex flex-col h-screen bg-[#f5f3e8]">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`bg-[#5c6d63] text-white w-64 flex-shrink-0 ${
            mobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="p-4 text-2xl font-bold">Teacher Portal</div>

          <div className="p-4 text-sm text-[#f5f3e8] opacity-75">MENU</div>

          <nav className="px-4">
            <button
              onClick={() => handleNavigation("dashboard")}
              className={`w-full flex items-center p-3 mb-2 rounded-lg ${
                activeNav === "dashboard"
                  ? "bg-[#2d3e4e]"
                  : "hover:bg-[#2d3e4e]"
              }`}
            >
              <FileText className="mr-3" size={20} />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => handleNavigation("add-story")}
              className={`w-full flex items-center p-3 mb-2 rounded-lg ${
                activeNav === "add-story"
                  ? "bg-[#2d3e4e]"
                  : "hover:bg-[#2d3e4e]"
              }`}
            >
              <FileText className="mr-3" size={20} />
              <span>Add Story</span>
            </button>

            <button
              onClick={() => handleNavigation("learning-path")}
              className={`w-full flex items-center p-3 mb-2 rounded-lg ${
                activeNav === "learning-path"
                  ? "bg-[#2d3e4e]"
                  : "hover:bg-[#2d3e4e]"
              }`}
            >
              <BookOpen className="mr-3" size={20} />
              <span>Create Learning Path</span>
            </button>

            <button
              onClick={() => handleNavigation("forum")}
              className={`w-full flex items-center p-3 mb-2 rounded-lg ${
                activeNav === "forum" ? "bg-[#2d3e4e]" : "hover:bg-[#2d3e4e]"
              }`}
            >
              <MessageSquare className="mr-3" size={20} />
              <span>Community Forum</span>
            </button>
          </nav>

          <div className="absolute bottom-0 left-0 p-4 w-64 border-t border-[#2d3e4e] flex items-center">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="w-full flex items-center hover:bg-[#2d3e4e] rounded-lg p-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#a7b691] rounded-full flex items-center justify-center text-white">
                JD
              </div>
              <div className="ml-3 flex-1">
                <div className="font-medium">Jane Doe</div>
                <div className="text-sm text-[#f5f3e8] opacity-75">Teacher</div>
              </div>
              <ChevronDown size={16} />
            </button>

            {profileDropdownOpen && (
              <div className="absolute bottom-16 left-4 w-56 bg-[#2d3e4e] rounded-lg shadow-lg p-2 z-10">
                <button className="w-full text-left px-3 py-2 rounded hover:bg-[#5c6d63] flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 rounded hover:bg-[#5c6d63] flex items-center text-[#e26d5a]"
                >
                  <LogOut size={16} className="mr-2" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <header className="bg-white shadow-sm flex items-center justify-between p-4">
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mr-4 md:hidden"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
              <div className="text-xl font-medium">
                {activePage.charAt(0).toUpperCase() +
                  activePage.slice(1).replace("-", " ")}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-[#87b2c0]"
                />
              </div>

              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="relative p-2 rounded-full hover:bg-gray-100"
                >
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#e26d5a] rounded-full"></span>
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4 z-10">
                    <h3 className="font-medium mb-2">Notifications</h3>
                    <div className="border-b pb-2 mb-2">
                      <p className="text-sm">
                        Olivia Davis completed a new assignment
                      </p>
                      <p className="text-xs text-gray-500">10 minutes ago</p>
                    </div>
                    <div>
                      <p className="text-sm">
                        Class report for week 12 is available
                      </p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-8 h-8 bg-[#a7b691] rounded-full flex items-center justify-center text-white">
                JD
              </div>
            </div>
          </header>

          {/* Content Body */}
          <main className="flex-1 overflow-y-auto bg-[#f5f3e8] p-6">
            {activePage === "dashboard" && (
              <div>
                <div className="mb-8">
                  <h1 className="text-3xl font-medium text-[#2d3e4e] mb-2">
                    Welcome back, Jane!
                  </h1>
                  <p className="text-[#5c6d63]">
                    Here's what's happening with your classroom today.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-medium text-[#2d3e4e]">
                      Class 5B Progress
                    </h2>

                    <div className="relative">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center bg-white border rounded-lg px-4 py-2"
                      >
                        {filterOption}{" "}
                        <ChevronDown size={16} className="ml-2" />
                      </button>

                      {dropdownOpen && (
                        <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg z-10">
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-[#f5f3e8] rounded-t-lg"
                            onClick={() => {
                              setFilterOption("All Students");
                              setDropdownOpen(false);
                            }}
                          >
                            All Students
                          </button>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-[#f5f3e8]"
                            onClick={() => {
                              setFilterOption("Needs Attention");
                              setDropdownOpen(false);
                            }}
                          >
                            Needs Attention
                          </button>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-[#f5f3e8] rounded-b-lg"
                            onClick={() => {
                              setFilterOption("High Progress");
                              setDropdownOpen(false);
                            }}
                          >
                            High Progress
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {getFilteredStudents().map((student) => (
                      <div
                        key={student.id}
                        className="bg-white rounded-lg shadow p-6"
                      >
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-[#87b2c0] rounded-full flex items-center justify-center text-white text-xl">
                            {student.initials}
                          </div>
                        </div>

                        <h3 className="text-center text-lg font-medium mb-4">
                          {student.name}
                        </h3>

                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Lessons</span>
                            <span>{student.lessons}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-[#87b2c0] h-2 rounded-full"
                              style={{ width: `${student.lessons}%` }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Engagement</span>
                            <span>{student.engagement}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-[#e9c46a] h-2 rounded-full"
                              style={{ width: `${student.engagement}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activePage === "add-story" && (
              <div>
                <h1 className="text-2xl font-medium mb-6 text-[#2d3e4e]">
                  Add Story
                </h1>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Story Title
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded p-2"
                      placeholder="Enter story title"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Content
                    </label>
                    <textarea
                      className="w-full border rounded p-2 h-40"
                      placeholder="Write your story content here..."
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Reading Level
                    </label>
                    <select className="w-full border rounded p-2">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>

                  <div className="flex justify-end">
                    <button className="bg-[#e26d5a] text-white px-4 py-2 rounded">
                      Save Story
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activePage === "learning-path" && (
              <div>
                <h1 className="text-2xl font-medium mb-6 text-[#2d3e4e]">
                  Create Learning Path
                </h1>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Path Title
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded p-2"
                      placeholder="Enter path title"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Description
                    </label>
                    <textarea
                      className="w-full border rounded p-2 h-20"
                      placeholder="Describe this learning path..."
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium">
                        Learning Modules
                      </label>
                      <button className="text-[#87b2c0] flex items-center">
                        <Plus size={16} className="mr-1" /> Add Module
                      </button>
                    </div>

                    <div className="border rounded p-4 mb-2">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">Module 1: Introduction</h3>
                        <div className="text-gray-500">2 resources</div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Basic concepts and fundamentals
                      </p>
                    </div>

                    <div className="border rounded p-4">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">
                          Module 2: Advanced Topics
                        </h3>
                        <div className="text-gray-500">3 resources</div>
                      </div>
                      <p className="text-sm text-gray-600">
                        In-depth exploration of key concepts
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="bg-[#e26d5a] text-white px-4 py-2 rounded">
                      Create Path
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activePage === "forum" && (
              <div>
                <h1 className="text-2xl font-medium mb-6 text-[#2d3e4e]">
                  Community Forum
                </h1>
                <div className="bg-white rounded-lg shadow mb-6">
                  <div className="p-4 border-b">
                    <h2 className="font-medium">Start a Discussion</h2>
                  </div>
                  <div className="p-6">
                    <textarea
                      className="w-full border rounded p-2 h-24 mb-4"
                      placeholder="What would you like to discuss?"
                    ></textarea>
                    <div className="flex justify-end">
                      <button className="bg-[#e26d5a] text-white px-4 py-2 rounded">
                        Post
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow mb-4">
                  <div className="p-4 border-b flex items-center">
                    <div className="w-10 h-10 bg-[#a7b691] rounded-full flex items-center justify-center text-white mr-3">
                      SM
                    </div>
                    <div>
                      <h3 className="font-medium">Sarah Miller</h3>
                      <div className="text-xs text-gray-500">2 hours ago</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="mb-4">
                      Has anyone tried the new storytelling activity with their
                      class? I'd love to hear some feedback before I implement
                      it next week.
                    </p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <button className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          ></path>
                        </svg>
                        Like
                      </button>
                      <button className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          ></path>
                        </svg>
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
