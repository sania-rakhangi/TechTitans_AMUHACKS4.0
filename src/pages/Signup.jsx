import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
    village: "",
    district: "",
    state: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email address is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Please enter a valid 10-digit phone number";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password))
      newErrors.password =
        "Password must contain uppercase, lowercase, and number";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.userType) newErrors.userType = "Please select your role";
    if (!formData.village.trim())
      newErrors.village = "Village/Town name is required";
    if (!formData.district.trim()) newErrors.district = "District is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the Terms and Conditions";
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

  const handlePrevStep = () => setStep(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stepErrors = validateStep2();
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Sign up user with Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            phone: formData.phone,
            role: formData.userType,
            village: formData.village,
            district: formData.district,
            state: formData.state,
          },
        },
      });

      if (signUpError) throw signUpError;

      const user = data?.user;

      if (!user) throw new Error("User not returned from Supabase");

      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error.message);
      alert("Signup failed: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative bg-gradient-to-b from-accent-blue to-accent-green  p-6 font-comfortaa">
      <div className="relative z-10 w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-6">
          <Link to="/" className="text-3xl font-bold text-primary-dark">
            GaonLearn
          </Link>
          <h2 className="text-xl font-semibold mt-2">Join Our Community</h2>
          <p className="text-gray-600">
            Start your educational journey with GaonLearn today
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
                step >= 1 ? "bg-primary-dark" : "bg-gray-300"
              }`}
            >
              1
            </div>
            <span className="ml-2 font-medium">Account</span>
          </div>
          <div className="h-0.5 flex-1 bg-gray-300 mx-2"></div>
          <div className="flex items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
                step >= 2 ? "bg-primary-dark" : "bg-gray-300"
              }`}
            >
              2
            </div>
            <span className="ml-2 font-medium">Profile</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <div className="space-y-4">
              <Input
                label="Full Name"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
                placeholder="Enter your full name"
              />
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="Enter your email"
              />
              <Input
                label="Phone Number"
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="Enter your 10-digit phone number"
              />
              <Input
                label="Password"
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="Create a password"
              />
              <Input
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={handleNextStep}
                className="w-full bg-primary-dark text-white py-2 rounded hover:bg-primary-medium"
              >
                Continue
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">I am a</label>
                <div className="flex space-x-4">
                  {["student", "teacher", "parent"].map((role) => (
                    <label
                      key={role}
                      className={`flex items-center space-x-2 p-2 border rounded cursor-pointer ${
                        formData.userType === role
                          ? "border-primary-dark bg-green-50"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="userType"
                        value={role}
                        checked={formData.userType === role}
                        onChange={handleChange}
                      />
                      <span className="capitalize">{role}</span>
                    </label>
                  ))}
                </div>
                {errors.userType && (
                  <p className="text-red-600 text-sm mt-1">{errors.userType}</p>
                )}
              </div>
              <Input
                label="Village/Town"
                id="village"
                name="village"
                value={formData.village}
                onChange={handleChange}
                error={errors.village}
                placeholder="Enter your village or town name"
              />
              <Input
                label="District"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                error={errors.district}
                placeholder="Enter your district"
              />
              <Input
                label="State"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                error={errors.state}
                placeholder="Enter your state"
              />
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label htmlFor="agreeTerms" className="text-sm">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary-dark underline">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary-dark underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.agreeTerms && (
                <p className="text-red-600 text-sm mt-1">{errors.agreeTerms}</p>
              )}
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-dark text-white px-4 py-2 rounded hover:bg-primary-medium disabled:opacity-50"
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </button>
              </div>
            </div>
          )}
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-primary-dark underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

const Input = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}) => (
  <div>
    <label htmlFor={id} className="block mb-1 font-medium">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border rounded ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      placeholder={placeholder}
    />
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);

export default Signup;
