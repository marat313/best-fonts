import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };
  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  return (
    <div className="header">
      <Link to="/" className={styles.logo}>Free Faces</Link>
      <div
        className={
          styles.header_fonts_menu + (burgerMenuOpen ? ` ${styles.open}` : "")
        }
      >
        <Link to="/" onClick={closeBurgerMenu}>
          <div className="font">
            <img
              src="https://uploads-ssl.webflow.com/63ad770767a7fcd529308e52/63ee62d32a69aa1748922d92_logo-v3.svg"
              alt=""
            />
            <h3>FREE Face</h3>
          </div>
        </Link>

        <Link to="/cursive" onClick={closeBurgerMenu}>
          <div className="font">
            <img
              src="https://uploads-ssl.webflow.com/63ad770767a7fcd529308e52/63b1a7889c269580abd2898f_cursive.svg"
              alt=""
            />
            <h3>Cursive</h3>
          </div>
        </Link>

        <Link to="/display" onClick={closeBurgerMenu}>
          <div className="font">
            <img
              src="https://uploads-ssl.webflow.com/63ad770767a7fcd529308e52/63b1af31dd90442fbce8ba47_display.svg"
              alt=""
            />
            <h3>Display</h3>
          </div>
        </Link>

        <Link to="/Monospace" onClick={closeBurgerMenu}>
          <div className="font">
            <img
              src="https://uploads-ssl.webflow.com/63ad770767a7fcd529308e52/63b1b09e941bfa35d3fd4125_monospace.svg"
              alt=""
            />
            <h3>Monospace</h3>
          </div>
        </Link>

        <Link to="/SansSerif" onClick={closeBurgerMenu}>
          <div className="font">
            <img
              src="https://uploads-ssl.webflow.com/63ad770767a7fcd529308e52/63b1a18c1e34a74bfac227cc_sans-serif.svg"
              alt=""
            />
            <h3>SansSerif</h3>
          </div>
        </Link>

        <Link to="/Slab" onClick={closeBurgerMenu}>
          <div className="font">
            <img
              src="https://uploads-ssl.webflow.com/63ad770767a7fcd529308e52/63b1a5619c2695c32dd269a9_slab.svg"
              alt=""
            />
            <h3>Slab</h3>
          </div>
        </Link>

        <Link to="/Serif" onClick={closeBurgerMenu}>
          <div className="font">
            <img
              src="https://uploads-ssl.webflow.com/63ad770767a7fcd529308e52/63b1a33a04c2b33b4ee46ade_serif.svg"
              alt=""
            />
            <h3>Serif</h3>
          </div>
        </Link>
      </div>

      <div className={styles.burgerIcon} onClick={toggleBurgerMenu}>
        <div
          className={`${styles.bar} ${styles.bar1} ${
            burgerMenuOpen ? styles.open : ""
          }`}
        ></div>
        <div
          className={`${styles.bar} ${styles.bar2} ${
            burgerMenuOpen ? styles.open : ""
          }`}
        ></div>
        <div
          className={`${styles.bar} ${styles.bar3} ${
            burgerMenuOpen ? styles.open : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Header;
