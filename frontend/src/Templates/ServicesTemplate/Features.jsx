import React from 'react'
import {
    Box,
    Button,
    Typography,
    TextField,
    Link
  } from '@mui/material';

  import introImg from './assets/intro-bg.jpg';
  import features from './assets/features.jpg';

function Features() {
  return (
    <>
      <Box
        sx={{
          height: "80vh", // Set the height of the section
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Typography fontSize={50} mt={10} fontWeight={600} color='black'>
                FEATURES
            </Typography>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px", mt:6}}>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={features} style={{height:"90px"}} />
                    <Typography fontSize={25} fontWeight={600} color='black'>
                        Lorem ipsum
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='black'>
                        Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                    </Typography>
                </Box>

                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={features} style={{height:"90px"}} />
                    <Typography fontSize={25} fontWeight={600} color='black'>
                        Lorem ipsum
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='black'>
                        Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                    </Typography>
                </Box>

                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={features} style={{height:"90px"}} />
                    <Typography fontSize={25} fontWeight={600} color='black'>
                        Lorem ipsum
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='black'>
                        Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                    </Typography>
                </Box>

            </Box>
        </Box>
      </Box>
    </>
  )
}

export default Features