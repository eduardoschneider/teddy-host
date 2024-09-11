import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/dashboard">Início</Link></li>
        <li><Link to="/parceiros">Parceiros</Link></li>
        <li><Link to="/empresas">Empresas</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;