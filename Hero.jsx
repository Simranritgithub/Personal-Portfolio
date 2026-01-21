import React from 'react';
import './Hero.css'
import Simran  from '../../assets/Simran Photo.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero =()=>{
  return(
    <div id="Home" className='hero'>
      <img src={Simran} alt="" />
      <h1><span>I'm Simran Rout</span> ,Full Stack Developer</h1>
      <p>Full Stack Developer crafting modern   and efficient web applications.</p>
      <div className='hero-action'>
      <div className='hero-connect'><AnchorLink className='anchor-link'offset={50} href='#contact' >Connect with me</AnchorLink></div><div className='hero-resume'>
          <a href="/Simran_Rout_Resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;