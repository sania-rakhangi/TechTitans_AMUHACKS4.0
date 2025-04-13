import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar"; // Import the NavBar component

const FamilyLearning = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [recordingMessage, setRecordingMessage] = useState(false);
  const [language, setLanguage] = useState("english");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Animals");

  // Custom theme colors
  const theme = {
    primaryDark: "#2d3e4e",
    primaryMedium: "#5c6d63",
    primaryLight: "#f5f3e8",
    accentOrange: "#e26d5a",
    accentYellow: "#e9c46a",
    accentBlue: "#87b2c0",
    accentGreen: "#a7b691",
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // All stories with topic tags
  const allStories = [
    {
      id: 1,
      title: "The Wise Tortoise",
      thumbnail: "/api/placeholder/120/80",
      language: "english",
      topics: ["Animals", "Problem Solving"],
      description: "A story about patience and wisdom.",
    },
    {
      id: 2,
      title: "The Clever Fox",
      thumbnail: "/api/placeholder/120/80",
      language: "english",
      topics: ["Animals", "Problem Solving"],
      description: "Learn about quick thinking and problem-solving.",
    },
    {
      id: 3,
      title: "The Kind Elephant",
      thumbnail: "/api/placeholder/120/80",
      language: "english",
      topics: ["Animals", "Friendship"],
      description: "A heartwarming tale about compassion.",
    },
    {
      id: 4,
      title: "The Brave Mouse",
      thumbnail: "/api/placeholder/120/80",
      language: "english",
      topics: ["Animals"],
      description: "Discover how courage comes in all sizes.",
    },
    {
      id: 5,
      title: "The Magic Garden",
      thumbnail: "/api/placeholder/120/80",
      language: "english",
      topics: ["Nature"],
      description: "Explore the wonders of a magical garden.",
    },
    {
      id: 6,
      title: "Forest Friends",
      thumbnail: "/api/placeholder/120/80",
      language: "english",
      topics: ["Nature", "Friendship"],
      description: "A tale of friendship among forest creatures.",
    },
    {
      id: 7,
      title: "The Sharing Bears",
      thumbnail: "/api/placeholder/120/80",
      language: "english",
      topics: ["Friendship"],
      description: "Learn the value of sharing and caring.",
    },
    {
      id: 8,
      title: "River Puzzle",
      thumbnail: "/api/placeholder/120/80",
      language: "english",
      topics: ["Problem Solving", "Nature"],
      description: "Solve the mystery of the changing river.",
    },
  ];

  // Filter stories based on selected topic
  const stories = selectedTopic
    ? allStories.filter((story) => story.topics.includes(selectedTopic))
    : allStories;

  const quizQuestions = [
    {
      id: 1,
      question: "Which animal is the main character in the story?",
      options: [
        { text: "Tortoise", image: "/api/placeholder/80/80" },
        { text: "Rabbit", image: "/api/placeholder/80/80" },
        { text: "Bird", image: "/api/placeholder/80/80" },
        { text: "Fish", image: "/api/placeholder/80/80" },
      ],
      answer: 0,
    },
  ];

  const handleStorySelect = (story) => {
    setSelectedStory(story);
    setShowQuiz(false);
    setQuizSubmitted(false);
    setSelectedAnswer(null);
    if (windowWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const startQuiz = () => {
    setShowQuiz(true);
    setQuizSubmitted(false);
    setSelectedAnswer(null);
  };

  const toggleRecording = () => {
    setRecordingMessage(!recordingMessage);
  };

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setSelectedStory(null);
    setShowQuiz(false);
    if (windowWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const submitQuiz = () => {
    if (selectedAnswer !== null) {
      setQuizSubmitted(true);
    }
  };

  const topics = ["Animals", "Nature", "Friendship", "Problem Solving"];

  return (
    <div
      className="font-sans text-gray-800 min-h-screen w-full"
      style={{ backgroundColor: theme.primaryLight }}
    >
      {/* Hero Section - adjusted to appear below NavBar */}
      <div
        className="pt-16 bg-blend-overlay py-12 px-8 text-white text-center relative bg-cover bg-center"
        style={{
          backgroundColor: `${theme.primaryMedium}cc`,
          backgroundImage: "url('/api/placeholder/1200/400')",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-4 font-bold">
            Family Learning Journey
          </h1>
          <p className="text-lg md:text-xl mb-2">
            Learn together, grow together.
          </p>
          <p className="text-base md:text-lg opacity-90">
            Stories and activities for parents and children.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row max-w-6xl mx-auto my-8 px-4 gap-8">
        {/* Overlay for mobile sidebar */}
        {sidebarOpen && windowWidth < 768 && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Toggle button for sidebar on mobile */}
        <button
          className="md:hidden fixed bottom-4 right-4 z-40 bg-white p-3 rounded-full shadow-lg"
          onClick={toggleSidebar}
          style={{ backgroundColor: theme.accentOrange, color: "white" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Sidebar */}
        <div
          className={`md:w-72 w-full max-w-xs rounded-lg shadow-lg z-50 transition-all duration-300 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } ${windowWidth < 768 ? "fixed left-0 top-16 bottom-0" : "relative"}`}
          style={{ backgroundColor: theme.accentBlue }}
        >
          <div className="p-6 h-full overflow-y-auto">
            {/* Avatars */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-32 h-24">
                <img
                  src="/api/placeholder/80/80"
                  alt="Parent avatar"
                  className="absolute left-2 top-0 rounded-full border-4 border-white shadow-md z-10"
                />
                <img
                  src="/api/placeholder/60/60"
                  alt="Child avatar"
                  className="absolute right-2 bottom-0 rounded-full border-4 border-white shadow-md z-20"
                />
              </div>
              <p
                className="mt-4 font-medium"
                style={{ color: theme.primaryDark }}
              >
                Learning together
              </p>
            </div>

            {/* Language Selector */}
            <div className="mb-6">
              <label
                htmlFor="language-select"
                className="block mb-2 font-bold"
                style={{ color: theme.primaryDark }}
              >
                Choose Language:
              </label>
              <select
                id="language-select"
                value={language}
                onChange={changeLanguage}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2"
                style={{
                  borderColor: theme.primaryMedium,
                  backgroundColor: "white",
                }}
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="hindi">Hindi</option>
                <option value="swahili">Swahili</option>
              </select>
            </div>

            {/* Recording Section */}
            <div
              className="p-4 rounded-lg mb-6"
              style={{ backgroundColor: `${theme.primaryLight}` }}
            >
              <h3
                className="mt-0 font-semibold text-lg"
                style={{ color: theme.primaryDark }}
              >
                Record a Message
              </h3>
              <p
                className="text-sm mb-3"
                style={{ color: theme.primaryMedium }}
              >
                Save your narration for your child
              </p>
              <button
                className={`w-full px-4 py-2 rounded text-white transition-all duration-300 ${
                  recordingMessage ? "animate-pulse" : "hover:shadow-md"
                }`}
                style={{
                  backgroundColor: recordingMessage
                    ? "#d32f2f"
                    : theme.accentOrange,
                }}
                onClick={toggleRecording}
              >
                {recordingMessage ? "Stop Recording" : "Start Recording"}
              </button>
            </div>

            {/* Progress Section */}
            <div>
              <h3
                className="mt-0 font-semibold text-lg mb-2"
                style={{ color: theme.primaryDark }}
              >
                Learning Progress
              </h3>
              <div
                className="h-4 rounded-full overflow-hidden mb-2"
                style={{ backgroundColor: `${theme.primaryLight}` }}
              >
                <div
                  className="h-full w-1/3"
                  style={{ backgroundColor: theme.accentGreen }}
                ></div>
              </div>
              <p className="text-sm" style={{ color: theme.primaryDark }}>
                3 of 8 stories completed
              </p>
            </div>

            {/* Current Topics */}
            <div className="mt-8">
              <h3
                className="font-semibold text-lg mb-3"
                style={{ color: theme.primaryDark }}
              >
                Today's Topics
              </h3>
              <ul className="space-y-2">
                {topics.map((topic, index) => (
                  <li
                    key={index}
                    className={`flex items-center p-2 rounded-md cursor-pointer transition-all hover:shadow-md ${
                      selectedTopic === topic ? "shadow-md" : ""
                    }`}
                    style={{
                      backgroundColor:
                        selectedTopic === topic
                          ? theme.accentYellow
                          : "transparent",
                    }}
                    onClick={() => handleTopicSelect(topic)}
                  >
                    <span
                      className="w-3 h-3 rounded-full mr-2"
                      style={{
                        backgroundColor:
                          selectedTopic === topic
                            ? theme.accentOrange
                            : theme.accentGreen,
                      }}
                    ></span>
                    <span style={{ color: theme.primaryDark }}>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div
          className="flex-1 rounded-lg shadow-lg p-4 md:p-8 transition-all"
          style={{ backgroundColor: "white" }}
        >
          {!selectedStory ? (
            <div>
              <h2
                className="text-2xl font-bold mt-0 mb-4"
                style={{ color: theme.primaryDark }}
              >
                {selectedTopic
                  ? `${selectedTopic} Stories`
                  : "Choose a Story to Read Together"}
              </h2>
              <p
                className="mb-6 text-base"
                style={{ color: theme.primaryMedium }}
              >
                {selectedTopic
                  ? `Explore our collection of stories about ${selectedTopic.toLowerCase()}. Each story teaches valuable life lessons.`
                  : "Select a story below that you and your child would like to explore together. Each story teaches valuable life lessons."}
              </p>

              {stories.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stories.map((story) => (
                    <div
                      key={story.id}
                      className="rounded-lg overflow-hidden shadow hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                      style={{ backgroundColor: theme.primaryLight }}
                      onClick={() => handleStorySelect(story)}
                    >
                      <div className="relative">
                        <img
                          src={story.thumbnail}
                          alt={story.title}
                          className="w-full h-32 object-cover"
                        />
                        <div
                          className="absolute inset-0 opacity-0 hover:opacity-90 transition-opacity flex items-center justify-center text-white"
                          style={{ backgroundColor: `${theme.primaryDark}bb` }}
                        >
                          <span>Read Now</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3
                          className="font-bold text-lg mb-2"
                          style={{ color: theme.primaryDark }}
                        >
                          {story.title}
                        </h3>
                        <p
                          className="text-sm"
                          style={{ color: theme.primaryMedium }}
                        >
                          {story.description}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {story.topics.map((topic, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 rounded-full"
                              style={{
                                backgroundColor:
                                  topic === selectedTopic
                                    ? theme.accentYellow
                                    : theme.primaryLight,
                                color: theme.primaryDark,
                                border: `1px solid ${theme.primaryMedium}`,
                              }}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="text-center p-8 rounded-lg"
                  style={{ backgroundColor: theme.primaryLight }}
                >
                  <p
                    className="text-lg font-medium"
                    style={{ color: theme.primaryDark }}
                  >
                    No stories found for this topic. Try selecting a different
                    topic.
                  </p>
                  <button
                    className="mt-4 px-5 py-2 rounded font-bold text-white"
                    style={{ backgroundColor: theme.accentOrange }}
                    onClick={() => setSelectedTopic(null)}
                  >
                    View All Stories
                  </button>
                </div>
              )}
            </div>
          ) : showQuiz ? (
            <div>
              <h2
                className="text-2xl font-bold mt-0 mb-4"
                style={{ color: theme.primaryDark }}
              >
                Let's Check What We Learned
              </h2>
              <p className="mb-6" style={{ color: theme.primaryMedium }}>
                Answer the questions about the story you just read.
              </p>

              {quizQuestions.map((q) => (
                <div key={q.id} className="mb-8">
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: theme.primaryDark }}
                  >
                    {q.question}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {q.options.map((option, index) => (
                      <div
                        key={index}
                        className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all ${
                          selectedAnswer === index
                            ? "transform scale-105"
                            : "hover:shadow-md"
                        } ${
                          quizSubmitted && selectedAnswer === index
                            ? index === q.answer
                              ? "ring-4 ring-green-500"
                              : "ring-4 ring-red-500"
                            : "border-2"
                        }`}
                        style={{
                          backgroundColor: theme.primaryLight,
                          borderColor:
                            selectedAnswer === index
                              ? theme.accentYellow
                              : "transparent",
                        }}
                        onClick={() =>
                          !quizSubmitted && handleAnswerSelect(index)
                        }
                      >
                        <img
                          src={option.image}
                          alt={option.text}
                          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg mb-3"
                        />
                        <p
                          className="font-bold text-center"
                          style={{ color: theme.primaryDark }}
                        >
                          {option.text}
                        </p>

                        {quizSubmitted && index === q.answer && (
                          <div
                            className="mt-2 text-sm font-medium px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: theme.accentGreen,
                              color: "white",
                            }}
                          >
                            Correct Answer
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {!quizSubmitted && (
                    <div className="mt-6">
                      <button
                        className="px-6 py-2 rounded font-bold text-white disabled:opacity-50"
                        style={{
                          backgroundColor:
                            selectedAnswer !== null
                              ? theme.accentOrange
                              : theme.primaryMedium,
                        }}
                        disabled={selectedAnswer === null}
                        onClick={submitQuiz}
                      >
                        Submit Answer
                      </button>
                    </div>
                  )}

                  {quizSubmitted && (
                    <div
                      className="mt-6 p-4 rounded-lg"
                      style={{
                        backgroundColor:
                          selectedAnswer === q.answer
                            ? theme.accentGreen
                            : theme.accentOrange,
                        color: "white",
                      }}
                    >
                      <p className="font-bold">
                        {selectedAnswer === q.answer
                          ? "Great job! That's correct!"
                          : 'Not quite right. The correct answer is "' +
                            q.options[q.answer].text +
                            '".'}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              <div className="flex gap-4 mt-8">
                <button
                  className="px-5 py-2 rounded font-bold text-white transition-colors"
                  style={{ backgroundColor: theme.primaryDark }}
                  onClick={() => setShowQuiz(false)}
                >
                  Back to Story
                </button>

                {quizSubmitted && (
                  <button
                    className="px-5 py-2 rounded font-bold text-white transition-colors"
                    style={{ backgroundColor: theme.accentBlue }}
                    onClick={() => {
                      setSelectedAnswer(null);
                      setQuizSubmitted(false);
                    }}
                  >
                    Try Again
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                <div>
                  <h2
                    className="text-2xl font-bold mt-0"
                    style={{ color: theme.primaryDark }}
                  >
                    {selectedStory.title}
                  </h2>
                  <div className="flex mt-2 gap-1">
                    {selectedStory.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: theme.primaryLight,
                          color: theme.primaryDark,
                          border: `1px solid ${theme.primaryMedium}`,
                        }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: theme.accentYellow,
                      color: theme.primaryDark,
                    }}
                  >
                    Age 5-8
                  </span>
                </div>
              </div>

              <div className="my-6">
                <img
                  src="/api/placeholder/400/220"
                  alt="Story illustration"
                  className="w-full rounded-lg mb-6 shadow-md"
                />
                <div className="story-text space-y-4">
                  <p
                    className="leading-relaxed text-lg"
                    style={{ color: theme.primaryMedium }}
                  >
                    Once upon a time, in a lush green forest, there lived a wise
                    old tortoise. The tortoise was known throughout the forest
                    for solving problems and giving good advice.
                  </p>
                  <p
                    className="leading-relaxed text-lg"
                    style={{ color: theme.primaryMedium }}
                  >
                    One day, a terrible drought came to the forest. All the
                    animals were worried as the water in the lake began to dry
                    up.
                  </p>
                  <p
                    className="leading-relaxed text-lg"
                    style={{ color: theme.primaryMedium }}
                  >
                    "What shall we do?" cried the rabbit. "We will all be
                    thirsty soon!"
                  </p>
                  <p
                    className="leading-relaxed text-lg"
                    style={{ color: theme.primaryMedium }}
                  >
                    The wise tortoise thought carefully. "I remember a hidden
                    spring beyond the hills," he said slowly. "But the journey
                    is long and difficult."
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <button
                  className="px-5 py-2 rounded font-bold text-white transition-all hover:shadow-md flex items-center"
                  style={{ backgroundColor: theme.accentBlue }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Listen</span>
                </button>

                <button
                  className="px-5 py-2 rounded font-bold text-white transition-all hover:shadow-md flex items-center"
                  style={{ backgroundColor: theme.primaryMedium }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  <span>Translate</span>
                </button>

                <button
                  className="px-5 py-2 rounded font-bold text-white transition-all hover:shadow-md flex items-center"
                  style={{ backgroundColor: theme.accentOrange }}
                  onClick={startQuiz}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Take Quiz</span>
                </button>

                <button
                  className="px-5 py-2 rounded font-bold transition-all hover:shadow-md flex items-center"
                  style={{
                    backgroundColor: theme.primaryLight,
                    color: theme.primaryDark,
                  }}
                  onClick={() => setSelectedStory(null)}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span>Back to Stories</span>
                </button>
              </div>

              <div
                className="mt-8 p-4 border-l-4 rounded"
                style={{
                  borderColor: theme.accentGreen,
                  backgroundColor: theme.primaryLight,
                }}
              >
                <h4
                  className="font-bold text-lg mt-0 mb-2"
                  style={{ color: theme.primaryDark }}
                >
                  Discussion Questions
                </h4>
                <ul
                  className="space-y-2 pl-5 list-disc"
                  style={{ color: theme.primaryMedium }}
                >
                  <li>Why do you think the tortoise is described as wise?</li>
                  <li>What problem did the animals face in the forest?</li>
                  <li>
                    Have you ever helped solve a problem for someone else?
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-6 px-4 mt-12 text-center"
        style={{
          backgroundColor: theme.primaryDark,
          color: theme.primaryLight,
        }}
      >
        <p className="text-sm">
          © 2025 Family Learning Journey. All stories and activities designed
          for educational purposes.
        </p>
      </footer>
    </div>
  );
};

export default FamilyLearning;
