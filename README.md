# GaonLearn 🌍

A gamified multilingual learning platform designed for rural and underserved communities.

## 📝 Description

GaonLearn bridges the education gap in rural and underserved areas by providing an engaging, language-inclusive learning platform. Our mission is to make quality education accessible to all through gamification, local language support, and community involvement.

## ✨ Features

### For Learners

- 🎮 Game-based learning interface with avatars, XP, and badges
- 🗣 Support for multiple regional languages
- 🤖 AI-powered chatbot tutor in native languages
- 🔊 Voice instructions for accessibility
  -🔥 Daily streak tracking to encourage consistent learning habits

### For Educators

- 📊 Comprehensive dashboard for tracking student progress
- 📚 Customizable learning paths and content creation
- 📝 Automated report generation
- 🌐 Community forum for knowledge sharing

### Community Impact

- 👨‍👩‍👧‍👦 Family learning modules
- 👥 "Teach Your Town" peer education system
- 📖 Local language preservation through story creation

## 🛠 Tech Stack

- _Frontend_: React.js, TailwindCSS
- _Backend_: Node.js, Firebase/MongoDB
- _AI_: OpenAI GPT for tutoring, Whisper for voice input
- _Voice & Translation_: Web Speech API, Google Translate API
- _Build Tool_: Vite

## 🔮 Future Scope

- _Mobile Application_: Native Android app for broader accessibility
- _Enhanced AI Capabilities_: More sophisticated learning personalization
- _Expanded Language Support_: Addition of more regional dialects and languages
- _Community Content Creation_: Platform for locals to contribute educational content
- _Advanced Analytics_: Learning pattern recognition for personalized education paths
- Offline-first design for areas with limited connectivity

## 📋 Project Structure

gaonlearn/
├── node_modules/ # Dependencies
├── public/ # Static assets
├── src/ # Source code
│ ├── assets/ # Images, fonts, and other resources
│ ├── components/ # Reusable UI components
│ │ ├── cards/ # Card components
│ │ ├── Footer.jsx
│ │ ├── LanguageSelector.jsx
│ │ └── NavBar.jsx
│ ├── pages/ # Page components
│ │ ├── Community/ # Community feature components
│ │ ├── StudentDashboard/ # Student dashboard components
│ │ ├── FamilyLearning.jsx
│ │ ├── Homepage.jsx
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ └── TeacherPortal.jsx
│ ├── App.jsx # Main application component
│ ├── index.css # Global styles
│ └── main.jsx # Application entry point
├── .gitignore # Git ignore file
├── desktop.ini # Windows desktop configuration
├── eslint.config.js # ESLint configuration
├── index.html # HTML entry point
├── package-lock.json # Dependency lock file
├── package.json # Project metadata and dependencies
├── README.md # Project documentation
└── vite.config.js # Vite configuration

## 📱 UI Components

### Home Page

-Language selection dropdown
-Subject tiles (Math, Science, Stories)
-Login/Register options
-Hero section with "Empowering Rural Education" tagline
-"Start Learning" call-to-action button
-Platform highlights with color-coded feature cards
-Impact metrics and user testimonials

### Student Dashboard

-Clean, intuitive layout with sidebar navigation

- XP and badge display
- Learning modules
- Progress tracking visualization
  -XP progress bar showing current progress (e.g., "450/1000 XP")
  -Subject cards showing completion percentage and progress bars
  -Learning streak calendar with fire icons for completed days
  -Recent badges section showcasing achievements (Math Whiz, Science Pro, etc.)
  -Daily learning streak counter (e.g., "4 days", "7 Day Streak")
  -Navigation menu with Dashboard, Subjects, Badges, Profile, and Settings

### Teacher Dashboard

- Student progress tracking
- Content management
- Report generation
- Learning path customization
  -Notification system to stay updated on student activities
  -Story creation functionality for custom learning content
  -Learning path creation for customized educational journeys
  -Filtering options to view specific student groups ("All Students" dropdown)

##Family Learning

-Story collections organized by themes, each with:
Engaging thumbnail images
Clear titles (e.g., "The Wise Tortoise", "The Clever Fox")
Brief descriptions highlighting the moral or skill focus
Topic tags (Animals, Problem Solving, Friendship)
-Interactive controls for listening, translation, and quizzes
-Discussion questions to encourage parent-child conversation

##Community Portal / Teach Your Town

-"Start Teaching" section for educators to create and share content
-"Featured Content" area showcasing community-contributed materials
-My Teaching Timeline showing chronological view of educator activities
-Detailed lesson cards displaying:
Lesson title and category
Date and target audience information
Learning objectives with bullet points
Lesson type indicators
-Easy uploading and browsing of educational materials
-Ability to share expertise and empower others through teaching
-Community-driven content curation and discovery

- 👥 "Teach Your Town" peer education system

## 🚀 Getting Started

bash

# Clone the repository

git clone https://github.com/yourusername/gaonlearn.git

# Install dependencies

npm install

# Start the development server

npm run dev

## 🏷 Tags

#EducationTech #RuralDevelopment #GameBasedLearning #DigitalInclusion #MultilingualEducation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- _Sania Rakhangi_ - Project Lead
- _Shruti Jadhav_ - Frontend Developer
- _Niraj Mahajan_ - Backend Developer
- _Tithi Talele_ - UI/UX Designer

## 📞 Contact

Website: [https://gaonlearn.org](https://gaonlearn.org)
