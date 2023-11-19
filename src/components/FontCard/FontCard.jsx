import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from "./FontCard.module.css"

const FontCard = ({ font, isSelected, onClick, fonts }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleCardClick = () => {
        onClick(font.id);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cardStyle = {
        backgroundImage: isHovered ? `url(${font.fontBackgroundImgURL})` : 'none',
        transform: isHovered ? "scale(1.06)" : 'none',
        backgroundColor: isHovered ? 'transparent' : '#161616',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <Link style={{ textDecoration: 'none', color: 'inherit' }} 
                to={`/fontdetails/${font.id}`}
                className={`${styles.card} ${isSelected ? styles.selected : ''}`}
                onClick={handleCardClick}>
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

export default FontCard