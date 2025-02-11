import React from 'react'
import Box from '@mui/material/Box';
import hero from '../../assets/work.webp'
import Typography from '@mui/material/Typography';
import RotateBtn from '../../components/LandingPage/RotateBtn'
import Curve from '../../components/LandingPage/Curve'

function HeroSection() {

  return (
    <Box id="hero" sx={{pb:5, backgroundColor:"#EFEFEF", display:"flex", flexDirection:"row", height:"87vh", width:"98.9vw", alignItems:"center", justifyContent:"center"}}>
      <Box sx={{ml:10, display:"flex", flexDirection:"column", height:"100%", width:"50%", alignItems:"start", justifyContent:"center"}}>
        <Typography sx={{  fontWeight:"600", opacity:1, fontSize:"11.11vw", lineHeight:"8.89vw", textTransform:"uppercase"}}>grow</Typography>
        <Typography sx={{  fontWeight:"600", opacity:1, fontSize:"11.11vw", lineHeight:"8.89vw", textTransform:"uppercase"}}>your</Typography>
        <Typography sx={{  fontFamily:"BlindsAudience", fontStyle:"italic", fontSize:"13.11vw", textTransform:"uppercase", lineHeight:"11vw", textTransform:"uppercase"}}>Business</Typography>
        <hr style={{width:"530px", height:"7px", backgroundColor:"#EE64FF", border:"none", transform: "rotate(-5deg)", transformOrigin: "bottom left",}}/>
      </Box>
      <Box sx={{display:"flex", flexDirection:"column", height:"100%", width:"50%", alignItems:"start", justifyContent:"center"}}>
        <Box sx={{ position: "relative" }}>
          <Box sx={{
            position: "absolute",
            top: "55%",
            left: "0%",
            zIndex: 2,
            transform: "translate(-50%, -50%)", 
          }}>
            <Curve/>
            <RotateBtn/>
          </Box>
          <img src={hero} style={{marginTop:"70px", borderRadius:"30px", height:"500px", width:"1000px"}}/>
        </Box>
      </Box>
    </Box>
  )
}

export default HeroSection