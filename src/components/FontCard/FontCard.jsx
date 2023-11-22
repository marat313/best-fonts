/* 


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './FontCard.module.css';

const FontCard = ({ font, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    onClick(font.id);
    setIsClicked(true);
  };

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };

  const cardStyle = {
    backgroundImage: isHovered ? `url(${font.fontBackgroundImgURL})` : 'none',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <Link
      style={{ textDecoration: 'none', color: 'inherit' }}
      to={`/fontdetails/${font.id}`}
      className={`${isSelected ? styles.selected : ''}`}
      onClick={handleCardClick}
    >
      <div
        key={font.id}
        className={`${styles.card}`}
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.cardImg}>
          <img src={font.imageURL} alt="" />
        </div>
        <div className="cardContent">
          <h1 className={styles.fontName}>{font.fontName}</h1>
          <p className={styles.category}>{font.category}</p>
          <span className={styles.fontStyle}>{font.style}</span>
        </div>
      </div>
    </Link>
  );
};

export default FontCard;
 */


import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './FontCard.module.css';

const FontCard = ({ font, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isClickedRef = useRef(false);

  const handleCardClick = () => {
    onClick(font.id);
    isClickedRef.current = true;
    setIsHovered(false); // Сброс состояния при клике
    console.log('Clicked! isHovered:', isHovered, 'isClicked:', isClickedRef.current);
  };

  const handleMouseEnter = () => {
    if (!isClickedRef.current) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClickedRef.current) {
      setIsHovered(false);
    }
  };

  const cardStyle = {
    backgroundImage: isHovered ? `url(${font.fontBackgroundImgURL})` : 'none',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  console.log('Rendering! isHovered:', isHovered, 'isClicked:', isClickedRef.current);

  return (
    <Link
      style={{ textDecoration: 'none', color: 'inherit' }}
      to={`/fontdetails/${font.id}`}
      className={`${isSelected ? styles.selected : ''}`}
      onClick={handleCardClick}
    >
      <div
        key={font.id}
        className={`${styles.card}`}
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.cardImg}>
          <img src={font.imageURL} alt="" />
        </div>
        <div className="cardContent">
          <h1 className={styles.fontName}>{font.fontName}</h1>
          <p className={styles.category}>{font.category}</p>
          <span className={styles.fontStyle}>{font.style}</span>
        </div>
      </div>
    </Link>
  );
};

export default FontCard;
