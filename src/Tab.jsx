import React, { useState } from 'react';
import './Tab.css';

const Tab = ({tab}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  console.log(tab)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={`tab ${isSelected ? 'selected' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      <div className="icon-container">
        <img className="icons" src={tab.favIconUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZ4LN3I8jxB819IRESzKasshUZ3dcYja9iA&s"} alt="icon" />
      </div>
      <span className="text">{tab.title}</span>
    </div>
  );
};

export default Tab;
