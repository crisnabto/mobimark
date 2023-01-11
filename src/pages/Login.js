import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Header from "../components/Header";
import styles from '../components/Login.module.css';
import mobimark from '../images/mobimark.png';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick = (e) => {
        e.preventDefault();
        const get = JSON.parse(localStorage.getItem('login'));
        if (email === get.email && password === get.senha) {
            history.push('/escolas');
        } else {
            alert('Usuário ou senha incorretos');
        }
    }

    useEffect(() => {
        localStorage.setItem('login', JSON.stringify({ email: 'admin@admin.com', senha: '123456' }))
    })

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
                                class="fas"
                                onChange={({ target: { value } }) => setEmail(value)}
                                placeholder="user@mail.com"
                            />
                        </label>

                        <label htmlFor="password-input">
                            <p>Senha</p>
                            <input
                                type="password"
                                name="password"
                                id="password-input"
                                class="fas"
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
