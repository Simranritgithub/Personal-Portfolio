import React from "react";
import './Footer.css';
const Footer =()=>{
  return(
    <div className="footer">
<div className="footer-top">
  <div className="footer-top-left">
    <p>I'm a Full Stack Developer
 crafting modern   and efficient web applications.</p>
  </div>
  <div className="footer-top-right">
    <div className="footer-email-input">
      <input type="email" placeholder="Enter your email"/>
    </div>
    <div className="footer-subscribe">SUBSCRIBE</div>
  </div>
</div>
<hr/>
<div className="bottom">
  <p className="footer-bottom-left">© 2025 Simran Rout. All rights are Reserved.</p>
  <div className="bottom-right">
    <p>Terms of Services</p>
    <p>Privacy Policy</p>
    <p>Connect with me</p>
  </div>
</div>
    </div>
  )
}
export default Footer;