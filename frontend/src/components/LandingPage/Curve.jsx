import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Curve() {
  return (
    <Box>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
                position: "absolute",
                left: "80%",
                bottom:"50%",
                zIndex: 2,
                transform: "translate(-50%, -50%)", 
                height:"90px",
                width:"200px",
                backgroundColor: "#EFEFEF",
                borderBottomRightRadius:"20px",
                marginBottom:"60px",
                display:"flex",
                justifyContent:"center",
                alignItems:'center',
                // border:"2px solid red",
              }}
          >
          </Box>
        </Box>
    </Box>
  )
}
