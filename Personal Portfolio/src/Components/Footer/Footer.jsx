import React from "react";
import './Footer.css';
const GlassCard = ({ children, className = "" }) => (
  <div
    className={`
      bg-white dark:bg-black
      backdrop-blur-lg
      border border-white/40 dark:border-white/20
      rounded-3xl
      shadow-[0_18px_35px_-15px_rgba(0,0,0,0.2)]
      mx-[10%] sm:mx-[5%] md:mx-[8%] px-8 py-4 mt-16
      ${className}
    `}>
    {children}</div>

);
const Footer =()=>{
  return(
    <GlassCard>
    <div className="flex flex-col justify-center items-center ">

  <div className="text-base sm:text-lg lg:text-3xl  font-bold bg-clip-text  text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF] ">
    <p>I'm a Full Stack Developer
 crafting modern   and efficient web applications.</p>
  </div>
  <div className="mt-6 flex flex-row gap-4">
    <div className=" flex flex-row  gap-8 px-4 py-2  ">
      <input type="email" placeholder="Enter your email" className=" text-base focus:ring-2 focus:ring-orange-500 outline-none rounded-xl shadow-2xl px-4 py-2 dark:text-slate-700"/>
    </div>
    <div className="bg-gradient-to-br from-[#DF8908] to-[#B415FF] px-2 sm:px-4 lg:px-8 py-2 sm:py-4 rounded-2xl shadow-2xl text-white text-base ">SUBSCRIBE</div>
  </div>
</div>
<hr />
<div className=" flex flex-col justify-between items-center text-base sm:text-lg lg:text-2xl text-slate-600 mt-8 dark:text-gray-100">
  <p className="footer-bottom-left text-base sm:text-lg lg:text-xl">© 2025 Simran Rout. All rights are Reserved.</p>
  <div className=" mt-4 flex flex-row gap-8 text-lg">
    <p>Terms of Services</p>
    <p>Privacy Policy</p>
    <p>Connect with me</p>
  </div>
</div>
    
  </GlassCard>);
}
export default Footer;