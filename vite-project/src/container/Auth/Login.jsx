import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Invalid credentials");
        return;
      }

      alert("Login successful");

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("user", JSON.stringify(data.user));
window.dispatchEvent(new Event("loginStateChanged"));

      if (data.user.role === "Builder") {
        navigate("/builder/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Server error. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-5 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=3000&q=60')",
      }}
    >
      <div className="bg-white w-full max-w-[420px] p-10 rounded-2xl shadow-xl text-center">
        
        {/* LOGO TEXT EXACT MATCH */}
        <h1 className="text-3xl font-bold text-black">
          KeyArea<span className="text-red-600">1</span>
        </h1>

        <p className="text-gray-500 text-xs tracking-[2px] mb-6">
          Builders & Developers
        </p>

        <h2 className="mb-5 text-black font-semibold text-xl">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            className="w-full mt-3 px-4 py-3 rounded-lg border border-gray-300 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
          />
          {errors.email && (
            <span className="text-red-500 text-xs text-left block mt-1">
              {errors.email}
            </span>
          )}

          {/* Password */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full mt-3 px-4 py-3 pr-11 rounded-lg border border-gray-300 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
            />

            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-lg hover:text-black"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {errors.password && (
            <span className="text-red-500 text-xs text-left block mt-1">
              {errors.password}
            </span>
          )}

          {/* BUTTON EXACT NAVBAR STYLE */}
          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-lg bg-black text-white font-semibold tracking-wide transition hover:bg-gray-900 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <p
          onClick={() => navigate("/forgot-password")}
          className="mt-4 text-sm text-black hover:text-red-600 cursor-pointer"
        >
          Forgot Password?
        </p>

        <p className="mt-5 text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-red-600 font-semibold cursor-pointer hover:underline"
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;