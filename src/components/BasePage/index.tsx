import React, { Children } from 'react';
import Menu from 'components/Menu';
import UserStatus from 'components/UserStatus';
import './styles.scss';

const BasePage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="dashboard">
      <Menu />
      <div className="content">
        {children}
      </div>
      <UserStatus />
    </div>
  );
};

export default BasePage;