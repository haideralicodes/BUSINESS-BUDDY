import React from 'react'
import {
    Box,
    Button,
    Typography,
    TextField,
    Link
  } from '@mui/material';

  import introImg from './assets/intro-bg.jpg';
  import features from './assets/about.jpg';

function About() {
  return (
    <>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px", mb:20}}>
            <img src={features} style={{}} />
            <Box>
                <Typography fontSize={50} fontWeight={600} color='black'>ABOUT US</Typography>
                <hr />
                <br /><br />
                <Typography fontSize={17} color='black' sx={{width:"600px", textAlign:"justify"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <br />
                <Typography fontSize={17} color='black' sx={{width:"600px", textAlign:"justify"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <br />
            </Box>
        </Box>
    </>
  )
}

export default About