import React, { useState } from 'react';
import './Homepage.css';

// Component imports
import NavBar from './NavBar';
import Footer from './Footer';
import LanguageSelector from './LanguageSelector';

import FeatureCard from './FeatureCard';

const Homepage = () => {
  const [language, setLanguage] = useState('English');
  
  const languages = [
    'English', 'Hindi', 'Marathi', 'Tamil', 'Telugu', 
    'Kannada', 'Bengali', 'Gujarati', 'Punjabi'
  ];
  
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Additional language change logic
  };
  
  const featureCards = [
    {
      id: 1,
      title: 'Student Dashboard',
      description: 'Track progress, access lessons, and earn rewards through your learning journey',
      color: '#e9c46a',
      link: '/student-dashboard'
    },
    {
      id: 2,
      title: 'Teacher Portal',
      description: 'Create classes, assign work, and monitor student performance with ease',
      color: '#87b2c0',
      link: '/teacher-portal'
    },
    {
      id: 3,
      title: 'Family Learning',
      description: 'Engage the whole family in collaborative learning with multi-user shared activities',
      color: '#a7b691',
      link: '/family-learning'
    },
    {
      id: 4,
      title: 'Community Mode',
      description: 'Connect with other learners, participate in events, and join educational challenges',
      color: '#e26d5a',
      link: '/community'
    }
  ];
  
  return (
    <div className="homepage">
      <NavBar activePage="Homepage" />
      
      <main>
        <section className="hero-section">
          <div className="rural-landscape">
            {/* Rural background elements */}
            <div className="sky"></div>
            <div className="mountains"></div>
            <div className="hills"></div>
            <div className="fields"></div>
            
            {/* Village elements */}
            <div className="village-house house-1"></div>
            <div className="village-house house-2"></div>
            <div className="hut"></div>
            <div className="school-building"></div>
            
            {/* Decorative elements */}
            <div className="terracotta-pot">
              <div className="plant"></div>
            </div>
            <div className="villager villager-1"></div>
            <div className="villager villager-2"></div>
          </div>
          
          <div className="content-card">
            <h1>Empowering Rural Education</h1>
            <h2>A multilingual learning platform designed for all ages</h2>
            
            <button className="cta-button">Start Learning</button>
            
            <LanguageSelector 
              languages={languages} 
              selectedLanguage={language}
              onLanguageChange={handleLanguageChange}
            />
          </div>
          
        </section>
        
        <section className="features-section">
          <h2 className="section-title">Platform Highlights</h2>
          
          <div className="features-container">
            {featureCards.map(card => (
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
        
        <section className="testimonials-section">
          <h2 className="section-title">Community Impact</h2>
          
          <div className="testimonials-container">
            <div className="testimonial">
              <div className="testimonial-image teacher"></div>
              <blockquote>
                "GaonLearn has transformed how I teach in our village school. Students are more engaged and learning outcomes have improved dramatically."
              </blockquote>
              <cite>- Anita Sharma, Teacher, Rajasthan</cite>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-image student"></div>
              <blockquote>
                "I can now learn at my own pace and in my own language. The interactive lessons make difficult concepts easy to understand."
              </blockquote>
              <cite>- Rajesh Kumar, Student, Bihar</cite>
            </div>
          </div>
        </section>
        
        <section className="stats-section">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Villages Reached</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">25,000+</div>
            <div className="stat-label">Active Learners</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">12</div>
            <div className="stat-label">Regional Languages</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Completion Rate</div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;