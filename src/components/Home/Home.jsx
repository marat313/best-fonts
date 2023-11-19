import React, { useEffect, useState } from 'react'
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

