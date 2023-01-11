import React from "react";
import styles from './Header.module.css';
import mobimark from '../images/mobimark logo.png';

function Header() {
    return (
        <div className={styles.headerContainer}>
            <img src={mobimark} alt="mobimark-logo" />
        </div>
    )
}

export default Header;