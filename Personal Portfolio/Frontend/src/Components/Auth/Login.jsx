import React, { useState } from "react";
import API from "../../API/axios";
import { useNavigate } from "react-router-dom";

const GlassCard = ({ children, className }) => {
  return (
    <div
      className={`bg-white/50 backdrop-blur-lg border border-white/40 ${className}`}
    >
      {children}
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const Handleonchange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const Handleonsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/login/admin", form);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user",JSON.stringify(response.data.data))

      if (response.data.success) {
        alert("Login Successful!");
        navigate("/admin");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-[#DF8908] to-[#B415FF]">
      <GlassCard className="w-full max-w-md p-8 rounded-xl shadow-lg">
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-center text-2xl font-semibold text-white tracking-wide">
            Login to your Account
          </h1>
          <p className="text-center text-lg font-medium text-pink-500">
            Admin Login
          </p>
        </div>

        {/* FORM (now correct) */}
        <form onSubmit={Handleonsubmit} className="space-y-5">
          <div>
            <label className="block text-slate-800 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={Handleonchange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-slate-800 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={Handleonchange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white font-bold py-2 rounded-lg hover:from-[#B415FF] hover:to-[#DF8908] transition"
          >
            Login
          </button>
        </form>
      </GlassCard>
    </div>
  );
};

export default Login;
