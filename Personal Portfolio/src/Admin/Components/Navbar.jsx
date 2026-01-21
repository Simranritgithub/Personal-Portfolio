import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  PlusSquare,
  Bell,
  UserCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";

/* ---------- Navbar ---------- */
const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
    //console.log(storedUser.name||"admin")
  }, []);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        bg-white/40 backdrop-blur-xl
        border-b border-white/40
        shadow-[0_10px_30px_-15px_rgba(180,21,255,0.35)]
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          {/* LEFT — Brand */}
          <div className="flex items-center gap-3">
            <div
              className="
                w-9 h-9 rounded-xl
                bg-gradient-to-tr from-[#DF8908] to-[#B415FF]
                flex items-center justify-center
                shadow-md
              "
            >
              <LayoutDashboard size={18} className="text-white" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold text-slate-900">
                Admin Dashboard
              </span>
              <span
                className="
                  text-base font-semibold
                  bg-gradient-to-r from-[#DF8908] to-[#B415FF]
                  bg-clip-text text-transparent
                "
              >
                Personal Portfolio
              </span>
            </div>
          </div>

          {/* CENTER — Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" to="/admin" />
            <NavItem icon={<PlusSquare size={18} />} label="Add Project" to="/admin/add-project" />
            <NavItem icon={<FolderKanban size={18} />} label="Projects" to="/projects" />
          </div>

          {/* RIGHT — User */}
          <div className="flex items-center gap-3">
            <button
              className="
                relative p-2 rounded-full
                bg-white/50 hover:bg-white/80
                transition
              "
            >
              <Bell size={18} className="text-slate-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#B415FF] rounded-full" />
            </button>

            <div
              className="
                flex items-center gap-2
                px-3 py-1.5 rounded-full
                bg-white/60 hover:bg-white/80
                transition
              "
            >
              <UserCircle size={20} className="text-slate-700" />
              <span className="hidden sm:block text-sm font-semibold text-slate-800">
                {user?.name || "Admin"}
              </span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

/* ---------- Nav Item ---------- */
const NavItem = ({ icon, label, to }) => (
  <NavLink
    to={to}
    className="
      flex items-center gap-2
      text-base font-semibold
      text-slate-700
      hover:text-[#B415FF]
      relative
      after:absolute after:-bottom-1 after:left-0
      after:w-0 after:h-[2px]
      after:bg-gradient-to-r after:from-[#DF8908] after:to-[#B415FF]
      hover:after:w-full
      after:transition-all
    "
  >
    {icon}
    {label}
  </NavLink>
);

export default Navbar;
