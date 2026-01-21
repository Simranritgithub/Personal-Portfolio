import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import GlassCard from "../Components/GlassCard";
import API from "../../API/axios";
import { useNavigate } from "react-router-dom";

/* ---------- STAT COMPONENT ---------- */
const Stat = ({ title, value }) => (
  <div>
    <p className="text-base uppercase tracking-widest font-bold bg-clip-text text-transparent bg-gradient-to-tr from-[#DF8908] to-[#B415FF]">
      {title}
    </p>
    <p className="mt-2 text-4xl font-extrabold text-slate-900">
      {value}
    </p>
  </div>
);

/* ---------- PROJECT ROW ---------- */
const ProjectRow = ({ name, description, tech, date }) => {
  const techArray = Array.isArray(tech)
    ? tech.flatMap(t => (t.includes(",") ? t.split(",") : t))
    : [];

  return (
    <div className="flex justify-between items-start py-4">
      <div className="flex flex-col gap-2 max-w-xl">
        <span className="font-bold bg-clip-text text-start text-transparent bg-gradient-to-tr from-[#DF8908] to-[#B415FF]">
          {name}
        </span>

        <p className="text-sm text-slate-600">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {techArray.map((t) => (
            <span
              key={t}
              className="text-xs font-normal  text-white px-3 py-1 rounded-full bg-gradient-to-tr from-[#DF8908] to-[#B415FF]"
            >
              {t.trim()}
            </span>
          ))}
        </div>
      </div>

      <span className="text-sm text-slate-500 whitespace-nowrap">
        {new Date(date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
    </div>
  );
};

/* ---------- ADMIN DASHBOARD ---------- */
const Admin = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalprojects,setTotalprojects]=useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/get/projects");
        if (res.data.success) {
          setProjects(res.data.projects);
          setTotalprojects(res.data.totalprojects)
        }
      } catch (error) {
        console.error(error.response?.data?.error || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const recentProjects = [...projects]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DF8908] to-[#B415FF] pt-24 px-6">
      <Navbar />

      <main className="max-w-7xl mx-auto ">

        {/* HEADER */}
        <header>
          <h1 className="text-4xl font-extrabold text-white">
            Admin Dashboard
          </h1>
          <p className="text-white/80 mt-2">
            Manage your portfolio content
          </p>
        </header>

        {/* STATS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard>
            <Stat title="Total Projects" value={totalprojects} />
          </GlassCard>

          <GlassCard>
            <Stat title="Visitors" value="124" />
          </GlassCard>

          <GlassCard>
            <Stat title="Messages" value="3" />
          </GlassCard>
        </section>

        {/* QUICK ACTIONS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <GlassCard>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Add Project
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Create and publish a new project
            </p>

            <button
              onClick={() => navigate("/admin/add-project")}
              className="mt-6 px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#DF8908] to-[#B415FF] hover:scale-105 transition"
            >
              Add Project
            </button>
          </GlassCard>

          <GlassCard>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Manage Projects
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              View, edit or delete projects
            </p>

            <button
              onClick={() => navigate("/projects")}
              className="mt-6 px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#DF8908] to-[#B415FF] hover:scale-105 transition"
            >
              Manage Projects
            </button>
          </GlassCard>
        </section>

        {/* RECENT PROJECTS */}
        <section>
          <GlassCard>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              Recent Projects
            </h2>

            {loading ? (
              <p className="text-slate-500">Loading projects...</p>
            ) : recentProjects.length === 0 ? (
              <p className="text-slate-500">No projects yet</p>
            ) : (
              <div className="divide-y divide-slate-200">
                {recentProjects.map((project) => (
                  <ProjectRow
                    key={project._id}
                    name={project.title}
                    description={project.description}
                    tech={project.tech}
                    date={project.createdAt}
                  />
                ))}
              </div>
            )}
          </GlassCard>
        </section>

      </main>
    </div>
  );
};

export default Admin;
