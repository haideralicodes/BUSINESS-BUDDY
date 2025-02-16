import React, { useState } from 'react'
import './ProvideBusinessName.css';
import img1 from '../../assets/img1.avif'
import img2 from '../../assets/img2.avif'
import img3 from '../../assets/img3.avif'
import img4 from '../../assets/img4.avif'
import img5 from '../../assets/img5.avif'
import img6 from '../../assets/img6.avif'
import img7 from '../../assets/img7.avif'
import img8 from '../../assets/img8.avif'
import img9 from '../../assets/img9.avif'
import img10 from '../../assets/img10.avif'
import img11 from '../../assets/img11.avif'
import img12 from '../../assets/img12.avif'
import img13 from '../../assets/img6.avif'
import img14 from '../../assets/img7.avif'
import img15 from '../../assets/img8.avif'
import img16 from '../../assets/img9.avif'
import img17 from '../../assets/img10.avif'
import img18 from '../../assets/img11.avif'
import img19 from '../../assets/img12.avif'
import img20 from '../../assets/img5.avif'
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

const images = [{ imgSrc: img1},{ imgSrc: img2},{ imgSrc: img3},{ imgSrc: img4},{ imgSrc: img5},{ imgSrc: img6},{ imgSrc: img7},{ imgSrc: img8},{ imgSrc: img9},{ imgSrc: img10 },{ imgSrc: img11 },{ imgSrc: img12 },{ imgSrc: img13 },{ imgSrc: img14 },{ imgSrc: img15 },{ imgSrc: img16 },{ imgSrc: img17 },{ imgSrc: img18 },{ imgSrc: img19 },{ imgSrc: img20 }];

function ProvideBusinessName() {

  const[brandname, setBrandName] = useState('')

  const column1 = images.slice(0, 5);
  const column2 = images.slice(5, 10);
  const column3 = images.slice(10, 15);
  const column4 = images.slice(15, 20);
  const column5 = images.slice(20, 25);

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/provide-brand-story');
    localStorage.setItem('businessName', brandname);
    console.log(brandname+ "\n");
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column">{column1.map((img, idx) => <img key={idx} src={img.imgSrc} alt="" />)}</div>
        <div className="column">{column2.map((img, idx) => <img key={idx} src={img.imgSrc} alt="" />)}</div>
        <div className="column">{column3.map((img, idx) => <img key={idx} src={img.imgSrc} alt="" />)}</div>
        <div className="column">{column4.map((img, idx) => <img key={idx} src={img.imgSrc} alt="" />)}</div>
        <div className="column">{column5.map((img, idx) => <img key={idx} src={img.imgSrc} alt="" />)}</div>
      </div>

      <div className="card">
        <Typography variant="h1" color='#000000' fontWeight={550} fontSize={30} gutterBottom textAlign="center" marginTop="20px" marginBottom="20px">
        Provide Your Business Name
        </Typography>
        <TextField 
          label="Name"
          variant='outlined'
          required 
          value={brandname}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <Button 
        onClick={handleContinue}
        sx={{ position:"fixed", top:280, height:"60px", backgroundColor: "#6943C8", color:"white", border:"none", width:"420px", fontSize:"17px", fontWeight:"550", borderRadius:"10px", transition:"0.5s ease-in-out", 
          ":hover":{backgroundColor:"#3E037E", color:"white"}
          }}
        >
          Continue
          <lord-icon
            src="https://cdn.lordicon.com/vduvxizq.json"
            trigger="loop"
            colors="primary:#ffffff"
            style={{heigh:"50px", width:"50px"}}>
          </lord-icon>
        </Button>
      </div>

    </div>
  )
}

export default ProvideBusinessName