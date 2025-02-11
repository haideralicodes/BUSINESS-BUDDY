import React from "react";
import { Box } from "@mui/material";
import "./ScrollWeb.css";
import web1 from "../../assets/web1.webp";
import web2 from "../../assets/web2.webp";
import web3 from "../../assets/web3.webp";
import web4 from "../../assets/web4.webp";
import web5 from "../../assets/web5.webp";
import web6 from "../../assets/web6.webp";
import web7 from "../../assets/web7.webp";
import web8 from "../../assets/web8.webp";
import web9 from "../../assets/web9.webp";
import web10 from "../../assets/web10.webp";
import web11 from "../../assets/web11.webp";
import web12 from "../../assets/web12.webp";

const images = [
  web1, web2, web3, web4, web5, web6, web7, web8, web9, web10, web11, web12,
  web6, web7, web8, 
];

const ScrollWeb = () => {
  return (
    <Box className="scroll-container">
      <Box className="scroll-content">
        {images.map((img, index) => (
          <Box key={index} component="img" src={img} alt={`Image ${index + 1}`} className="scroll-image" />
        ))}
      </Box>
    </Box>
  );
};

export default ScrollWeb;