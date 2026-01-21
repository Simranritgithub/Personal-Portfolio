import React, { useState } from "react";
import API from "../../API/axios";
import { Navigate, useNavigate } from "react-router-dom";

const GlassCard = ({ children, className }) => {
  return (
    <div
      className={`bg-white/50 backdrop-blur-lg border border-white/40 ${className}`}
    >
      {children}
    </div>
  );
};

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/register", form);

      if (res.data.success) {
        alert("Registration Successful!");
        navigate("/login/admin");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-[#DF8908] to-[#B415FF]">
      <GlassCard className="w-full max-w-md p-8 rounded-xl shadow-lg">

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-center text-2xl font-semibold text-white tracking-wide">
            Create Your Account
          </h1>
          <p className="text-center text-lg font-medium text-pink-500">
            Admin Registration
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div ><label className="block text-white mb-2" >Role</label>
          <input type="role"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Admin"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"></input>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white font-bold py-2 rounded-lg hover:from-[#B415FF] hover:to-[#DF8908] transition"
          >
            Register
          </button>
          <div className="flex flex-col justify-center  justify-items-start">
          <span className="text-base md:text-lg font-semibold text-pink-950">Already have account? <button onClick={()=>navigate('/login/admin')} className="bg-gradient-to-tl from-[#DF8908] to-[#B415FF] text-white text-base font-medium px-4 py-2 rounded-xl shadow-2xl hover:from-[#B415FF] hover:to-[#DF8908]">LOGIN</button></span></div>
        </form>
      </GlassCard>
    </div>
  );
};

export default Register;
