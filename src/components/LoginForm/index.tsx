import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const LoginForm: React.FC = () => {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [allowCookies, setAllowCookies] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (allowCookies) {
            Cookies.set('username', usuario, { expires: 7 });
        } else {
            localStorage.setItem('username', usuario);
        }

        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="email">Usuário</label>
                    <input
                        type="text"
                        id="usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Digite seu usuário..."
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha..."
                        required
                    />
                </div>

                <div className="form-checkbox">
                    <input
                        type="checkbox"
                        checked={allowCookies}
                        onChange={(e) => setAllowCookies(e.target.checked)}
                    />
                    <label>
                        Desejo utilizar cookies
                    </label>
                </div>

                <button type="submit" className="login-button">Entrar</button>
            </form>
        </div>
    );
};

export default LoginForm;