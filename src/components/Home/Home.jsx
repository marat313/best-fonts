/*  import React, { useEffect, useState } from 'react'
import styles from "./home.module.css"
import FontCard from '../FontCard/FontCard';


function Home() {
    const [fonts, setFonts] = useState([false])
    const [selectedFontId, setSelectedFontId] = useState(null);

    const handleClick = (fontId) => {
        setSelectedFontId(fontId);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json")
                const jsonData = await response.json()
                setFonts(jsonData)
            } catch (error) {
                console.error("Error fetching font data:", error);
            }
        }

        fetchData()
    }, [])

    return (
        <div className={styles.homeWrapper}>
            <h2>All font faces</h2>
            <div className={styles.home}> 
                {fonts.map(font => (
                    <FontCard key={font.id} 
                    font={font}
                    isSelected={font.id === selectedFontId}
                    onClick={handleClick} />
                    ))}
            </div>
        </div>



    )
}

export default Home





 */

import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import FontCard from '../FontCard/FontCard';

function Home() {
  const navigate = useNavigate();
  const [fonts, setFonts] = useState([]);
  const [selectedFontId, setSelectedFontId] = useState(null);
  const scrollPositionRef = useRef(0);

  const handleClick = (fontId) => {
    setSelectedFontId(fontId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        setFonts(jsonData);
      } catch (error) {
        console.error('Error fetching font data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedFontId !== null) {
      // Сохраняем текущую позицию прокрутки перед переходом
      scrollPositionRef.current = window.scrollY;
      navigate(`/fontdetails/${selectedFontId}`);
    }
  }, [selectedFontId, navigate]);

  useEffect(() => {
    // Восстанавливаем позицию прокрутки после загрузки FontCard
    window.scrollTo(0, scrollPositionRef.current);
  }, [selectedFontId]);

  return (
    <div className={styles.homeWrapper}>
      <h2>All font faces</h2>
      <div className={styles.home}>
        {fonts.map((font) => (
          <FontCard
            key={font.id}
            font={font}
            isSelected={font.id === selectedFontId}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
