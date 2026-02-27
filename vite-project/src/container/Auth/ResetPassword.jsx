import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        `http://10.76.72.140:3000/api/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password, confirmPassword }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Password changed successfully");
      navigate("/login");
    } catch (error) {
      alert("Server error");
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

        {/* LOGO EXACT MATCH */}
        <h1 className="text-3xl font-bold text-black">
          KeyArea<span className="text-red-600">1</span>
        </h1>

        <p className="text-gray-500 text-xs tracking-[2px] mb-6">
          Builders & Developers
        </p>

        <h2 className="mb-5 text-black font-semibold text-xl">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-3 px-4 py-3 rounded-lg border border-gray-300 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mt-3 px-4 py-3 rounded-lg border border-gray-300 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
          />

          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-lg bg-black text-white font-semibold transition hover:bg-gray-900"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;