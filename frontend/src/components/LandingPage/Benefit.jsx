import React from 'react';
import schedulePost from '../../assets/schedulePost.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Benefit() {
  return (
    <Box id="benefit" sx={{pb:20, pt:10, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", backgroundColor:"#EFEFEF", width:"98.9vw"}}>
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <Typography sx={{fontSize:"100px", fontFamily:"BlindsAudience"}}>Seamless <span style={{fontFamily:"anzo1", fontSize:"100px", textTransform:"uppercase"}}>Scheduling</span></Typography>
        <Typography sx={{mb:2}}><span style={{fontSize:"100px", fontFamily:"anzo1"}}>On your </span> <span style={{fontFamily:"BlindsAudience", fontSize:"100px", textTransform:"uppercase", fontStyle:"italic", backgroundColor:"#EE64FF", paddingLeft:"10px", paddingRight:"15px", textAlign:"center"}}>social media </span></Typography>
      </Box>
      <Box sx={{}}>
        <img style={{height:"620px", borderRadius:"20px"}} src={schedulePost} />
      </Box>
    </Box>
  );
}

export default Benefit;
