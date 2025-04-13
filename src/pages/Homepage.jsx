import React, { useState } from "react";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import FeatureCard from "../components/cards/FeatureCard";

const Homepage = () => {
  const [language, setLanguage] = useState("English");

  const languages = [
    "English",
    "Hindi",
    "Marathi",
    "Tamil",
    "Telugu",
    "Kannada",
    "Bengali",
    "Gujarati",
    "Punjabi",
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const featureCards = [
    {
      id: 1,
      title: "Student Dashboard",
      description:
        "Track progress, access lessons, and earn rewards through your learning journey",
      color: "#e9c46a",
      link: "/student-dashboard",
    },
    {
      id: 2,
      title: "Teacher Portal",
      description:
        "Create classes, assign work, and monitor student performance with ease",
      color: "#87b2c0",
      link: "/teacher-portal",
    },
    {
      id: 3,
      title: "Family Learning",
      description:
        "Engage the whole family in collaborative learning with multi-user shared activities",
      color: "#a7b691",
      link: "/family-learning",
    },
    {
      id: 4,
      title: "Community Mode",
      description:
        "Connect with other learners, participate in events, and join educational challenges",
      color: "#e26d5a",
      link: "/community",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-primary-light text-primary-dark font-sans">
      <main className="pb-16">
        <section className="relative w-full h-screen overflow-hidden bg-accent-blue mb-12">
          {/* Content Card */}
          <div className="relative z-10 max-w-5xl mx-auto mt-28 bg-white p-10 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold font-[Poppins] mb-4">
              Empowering Rural Education
            </h1>
            <h2 className="text-xl font-semibold mb-6">
              A multilingual learning platform designed for all ages
            </h2>
            <button
              onClick={() => (window.location.href = "/student-dashboard")}
              className="bg-[#e26d5a] text-white px-6 py-2 rounded-md hover:bg-accent-orange transition mb-6"
            >
              Start Learning
            </button>
            <LanguageSelector
              languages={languages}
              selectedLanguage={language}
              onLanguageChange={handleLanguageChange}
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Platform Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card) => (
              <FeatureCard
                key={card.id}
                title={card.title}
                description={card.description}
                color={card.color}
                link={card.link}
              />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Community Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
              <blockquote className="italic">
                "GaonLearn has transformed how I teach in our village school.
                Students are more engaged and learning outcomes have improved
                dramatically."
              </blockquote>
              <cite className="block mt-4 text-sm text-gray-600">
                - Anita Sharma, Teacher, Rajasthan
              </cite>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
              <blockquote className="italic">
                "I can now learn at my own pace and in my own language. The
                interactive lessons make difficult concepts easy to understand."
              </blockquote>
              <cite className="block mt-4 text-sm text-gray-600">
                - Rajesh Kumar, Student, Bihar
              </cite>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16 px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold">500+</div>
            <div className="mt-2 text-gray-600">Villages Reached</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold">25,000+</div>
            <div className="mt-2 text-gray-600">Active Learners</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold">12</div>
            <div className="mt-2 text-gray-600">Regional Languages</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold">95%</div>
            <div className="mt-2 text-gray-600">Completion Rate</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
