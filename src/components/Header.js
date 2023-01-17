import React, { useEffect, useState } from "react";
import styles from '../css/Header.module.css';
import mobimark from '../images/mobimark logo.png';
import profile from '../images/profile2.png';
import { useHistory } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
    const [user, setUser] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const get = JSON.parse(localStorage.getItem('loggedUser'));
        if (get) setUser(get.email);
    }, []);

    const handleClick = () => {
        history.push('/');
        localStorage.clear();
    }


    return (
        <div className={styles.headerContainer}>
            <div className={styles.mobimark}>
                <img src={mobimark} alt="mobimark-logo" />
            </div>
            {user && (
                <div className={styles.userBox}>
                    <nav className={ styles.hamburgerMenu }>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <i class="fa fa-bars"></i>
                        </button>
                        <a href="cadastrar" >Cadastrar Nova Escola</a>
                        <a href="escolas" >Listagem de Escolas</a>
                        <a href="sobre">Sobre</a>
                    </nav>

                    {isOpen && <HamburgerMenu />}

                    <div className={styles.profileBox}>
                        <img src={profile} alt="profile" />
                        <p>{user}</p>
                        <button onClick={handleClick}>Logout</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;