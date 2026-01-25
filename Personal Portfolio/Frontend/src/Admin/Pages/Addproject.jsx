import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import API from "../../API/axios.js";

const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-white/80 
        backdrop-blur-xl 
        border border-white/30 
        rounded-2xl 
        shadow-xl 
        p-6 mt-4
        ${className}
      `}
    >
      {children}
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-tr from-[#DF8908] to-[#B415FF]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          bg-white/20
          backdrop-blur-md
          border border-white/30
          rounded-lg
          px-3 py-2
          text-slate-700
          placeholder-slate-650
          focus:outline-none
          focus:ring-2 focus:ring-white/40
        "
      />
    </div>
  );
};

const Addproject = () => {
  const [file, setFile] = useState(null);

  const [form, setform] = useState({
    title: "",
    description: "",
    imagetype: "",
    github: "",
    tech: "",
  });

  const handleonChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const HandleonAdd = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("tech", form.tech);
      formData.append("github", form.github);
      formData.append("imagetype", form.imagetype);
      formData.append("file", file); // 🔥 MOST IMPORTANT

      const res = await API.post("/add/project", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        alert("Project added successfully");
        setform({
          title: "",
          description: "",
          imagetype: "",
          github: "",
          tech: "",
        });
        setFile(null);
      }
    } catch (error) {
      console.error("Error while adding project:", error);
    }
  };

  return (
    <div className="min-h-screen w-full  bg-gradient-to-br from-[#DF8908] to-[#B415FF]">
      <Navbar />

      <div className="flex justify-center px-4 pt-28">
        <main className=" max-w-4xl w-full ">
          <div className="flex flex-col justify-items-start mb-8 ">
            <h1 className="text-4xl font-extrabold text-white">Admin.Panel</h1>
            <p className="text-2xl font-bold text-white/80 my-2">
              Publish Your Project
            </p>
          </div>

          <GlassCard>
            <form onSubmit={HandleonAdd} className="mt-4 space-y-5">
              <InputField
                label="Title"
                name="title"
                value={form.title}
                placeholder="Enter your project title"
                onChange={handleonChange}
              />
              <InputField
                label="Description"
                name="description"
                value={form.description}
                placeholder="Enter your project description"
                onChange={handleonChange}
              />

              <InputField
                label="Tech"
                name="tech"
                value={form.tech}
                placeholder="Enter Tech Stack"
                onChange={handleonChange}
              />

              <InputField
                label="Github"
                name="github"
                value={form.github}
                placeholder="Provide Github link"
                onChange={handleonChange}
              />
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <select
                name="imagetype"
                value={form.imagetype}
                onChange={handleonChange}
                className="bg-gradient-to-br from-[#ff9e0c] to-[#b737f3] text-slate-800 rounded-xl px-4 py-2"
              >
                <option value="">Select image type</option>
                <option value="Png">Png</option>
                <option value="Jpg">Jpg</option>
                <option value="Jpeg">Jpeg</option>
                <option value="Svg">Svg</option>
              </select>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-origin-padding bg-gradient-to-br from-[#DF8908] to-[#B415FF] text-white text-base rounded-xl shadow-transparent shadow-2xl px-4 py-2 "
                >
                  Add Project
                </button>
              </div>
            </form>
          </GlassCard>
        </main>
      </div>
    </div>
  );
};

export default Addproject;
