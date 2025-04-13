import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TeacherPortal from "./pages/TeacherPortal";
import StudentDashboard from "./pages/Studentdashboard/StudentPortal";
import Index from "./pages/Community/Index";
import FamilyLearning from "./pages/FamilyLearning";

// import TeacherPortal from "./TeacherPortal";
// import FamilyLearning from "./FamilyLearning";
// import Community from "./Community";

// Placeholder components
// const Onboarding = () => <div>Onboarding Page Coming Soon</div>;
// const ForgotPassword = () => <div>Forgot Password Page Coming Soon</div>;
// const Terms = () => <div>Terms and Conditions Coming Soon</div>;
// const Privacy = () => <div>Privacy Policy Coming Soon</div>;

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/teacher-portal" element={<TeacherPortal />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/community" element={<Index />} />
          <Route path="/family-learning" element={<FamilyLearning />} />
          {/* <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-portal" element={<TeacherPortal />} />
          <Route path="/family-learning" element={<FamilyLearning />} />
          <Route path="/community" element={<Community />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
