import React from 'react';
import { Link } from 'react-router-dom';
import './FeatureCard.css';

const FeatureCard = ({ title, description, color, link }) => {
  return (
    <div className="feature-card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="feature-link">
        Explore
      </Link>
    </div>
  );
};

export default FeatureCard;