import React from 'react';
import { Close } from '@mui/icons-material';
import Navbar from '../ServicesTemplate/Navbar';
import HeroSection from './HeroSection';
import Features from './Features';
import About from './About';
import ProvidedServices from './ProvidedServices';
import Team from './Team';
import ContactUs from './ContactUs';

function HomePage({ onAddSectionClick, headings = [], onRemoveHeading }) {
  return (
    <div>
      <Navbar />

      <div className="headings-stack">
        {headings.map((heading, index) => (
          <div key={index} className="heading-div">
            <h1
              contentEditable
              suppressContentEditableWarning
              style={{ fontFamily: 'Times New Roman' }}
            >
              {heading}
            </h1>
            <Close
              onClick={() => onRemoveHeading(index)}
              style={{
                cursor: 'pointer',
                marginLeft: '1400px',
                marginBottom: '10px',
                color: 'red',
              }}
            />
          </div>
        ))}
      </div>

      {/* Hero Section with an ID for smooth scrolling */}
      <div>
        <HeroSection onAddSectionClick={onAddSectionClick} />
      </div>

      <div className="headings-stack">
        {headings.map((heading, index) => (
          <div key={index} className="heading-div">
            <h1
              contentEditable
              suppressContentEditableWarning
              style={{ fontFamily: 'Times New Roman' }}
            >
              {heading}
            </h1>
            <Close
              onClick={() => onRemoveHeading(index)}
              style={{
                cursor: 'pointer',
                marginLeft: '1400px',
                marginBottom: '10px',
                color: 'red',
              }}
            />
          </div>
        ))}
      </div>

      {/* Top Picks Section with an ID for smooth scrolling */}
      <div id="features">
        <Features  />
      </div>

      <div className="headings-stack">
        {headings.map((heading, index) => (
          <div key={index} className="heading-div">
            <h1
              contentEditable
              suppressContentEditableWarning
              style={{ fontFamily: 'Times New Roman' }}
            >
              {heading}
            </h1>
            <Close
              onClick={() => onRemoveHeading(index)}
              style={{
                cursor: 'pointer',
                marginLeft: '1400px',
                marginBottom: '10px',
                color: 'red',
              }}
            />
          </div>
        ))}
      </div>

      {/* Special Offers Section with an ID for smooth scrolling */}
      <div id="about">
        <About />
      </div>

      <div className="headings-stack">
        {headings.map((heading, index) => (
          <div key={index} className="heading-div">
            <h1
              contentEditable
              suppressContentEditableWarning
              style={{ fontFamily: 'Times New Roman' }}
            >
              {heading}
            </h1>
            <Close
              onClick={() => onRemoveHeading(index)}
              style={{
                cursor: 'pointer',
                marginLeft: '1400px',
                marginBottom: '10px',
                color: 'red',
              }}
            />
          </div>
        ))}
      </div>

      {/* Footer Section with an ID for smooth scrolling */}
      <div id="services">
        <ProvidedServices />
      </div>

      <div id="team">
        <Team />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
}

export default HomePage;
