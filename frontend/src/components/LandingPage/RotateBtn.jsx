import React from 'react'
import Box from '@mui/material/Box';

export default function RotateBtn() {

  return (
    <Box>
        <Box sx={{display:"flex",
              justifyContent:"center",
              alignItems:'center', borderRadius:"50%", width:"127px", height:"127px", backgroundColor:"#EFEFEF"}}>
          <Box className="hoverClr rotateBtn"
            sx={{
              height:"110px",
              width:"110px",
              backgroundColor:"black",
              borderRadius:"50%",
              display:"flex",
              justifyContent:"center",
              alignItems:'center',
              fontSize:"70px",
              cursor:"pointer",
              color:"#EE64FF"
            }} 
          >
              <i className="fa-solid fa-arrow-right"></i>
          </Box>
        </Box>
    </Box>
  )
}
