import React from "react";
import "./Footer.css";
import logo from '../../assets/logo.png';


const Footer = () => {
  return (
    <footer className="backClr">
      <div className="footer">
          <div className="s1">
            <img src={logo}/>
          </div>
          <div className="s2">
            <ul className="nav-item">
              <li><a href="#nav">Home</a></li>
              <li><a href="#benefit">Social</a></li>
              <li><a href="#genWeb">Web Gen</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#call">Info</a></li>
            </ul>
          </div>
          <br />
          <div className="s4">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
