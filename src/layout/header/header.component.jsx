import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="header-nav">
      <Link to="/shop" className="header-link">
        SHOP
      </Link>
      <Link to="/shop" className="header-link">
        CONTACT
      </Link>
      <Link to="/account" className="header-link">
        ACCOUNT
      </Link>
    </div>
  </div>
);

export default Header;
