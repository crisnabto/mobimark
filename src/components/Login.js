import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [redirect, setRedirect] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const get = JSON.parse(localStorage.getItem('login'));
        if (email === get.email && password === get.senha) {
            history.push('/escolas');
            // setRedirect(true);
            console.log('deu');
        } else {
            alert('Usuario ou senha incorretos');
        }
    }

    useEffect(() => {
        localStorage.setItem('login', JSON.stringify({ email: 'admin@admin.com', senha: '123456'}))
        console.log('atualizou');
    })

    return (
        <div>
            <form>
                <p>Login</p>
                <label htmlFor="email-input">
                    <input 
                        type="email"
                        name="email"
                        id="email-input"
                        onChange={ ({ target: { value }}) => setEmail(value) }
                        placeholder="E-mail"
                    />                
                </label>

                <label htmlFor="password-input">
                    <input 
                        type="password"
                        name="password"
                        id="password-input"
                        onChange={ ({ target: { value }}) => setPassword(value) }
                        placeholder="Senha"
                    />                
                </label>

                <button
                    onClick={ handleClick }
                >Submit</button>
            </form>

            {/* { redirect && <Redirect to="/escolas" /> } */}
        </div>
    )
}

export default Login;