import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: '',
    village: '',
    district: '',
    state: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    // User type validation
    if (!formData.userType) {
      newErrors.userType = 'Please select your role';
    }
    
    // Location validation
    if (!formData.village.trim()) {
      newErrors.village = 'Village/Town name is required';
    }
    
    if (!formData.district.trim()) {
      newErrors.district = 'District is required';
    }
    
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    
    // Terms agreement validation
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms and Conditions';
    }
    
    return newErrors;
  };

  const handleNextStep = () => {
    const stepErrors = validateStep1();
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const stepErrors = validateStep2();
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Signup submitted:', formData);
      setIsSubmitting(false);
      
      // Redirect to onboarding or dashboard after successful signup
      navigate('/onboarding');
    }, 1500);
  };

  return (
    <div className="signup-page">
      <div className="rural-background">
        <div className="sky"></div>
        <div className="mountains"></div>
        <div className="hills"></div>
        <div className="fields"></div>
      </div>
      
      <div className="signup-container">
        <div className="signup-header">
          <Link to="/" className="logo-link">
            <h1 className="logo">GaonLearn</h1>
          </Link>
          <h2 className="subtitle">Join Our Community</h2>
          <p className="signup-description">Start your educational journey with GaonLearn today</p>
          
          {/* Step indicator */}
          <div className="step-indicator">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-label">Account</div>
            </div>
            <div className="step-connector"></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-label">Profile</div>
            </div>
          </div>
        </div>
        
        <form className="signup-form" onSubmit={handleSubmit}>
          {step === 1 ? (
            <div className="step-content">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'error' : ''}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="Enter your 10-digit phone number"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                  placeholder="Create a password"
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? 'error' : ''}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
              
              <button type="button" className="next-button" onClick={handleNextStep}>
                Continue
              </button>
            </div>
          ) : (
            <div className="step-content">
              <div className="form-group">
                <label>I am a</label>
                <div className="user-type-options">
                  <div className={`user-type-option ${formData.userType === 'student' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      id="student"
                      name="userType"
                      value="student"
                      checked={formData.userType === 'student'}
                      onChange={handleChange}
                    />
                    <label htmlFor="student">Student</label>
                  </div>
                  <div className={`user-type-option ${formData.userType === 'teacher' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      id="teacher"
                      name="userType"
                      value="teacher"
                      checked={formData.userType === 'teacher'}
                      onChange={handleChange}
                    />
                    <label htmlFor="teacher">Teacher</label>
                  </div>
                  <div className={`user-type-option ${formData.userType === 'parent' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      id="parent"
                      name="userType"
                      value="parent"
                      checked={formData.userType === 'parent'}
                      onChange={handleChange}
                    />
                    <label htmlFor="parent">Parent</label>
                  </div>
                </div>
                {errors.userType && <span className="error-message">{errors.userType}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="village">Village/Town</label>
                <input
                  type="text"
                  id="village"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  className={errors.village ? 'error' : ''}
                  placeholder="Enter your village or town name"
                />
                {errors.village && <span className="error-message">{errors.village}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className={errors.district ? 'error' : ''}
                  placeholder="Enter your district"
                />
                {errors.district && <span className="error-message">{errors.district}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={errors.state ? 'error' : ''}
                  placeholder="Enter your state"
                />
                {errors.state && <span className="error-message">{errors.state}</span>}
              </div>
              
              <div className="form-group terms-group">
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <label htmlFor="agreeTerms">
                    I agree to the <Link to="/terms" className="terms-link">Terms and Conditions</Link> and <Link to="/privacy" className="terms-link">Privacy Policy</Link>
                  </label>
                </div>
                {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
              </div>
              
              <div className="button-group">
                <button type="button" className="back-button" onClick={handlePrevStep}>
                  Back
                </button>
                <button 
                  type="submit" 
                  className={`signup-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>
            </div>
          )}
        </form>
        
        <div className="signup-footer">
          <p className="login-prompt">
            Already have an account? <Link to="/login" className="login-link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;