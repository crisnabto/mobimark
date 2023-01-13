import React, { useEffect, useState } from "react";
import styles from './Header.module.css';
import mobimark from '../images/mobimark logo.png';
import profile from '../images/profile2.png';
import { useHistory } from "react-router-dom";

function Header() {
    const [user, setUser] = useState();
    const [path, setPath] = useState();
    const history = useHistory();

    useEffect(() => {
        const get = JSON.parse(localStorage.getItem('loggedUser'));
        if (get) setUser(get.email);
        const path = window.location.pathname;
        setPath(path);
    }, []);

    const handleClick = () => {
        if (path) history.push('/');
        localStorage.clear();
    }

    const handleNewSchool = () => {
        history.push('/cadastrar');
    }

    return (
        <div className={styles.headerContainer}>
            <div className={ styles.mobimark }>
                <img src={mobimark} alt="mobimark-logo"/>
            </div>
            { user && path === '/escolas' && (
                <div className={styles.userBox}>
                    <nav>
                        <a href="cadastrar" onClick={ handleNewSchool }>Cadastrar Nova Escola</a>
                        <a href="sobre">Sobre</a>
                    </nav>
                    <div className={styles.profileBox}>
                        <img src={profile} alt="profile"/>
                        <p>{user}</p>
                        <button onClick={ handleClick }>Logout</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;