import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="header-nav">
      <Link to="/shop" className="header-link">
        SHOP
      </Link>
      <Link to="/contact" className="header-link">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="header-link" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="header-link" to="/account">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
