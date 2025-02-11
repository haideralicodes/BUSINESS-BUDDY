import React, { useState, useRef } from 'react';
import { Close } from '@mui/icons-material';
import Navbar from '../FashionStoreOne/Navbar';
import HeroSection from '../FashionStoreOne/HeroSection';
import TopPicks from '../FashionStoreOne/TopPicks';
import SpecialOffers from '../FashionStoreOne/SpecialOffers';
import OurStory from '../FashionStoreOne/OurStory';
import Footer from '../FashionStoreOne/Footer';

import { Menu, MenuItem, Divider, Select, MenuItem as DropdownItem } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import PaletteIcon from '@mui/icons-material/Palette';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import { HexColorPicker } from "react-colorful";
import 'react-quill/dist/quill.snow.css';

function HomePage({ onAddSectionClick, headings = [], onRemoveHeading }) {
  const [selectedElement, setSelectedElement] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [pickerType, setPickerType] = useState(null); // 'text' or 'background'
  const [currentColor, setCurrentColor] = useState('#000');
  const [fontSize, setFontSize] = useState(16); // Default font size

  const handleAddSectionClick = (sectionName) => {
    onAddSectionClick(sectionName);
  };

  const renderHeadingsAboveSection = (sectionName) => {
    return headings
      .filter((heading) => heading.section === sectionName)
      .map((heading, index) => (
        <div key={index} style={{ display: 'flex' }}>
          <span
            contentEditable
            suppressContentEditableWarning
            onContextMenu={(e) => openContextMenu(e, heading)}
            style={{
              fontFamily: 'Times New Roman',
              fontSize: `${heading.fontSize || fontSize}px`,
              color: heading.textColor,
              backgroundColor: heading.backgroundColor,
              width: '100%',
              padding: '4%',
            }}
          >
            {heading.text}
          </span>
          <Close
            onClick={() => onRemoveHeading(index)}
            style={{
              cursor: 'pointer',
              marginTop: '60px',
              color: 'red',
            }}
          />
        </div>
      ));
  };

  const openContextMenu = (event, element) => {
    event.preventDefault();
    setSelectedElement(event.target);
    setAnchorEl(event.currentTarget);
  };

  const closeContextMenu = () => {
    setAnchorEl(null);
    setColorPickerVisible(false);
  };

  const applyStyle = (style) => {
    const selection = window.getSelection();
    if (selection.toString()) {
      document.execCommand(style);
    }
  };

  const applyAlignment = (alignment) => {
    if (selectedElement) {
      selectedElement.style.textAlign = alignment;
    }
    closeContextMenu();
  };

  const openColorPicker = (type) => {
    setPickerType(type);
    setColorPickerVisible(!colorPickerVisible);
  };

  const applyColor = (color) => {
    if (selectedElement) {
      if (pickerType === 'text') {
        selectedElement.style.color = color;
      } else if (pickerType === 'background') {
        selectedElement.style.backgroundColor = color;
      }
    }
    setCurrentColor(color);
  };

  const applyFontSize = (size) => {
    if (selectedElement) {
      selectedElement.style.fontSize = `${size}px`;
    }
    setFontSize(size);
    closeContextMenu();
  };

  return (
    <div>
      <Navbar />

      {renderHeadingsAboveSection('hero')}
      <HeroSection onAddSectionClick={() => handleAddSectionClick('hero')} />

      {renderHeadingsAboveSection('topPicks')}
      <TopPicks onAddSectionClick={() => handleAddSectionClick('topPicks')} />

      {renderHeadingsAboveSection('specialOffers')}
      <SpecialOffers
        onAddSectionClick={() => handleAddSectionClick('specialOffers')}
      />

      {renderHeadingsAboveSection('ourStory')}
      <OurStory onAddSectionClick={() => handleAddSectionClick('ourStory')} />

      {renderHeadingsAboveSection('footer')}
      <Footer onAddSectionClick={() => handleAddSectionClick('footer')} />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeContextMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          '& .MuiPaper-root': {
            width: '240px',
          },
        }}
      >
        <MenuItem>
          <label style={{ marginRight: '10px' }}>Font Size:</label>
          <Select
            value={fontSize}
            onChange={(e) => applyFontSize(e.target.value)}
            sx={{ width: '100px' }}
          >
            {Array.from({ length: 100 }, (_, i) => i + 1).map((size) => (
              <DropdownItem key={size} value={size}>
                {size}px
              </DropdownItem>
            ))}
          </Select>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => applyAlignment('left')}>
          <FormatAlignLeftIcon /> Align Left
        </MenuItem>
        <MenuItem onClick={() => applyAlignment('center')}>
          <FormatAlignCenterIcon /> Align Center
        </MenuItem>
        <MenuItem onClick={() => applyAlignment('right')}>
          <FormatAlignRightIcon /> Align Right
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => applyStyle('bold')}>
          <FormatBoldIcon /> Bold
        </MenuItem>
        <MenuItem onClick={() => applyStyle('italic')}>
          <FormatItalicIcon /> Italic
        </MenuItem>
        <MenuItem onClick={() => applyStyle('underline')}>
          <FormatUnderlinedIcon /> Underline
        </MenuItem>
      </Menu>

      {colorPickerVisible && (
        <div style={{ position: 'absolute', zIndex: 1000, marginTop: '10px' }}>
          <HexColorPicker
            color={currentColor}
            onChange={applyColor}
          />
        </div>
      )}
    </div>
  );
}

export default HomePage;
