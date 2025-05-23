import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    console.log("Trying to login with:", formData);

    const { data: signInData, error: signInError } =
      await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

    if (signInError) {
      console.error("Login error:", signInError);
      setErrors({ password: signInError.message });
      setIsSubmitting(false);
      return;
    }

    const { data: userData, error: userError } = await supabase.auth.getUser();
    const user = userData?.user;

    if (userError || !user) {
      console.error("User fetch error:", userError);
      setErrors({ password: "Unable to fetch user info." });
      setIsSubmitting(false);
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) {
      console.error("Profile fetch error:", profileError);
      setErrors({ password: "Error fetching user profile." });
      setIsSubmitting(false);
      return;
    }

    console.log("User role:", profile.role);

    switch (profile.role) {
      case "student":
        navigate("/student-dashboard");
        break;
      case "teacher":
        navigate("/teacher-portal");
        break;
      case "ngo":
        navigate("/ngo-dashboard");
        break;
      default:
        navigate("/");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-accent-blue to-accent-green p-6 font-comfortaa">
      <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-lg p-8 md:p-10">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-gray-800">
            GaonLearn
          </Link>
          <h2 className="text-xl font-semibold text-gray-700 mt-2">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Continue your educational journey right where you left off
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full mt-1 p-3 border ${
                errors.email ? "border-orange-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.email && (
              <p className="text-orange-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full mt-1 p-3 border ${
                errors.password ? "border-orange-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.password && (
              <p className="text-orange-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Options */}
          <div className="flex flex-col md:flex-row md:items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2 mb-2 md:mb-0">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span>Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full py-3 rounded-full font-semibold text-white transition duration-200 ${
              isSubmitting
                ? "bg-orange-300 cursor-wait"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
