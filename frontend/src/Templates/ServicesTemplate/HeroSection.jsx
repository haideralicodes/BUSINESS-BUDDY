import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

import {
  Box,
  Button,
  Typography,
  TextField,
  Link
} from '@mui/material';

import introImg from './assets/intro-bg.jpg';

function HeroSection({ onAddSectionClick }) {
  const [isSelected, setIsSelected] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  const [content, setContent] = useState({
    heading: 'Discover Our Style',
    paragraph: 'Fashion for All Ages',
  });

  const heroRef = useRef(null);

  const handleClickInside = () => {
    setShowButton(true);
    setIsSelected(true);
  };

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const handleContentChange = (value, field) => {
    const newContent = { ...content, [field]: value };
    setContent(newContent);
    localStorage.setItem('heroContent', JSON.stringify(newContent));
  };

  useEffect(() => {
    const savedContent = JSON.parse(localStorage.getItem('heroContent'));
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (heroRef.current && !heroRef.current.contains(event.target)) {
        setShowButton(false);
        setIsSelected(false);
        setSelectedElement(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sectionStyle = {
    border: isSelected ? '3px solid blue' : 'none',
  };

  const innerElementsStyle = {
    border: isSelected ? '1px solid blue' : 'none',
  };

  const style1 = {
    borderLeft: isSelected ? '2px dotted black' : 'none',
    borderRight: isSelected ? '2px dotted black' : 'none',
    borderLeftStyle: isSelected ? 'dashed' : 'none',
    borderRightStyle: isSelected ? 'dashed' : 'none',
  };

  const getElementStyle = (element) => {
    return selectedElement === element
      ? { border: '2px solid blue' }
      : innerElementsStyle;
  };

  const handleBlur = (field) => {
    const element = document.querySelector(`.${field}`);
    handleContentChange(element.innerText, field);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${introImg})`, // Set the background image
          backgroundSize: 'cover', // Make sure the background image covers the entire container
          backgroundPosition: 'center', // Center the image
          height: "80vh", // Set the height of the section
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <Typography fontSize={100} mt={5} fontWeight={600} color='black'>
            WE ARE A
          </Typography>
          <Typography fontSize={100} fontWeight={600} color='black'>
            LANDING PAGE
          </Typography>
          <Typography variant='h6' color='black' sx={{ textAlign: "center", width: "750px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
          </Typography>
          <Button variant="contained" sx={{ borderRadius:"50px", marginTop: "20px", width: "200px", height: "50px" }}>
            Learn More
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
