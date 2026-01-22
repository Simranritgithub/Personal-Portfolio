import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GlassCard from "../Components/GlassCard";
import Navbar from "../Components/Navbar";
import API from "@/API/axios";
import Inputfield from "../Components/Inputfield";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    imageUrl: "",
    type: ""
  });

  const [loading, setLoading] = useState(true);
  const [file,setFile]=useState(null);

  // 🔹 Fetch single project
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await API.get(`/get/project/${id}`);
        if (res.data.success) {
          const p = res.data.getproject[0];
          setForm({
            title: p.title,
            description: p.description,
            tech:p.tech,
            github: p.github,
            imageUrl: p.imageUrl,
            type: p.type
          });
          console.log("project",{
            title: p.title,
            description: p.description,
            tech: Array.isArray(p.tech) ? p.tech.join(", ") : p.tech,
            github: p.github,
            imageUrl: p.imageUrl,
            type: p.type
          })
          setLoading(false);
        }
      } catch (error) {
        console.log(error.response?.data?.message || error.message);
      }
    };
    fetchProject();
  }, [id]);

  // 🔹 Handle Inputfield
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Update project
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", form.title);
    formData.append("description", form.description);
    
    formData.append("github", form.github);
    formData.append("imagetype", form.imagetype);
    formData.append("file", file);
      formData.append("tech",form.tech);

      const res = await API.patch(`/edit/project/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
      if (res.data.success) {
        navigate("/projects");
      }
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#DF8908] to-[#B415FF]">
      <Navbar />

      <div className="flex justify-center px-4 pt-28">
        <main className="w-full md:max-w-5xl">
          
          {/* Header */}
          <div className="flex flex-col mt-8 px-6">
            <h1 className="text-4xl font-bold text-white tracking-tighter">
              Edit Project
            </h1>
            <p className="text-lg text-white -tracking-wider">
              Update your project details
            </p>
          </div>

          {/* Form */}
          {loading ? (
            <GlassCard>
              <p>Loading project...</p>
            </GlassCard>
          ) : (
            <GlassCard>
              <form onSubmit={handleUpdate} className="flex flex-col space-y-6 p-4">

                <Inputfield
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Project Title"
                  
                />
                <div className="flex flex-col"><label className="bg-clip-text text-transparent bg-gradient-to-tr from-[#DF8908] to-[#B415FF] uppercase font-mono font-semibold">Description</label> <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Project Description"
                  rows={4}
                  className="rounded-xl shadow-2xl
   border-b border-white/40 px-4 py-2"
                 
                /></div>
               

                <Inputfield
                  name="tech"
                  value={form.tech}
                  onChange={handleChange}
                  placeholder="Tech stack (comma separated)"
                  
                />

                <Inputfield
                  name="github"
                  value={form.github}
                  onChange={handleChange}
                  placeholder="GitHub URL"
                  
                />

                {/* <Inputfield
                  name="imageUrl"
                  value={form.imageUrl}
                  onChange={handleChange}
                  placeholder="Image URL"
                  
                /> */}

<input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
              <select
                name="imagetype"
                value={form.imagetype}
                onChange={handleChange}
                className="bg-gradient-to-br from-[#ff9e0c] to-[#b737f3] text-slate-800 rounded-xl px-4 py-2"
              >
                <option value="">Select image type</option>
                <option value="Png">Png</option>
                <option value="Jpg">Jpg</option>
                <option value="Jpeg">Jpeg</option>
                <option value="Svg">Svg</option>
              </select>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-gradient-to-tr from-[#DF8908] to-[#B415FF] text-white font-semibold"
                  >
                    Update Project
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 rounded-xl border border-white text-white"
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </GlassCard>
          )}
        </main>
      </div>
    </div>
  );
};

export default EditProject;
