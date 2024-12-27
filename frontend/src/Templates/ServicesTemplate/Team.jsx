import React from 'react'
import {
    Box,
    Button,
    Typography,
    TextField,
    Link
  } from '@mui/material';

import one from './assets/01.jpg';
import two from './assets/02.jpg';
import three from './assets/03.jpg';
import four from './assets/04.jpg';

function Team() {
  return (
    <>
      <Box
        sx={{
          height: "80vh", // Set the height of the section
          mt:20
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Typography fontSize={50} mt={10} fontWeight={600} color='black'>
                MEET THE TEAM
            </Typography>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", mt:6}}>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={one} />
                    <Typography fontSize={18} fontWeight={600} color='black'>
                        John Doe
                    </Typography>
                    <Typography fontSize={14} sx={{width:"300px", textAlign:"center"}} color='black'>
                        Director
                    </Typography>
                </Box>

                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={two} />
                    <Typography fontSize={25} fontWeight={600} color='black'>
                        Mike Doe
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='black'>
                        Senior Designer
                    </Typography>
                </Box>

                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={three}/>
                    <Typography fontSize={25} fontWeight={600} color='black'>
                        Jane Doe
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='black'>
                        Graphic Designer
                    </Typography>
                </Box>

                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                    <img src={four}/>
                    <Typography fontSize={25} fontWeight={600} color='black'>
                        Karean Doe
                    </Typography>
                    <Typography fontSize={17} sx={{width:"300px", textAlign:"center"}} color='black'>
                        Project Manager
                    </Typography>
                </Box>

            </Box>
        </Box>
      </Box>
    </>
  )
}

export default Team