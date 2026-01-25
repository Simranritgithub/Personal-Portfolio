import React, { useState } from "react";
import logo from "../../assets/logo.svg.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Folder,
  FolderArchiveIcon,
  FolderCheckIcon,
  FolderCodeIcon,
  FoldVerticalIcon,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  Code,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const NavItem = ({ icon: Icon, label, to }) => {
  
  return (
    <a
      href={to}
      className="
        flex items-center gap-2
        text-sm font-semibold
        text-slate-800
        hover:text-transparent
        hover:bg-clip-text
        hover:bg-gradient-to-tr from-[#DF8908] to-[#B415FF]
        transition-all duration-300
      "
    >
      {Icon && <Icon size={16} />}
      {label}
    </a>
  );
};

const Navbar = ({ darkmode, setdarkmode }) => {
  // const [menu, setMenu] = useState("HOME");
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate =useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-xl border-b border-white/40 shadow-[0_10px_30px_-15px_rgba(180,21,255,0.35)]">
      {/* Container */}
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#DF8908] to-[#B415FF] h-9 w-9">
            <FoldVerticalIcon size={18} className="text-white" />
          </div>

          <span className="text-lg font-extrabold text-slate-900">
            Personal Portfolio
          </span>
        </div>

        {/* Right: Navigation */}
        <div className="flex items-center gap-8">
          <NavItem icon={Home} label="Home" to="#home" />
          <NavItem icon={User} label="About" to="#about" />
          <NavItem icon={Code} label="services" to='#service'/>
          <NavItem icon={Briefcase} label="Projects" to="#work" />
          <NavItem icon={Mail} label="Contact" to="#contact" />
        </div>
        <div className=" mx-4 ">
        <button onClick={()=>navigate("/login/admin")} className="rounded-xl shadow-transparent shadow-2xl bg-gradient-to-tr from-[#DF8908] to-[#B415FF] text-start text-white font-semibold text-base px-4 py-2">Login as Admin</button>
      </div>
      
    

    {/* // <div className="flex items-center justify-between p-5 bg-white dark:bg-[#1f1f1f] text-black dark:text-white relative text-base shadow-md transition-colors duration-300 md:mx-[4%] mx-[10%] sm:mx-[5%] rounded-2xl ">
    //   {/* Logo */}
    {/* //   <img src={logo} alt="Logo" className="h-[50px] w-[100px]" />

    //   {/* Menu Toggle Button */}
    {/* //   <button */} 
    {/* //     className="sm:hidden absolute top-5 right-5 z-20 text-2xl" */}
    {/* //     onClick={() => setIsMenuOpen(!isMenuOpen)}
    //   >
    //     {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
    //   </button> */} 

       {/* Navigation Menu */}
    {/* //   <ul */}
    {/* //     className={`
    //       flex gap-5 list-none
    //       flex-col fixed top-0 right-0 h-screen w-2/5
    //       bg-gray-100 dark:bg-[#333] items-center justify-center
    //       transition-all duration-500 ease-in-out
    //       ${isMenuOpen ? "right-0 opacity-100" : "right-[-100%] opacity-0"}
    //       sm:flex sm:flex-row sm:static sm:h-auto sm:w-auto sm:bg-transparent sm:gap-16 sm:opacity-100
    //     `}
    //   > */}
         {/* Close Button for Mobile */}
    {/* //     <li */}
    {/* //       className="sm:hidden absolute top-2 right-5 cursor-pointer"
    //       onClick={() => setIsMenuOpen(false)}
    //     >
    //       <X size={30} className="text-black dark:text-white" />
    //     </li> */}

        {/* Menu Items */}
    {/* //     {["HOME", "ABOUT ME", "SERVICES", "PORTFOLIO", "CONTACT"].map( */}
    {/* //       (item,index) => (
    //         <li key={item}>
    //           <AnchorLink */}
    {/* //             className={`cursor-pointer font-semibold text-lg transition-all
    //               bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent
    //               hover:opacity-80`}
    //             href={`#${item.replace(" ", "")}`}
    //             onClick={() => { */}
    {/* //               setMenu(item);
    //               setIsMenuOpen(false);
    //             }} data-aos="fade-left"  data-aos-duration="1000" data-aos-delay={index*150}
    //           >
    //             {item}
    //           </AnchorLink> */}
    {/* //        </li> */}
         
    {/* //   </ul> */}

       {/* Connect Button */}
    {/* //   <div className="hidden sm:block">
    //     <AnchorLink */}
    {/* //       href="#contact"
    //       className=" bg-gradient-to-r from-[#DF8908] to-[#B415FF] px-4 py-2 rounded-full
    //       text-white font-medium hover:scale-110 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1200"
    //     >
    //       CONNECT WITH ME */}
    {/* //     </AnchorLink> */}
    {/* //   </div> */}

      {/* Dark Mode Toggle Button */}
      <div className="ml-3">
        <Button
          variant="outline"
          className="border border-gray-400 dark:border-gray-600 text-sm hover:scale-105 transition-all duration-200"
          onClick={() => setdarkmode(!darkmode)} data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1200"
        >
          {darkmode ? "☀️ Light" : "🌙 Dark"}
        </Button>
      </div></div></nav>
    // </div>
  );
};

export default Navbar;
