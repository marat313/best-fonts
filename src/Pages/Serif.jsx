
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/FontCard/FontCard.module.css';
import styles2 from '../components/Home/Home.module.css';
import data from '../../public/data.json';

function Serif({ fonts, isSelected, onClick }) {
  const [hoveredStates, setHoveredStates] = useState(Array(fonts.length).fill(false));

  const cursiveFonts = data.filter(font => font.category === 'Serif');

  const handleCardClick = (fontId) => {
    onClick(fontId);
  };

  const handleMouseEnter = (index) => {
    setHoveredStates(prevStates => {
      const updatedHoveredStates = [...prevStates];
      updatedHoveredStates[index] = true;
      return updatedHoveredStates;
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredStates(prevStates => {
      const updatedHoveredStates = [...prevStates];
      updatedHoveredStates[index] = false;
      return updatedHoveredStates;
    });
  };

  return (
    <div className={styles2.homeWrapper}>
      <h2>Serif typefaces</h2>
      <div className={styles2.home}>
        {cursiveFonts.map((font, index) => (
          <Link
            key={font.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={`/fontdetails/${font.id}`}
            className={`${styles.card} ${isSelected ? styles.selected : ''}`}
            onClick={() => handleCardClick(font.id)}
          >
            <div
              key={font.id}
              className={`${styles.card}`}
              style={{
                backgroundImage: hoveredStates[index] ? `url(${font.fontBackgroundImgURL})` : 'none',
                transform: hoveredStates[index] ? 'scale(1.06)' : 'none',
                backgroundColor: hoveredStates[index] ? 'transparent' : '#161616',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
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
        ))}
      </div>
    </div>
  );
}

export default Serif;
