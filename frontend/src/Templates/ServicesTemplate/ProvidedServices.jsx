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

function ProvidedServices() {
  return (
    <>
      <Box
        sx={{
          height: "80vh", 
        }}
      >
        <Box sx={{pb:15, background:"linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Typography fontSize={50} mt={10} fontWeight={600} color='white'>
                OUR SERVICES
            </Typography>

            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px", mt:6}}>
                
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={features} style={{height:"90px"}} />
                    <Typography fontSize={25} fontWeight={600} color='white'>
                        Lorem ipsum
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='white'>
                        Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                    </Typography>
                </Box>

                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={features} style={{height:"90px"}} />
                    <Typography fontSize={25} fontWeight={600} color='white'>
                        Lorem ipsum
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='white'>
                        Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                    </Typography>
                </Box>

                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={features} style={{height:"90px"}} />
                    <Typography fontSize={25} fontWeight={600} color='white'>
                        Lorem ipsum
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='white'>
                        Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                    </Typography>
                </Box>

            </Box>

            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px", mt:6}}>
                
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={features} style={{height:"90px"}} />
                    <Typography fontSize={25} fontWeight={600} color='white'>
                        Lorem ipsum
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='white'>
                        Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                    </Typography>
                </Box>

                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={features} style={{height:"90px"}} />
                    <Typography fontSize={25} fontWeight={600} color='white'>
                        Lorem ipsum
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='white'>
                        Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                    </Typography>
                </Box>

                <Box sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={features} style={{height:"90px"}} />
                    <Typography fontSize={25} fontWeight={600} color='white'>
                        Lorem ipsum
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='white'>
                        Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                    </Typography>
                </Box>
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default ProvidedServices