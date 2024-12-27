import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/Signup');
  };

  return (
    <div className='nav'>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-items">
          <li><Link>Home</Link></li>
          <li><Link to="#benefit">Social</Link></li>
          <li><Link to="#gen">Web Gen</Link></li>
          <li><Link to="#pricing">Pricing</Link></li>
          <li><Link to="#call">Info</Link></li>
        </ul>
        <div className="buttons">
          <button className='signup' onClick={navigateToSignup}>Sign Up</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;