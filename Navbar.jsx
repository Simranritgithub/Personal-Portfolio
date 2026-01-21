import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState("HOME");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={logo} alt="Logo" height="60" width="100" />

      {/* Menu Toggle Button */}
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Close Button (Visible Only in Mobile View) */}
      <li className="close-menu" onClick={() => setIsMenuOpen(false)}>
          <X size={30} color="white" />
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#Home">
            <p
              onClick={() => {
                console.log("HOME Clicked");
                setMenu("HOME");
                setIsMenuOpen(false);
              }}
            >
              HOME
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#About">
            <p
              onClick={() => {
                console.log("ABOUT ME Clicked");
                setMenu("ABOUT");
                setIsMenuOpen(false);
              }}
            >
              ABOUT ME
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#services">
            <p
              onClick={() => {
                console.log("SERVICES Clicked");
                setMenu("SERVICES");
                setIsMenuOpen(false);
              }}
            >
              SERVICES
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#mywork">
            <p
              onClick={() => {
                console.log("PORTFOLIO Clicked");
                setMenu("PORTFOLIO");
                setIsMenuOpen(false);
              }}
            >
              PORTFOLIO
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact">
            <p
              onClick={() => {
                console.log("CONTACT Clicked");
                setMenu("CONTACT");
                setIsMenuOpen(false);
              }}
            >
              CONTACT
            </p>
          </AnchorLink>
        </li>

       
        
      </ul>

      {/* Connect Button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#Contact">
          CONNECT WITH ME
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
