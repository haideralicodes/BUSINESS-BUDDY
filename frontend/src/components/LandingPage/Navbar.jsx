import React from 'react';
import logo from '../../assets/logo.png';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate()
  
  const navigateToSignup = () => {
    navigate('/Signup')
  };

  return (
    <Box id="nav" sx={{backgroundColor:"#EFEFEF", width:"98.9vw", height:"13vh", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
      <Box sx={{ml:10, width:"4%", height:"75px", display:"flex", alignItems:"center", justifyContent:"center"}}><img src={logo} /></Box>
        <Box sx={{mr:10, height:"100%", width:"95%", gap:"50px", display:"flex", alignItems:"center", justifyContent:"right"}}>
          <nav style={{fontSize:"15px", height:"100%", gap:"50px", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <a href="#">Home</a>
            <a href="#benefit">Social</a>
            <a href="#genWeb">Web Gen</a>
            <a href="#pricing">Pricing</a>
            <a href="#call">Info</a>
          </nav>
          <button onClick={navigateToSignup} className='btnHover'>Get Started</button>
        </Box>
    </Box>
  );
}

export default Navbar;