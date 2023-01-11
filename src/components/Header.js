import React, { useEffect, useState } from "react";
import styles from './Header.module.css';
import mobimark from '../images/mobimark logo.png';
import profile from '../images/profile2.png';

function Header() {
    const [user, setUser] = useState();
    const [path, setPath] = useState();

    useEffect(() => {
        const get = JSON.parse(localStorage.getItem('loggedUser'));
        if (get) setUser(get.email);
        const path = window.location.pathname;
        setPath(path);
    }, []);

    return (
        <div className={styles.headerContainer}>
            <img src={mobimark} alt="mobimark-logo" id="mobimark"/>
            { user && path === '/escolas' && (
                <div className={styles.userBox}>
                    <img src={profile} alt="profile" />
                    <p>{user}</p>
                </div>
            )}
        </div>
    )
}

export default Header;