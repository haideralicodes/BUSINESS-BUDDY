import React from 'react';
import Navbar from '../Templates/ServicesTemplate/Navbar';
import HeroSection from '../Templates/ServicesTemplate/HeroSection';
import PreviewScreen from '../pages/CustomizeWebsite/PreviewScreen'
import Features from '../Templates/ServicesTemplate/Features';
import About from '../Templates/ServicesTemplate/About';
import CompanyServices from '../Templates/ServicesTemplate/ProvidedServices';
import Team from '../Templates/ServicesTemplate/Team';
import ContactUs from '../Templates/ServicesTemplate/ContactUs';

function CustomizeTemplateHeaderServices() {
  return (
    <div>
      <PreviewScreen hidden={false}/>
      <div style={{width:"var(--viewport-width, 100%)", 
        display:"flex", flexDirection:"column", 
        justifyContent:"center", margin:"auto"}}>
        <Navbar />
        <HeroSection />
        <Features />
        <About />
        <CompanyServices />
        <Team />
        <ContactUs />
      </div>
    </div>
  );
}

export default CustomizeTemplateHeaderServices;