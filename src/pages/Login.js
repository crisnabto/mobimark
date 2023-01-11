import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Header from "../components/Header";
import styles from '../components/Login.module.css';
import mobimark from '../images/mobimark.png';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const credentials = [
        {
            email: "admin@mobimark.com",
            password: "admin"
        }, 
        {
            email: "user1@mobimark.com",
            password: "user1"
        }, 
        {
            email: "user2@mobimark.com",
            password: "user2"
        }
    ];

    useEffect(() => {
        localStorage.clear();
    })

    const handleClick = (e) => {
        e.preventDefault();
        
        const match = credentials.find((user) => user.email === email && user.password === password);

        if (match) {
            localStorage.setItem('loggedUser', JSON.stringify({ email: email }));
            history.push('/escolas');
        } else {
            alert('Usuário ou senha incorretos');
        }
    }

    return (
        <div className={styles.loginContainer}>
            <Header />
            <div className={styles.formContainer}>
                <div className={styles.imageContainer}>
                    <img src={mobimark} alt="mobimark logo" />
                </div>

                <hr />

                <div className={styles.loginBox}>
                    <h1>Login</h1>
                    <form>
                        <label htmlFor="email-input">
                            <p>E-mail</p>
                            <input
                                type="email"
                                name="email"
                                id="email-input"
                                class="fas fa-envelope"
                                onChange={({ target: { value } }) => setEmail(value)}
                                placeholder="&#xf0e0; user@mail.com"
                            />
                        </label>

                        <label htmlFor="password-input">
                            <p>Senha</p>
                            <input
                                type="password"
                                name="password"
                                id="password-input"
                                onChange={({ target: { value } }) => setPassword(value)}
                                placeholder="Sua senha"
                            />
                        </label>
                    </form>

                    <button
                        onClick={handleClick}
                    >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
