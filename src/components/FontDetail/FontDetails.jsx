// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styles from "./FontDetails.module.css";
// // import fonts from "./Fonts.module.css";

// const FontDetails = ({ fonts }) => {
//   const { fontId } = useParams();
//   const [selectedFont, setSelectedFont] = useState(null);
// //!const [inputText, setInputText] = useState(""); 

//   useEffect(() => {
//     const font = fonts.find((font) => font.id === parseInt(fontId));
//     setSelectedFont(font);
//   }, [fontId, fonts]);

//   return (
//     <>
//       {selectedFont ? (
//         <div style={{ marginTop: "20px", marginBottom: "40px" }}>
//           <h1 className={styles.title}>{selectedFont.fontName}</h1>
//           <div className={styles.fontDetail}>
//             <div className={styles.fontInfo}>
//               <h2>{selectedFont.fontName}</h2>
//               <p>Category: {selectedFont.category}</p>
//               <div>{selectedFont.style}</div>
//               <div>{selectedFont.textExample}</div>

//               {/* //!Функция для набора текста с выбранным шрифтом */}
// {/*          <textarea
//                 type="text"
//                 placeholder="Type something..."
//                 value={inputText}
//                 onChange={(e) => setInputText(e.target.value)}
//                 style={{fontFamily: "Niccone", width: "500px",
//                 height: "210px",
//                 fontSize: "26px",verticalAlign: "top", background: "#2a2e26"}}
//               /> */}
              
//             </div>
//             <div
//               className={styles.fontImg}
//               style={{
//                 backgroundImage: `url(${selectedFont.fontBackgroundImgURL})`,
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//               }}
//             >
//               <img
//                 className={styles.fontImg}
//                 src={selectedFont.imageURL}
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>Шрифт не найден</div>
//       )}
//     </>
//   );
// };

// export default FontDetails;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./FontDetails.module.css";
import fonts from "./Fonts.module.css";


const FontDetails = ({ fonts }) => {
  const { fontId } = useParams();
  const [selectedFont, setSelectedFont] = useState(null);

  useEffect(() => {
    const font = fonts.find((font) => font.id === parseInt(fontId));
    setSelectedFont(font);
  }, [fontId, fonts]);

  return (
    <>
      {selectedFont ? (
        <div style={{ marginTop: "20px", marginBottom: "40px" }}>
          <h1 className={styles.title} 
              style={{ fontFamily: selectedFont.fontName }}
              >{selectedFont.fontName}
          </h1>

          <div className={styles.fontDetail}>
            <div className={styles.fontInfo} >
              <p style={{ fontFamily: selectedFont.fontName,
                            lineHeight: "1.7", fontSize: "clamp(16px, 20px, 35px )"}}>{selectedFont.textExample}</p>
              <p>Category: {selectedFont.category}</p>
              <div>{selectedFont.style}</div>
            </div>
            <div
              className={styles.fontImg}
              style={{
                backgroundImage: `url(${selectedFont.fontBackgroundImgURL})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img
                className={styles.fontImg}
                src={selectedFont.imageURL}
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <div>Шрифт не найден</div>
      )}
    </>
  );
};

export default FontDetails;
