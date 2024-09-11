import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './styles.scss';

const UserStatus: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>();

  const handleLogout = () => {
    localStorage.removeItem('username');
    Cookies.remove('username');
    navigate('/');
  };

  const handleUser = () => {
    let u = Cookies.get('username');
    if (!u) {
        setUser(localStorage.getItem('username'));
    } else {
        setUser(u);
    }
  }

  useEffect(() => {
    handleUser();
  }, [])

  return (
    <div className="user-status">
      <span className="username">Olá, {user}!</span>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default UserStatus;