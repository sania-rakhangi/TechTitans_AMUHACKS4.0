import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>GaonLearn</h3>
          <p>Empowering rural education through technology and community collaboration.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YT</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Platform</h4>
          <ul>
            <li><Link to="/student-dashboard">Student Dashboard</Link></li>
            <li><Link to="/teacher-portal">Teacher Portal</Link></li>
            <li><Link to="/family-learning">Family Learning</Link></li>
            <li><Link to="/community">Community</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/accessibility">Accessibility</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GaonLearn. All rights reserved.</p>
        <p>Designed with ❤️ for rural education</p>
      </div>
    </footer>
  );
};

export default Footer;