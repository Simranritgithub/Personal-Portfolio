import React from 'react';
//import './Hero.css'
import Simran  from '../../assets/Simran Photo.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero =()=>{
  return(
    
    <div id="Home" className='bg-white dark:bg-black flex flex-col justify-center items-center mt-16 mx-[10%] sm:mx-[5%] md:mx-[8%] rounded-2xl shadow-xl pt-4' >
      <img
  src={Simran}
  alt=""
  className="w-full sm:w-40 border-2 sm:border-white rounded-2xl shadow-xl sm:h-[180px] object-cover flex justify-center mx-auto mb-4 mt-4"
/>


      <h1 className='hero-heading  mb-4 flex flex-row justify-center text-center gap-2' data-aos="fade-down" data-aos-delay="100">
        <span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent text-3xl font-bold tracking-tighter'>I'm Simran Rout</span> <span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent text-3xl font-bold tracking-tighter'>Full Stack Developer</span>
      </h1>
      <p className=' text-lg font-medium tracking-tighter text-center text-slate-900 dark:text-gray-100' data-aos="fade-up" data-aos-delay="300">Full Stack Developer crafting modern   and efficient web applications.</p>
      <div className='flex flex-row gap-4 mt-6 justify-center mb-10' data-aos="zoom-in" data-aos-delay="500">
      <div ><AnchorLink className='  flex justify-center sm:px-8 bg-gradient-to-r from-[#DF8908] to-[#B415FF] border-2 border-white rounded-[40px] shadow-xl w-[40] px- py-2 cursor-pointer transition-all duration-300 ease-in-out'offset={50} href='#contact' >Connect with me</AnchorLink></div>
      <div className="bg-gradient-to-r from-[#DF8908] to-[#B415FF] border-2 border-white rounded-[40px] shadow-xl w-[40] px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out">
  <a
    href="/Simran_Rout_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-aliceblue text-center no-underline flex justify-center text-base sm:px-10"
  >
    My Resume
  </a>
</div>

      </div>
    </div>
  )
}

export default Hero;