/* eslint-disable arrow-body-style */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../assets/styles/navBar.scss';
import NavLink from './NavLink';


const NavBar = ({ navLink }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo-class">
          <Logo />
        </div>
      </Link>
      <div className="nav-links">
        <NavLink
          className={navLink === 'home' ? 'nav-link-active' : 'nav-link'}
          name="home"
          linkName="HOME"
        />
        <NavLink
          className={navLink === 'signup' ? 'nav-link-active' : 'nav-link'}
          name="signup"
          linkName="SIGNUP"
        />
        <NavLink
          className={navLink === 'login' ? 'nav-link-active' : 'nav-link'}
          name="login"
          linkName="LOGIN"
        />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  navLink: PropTypes.string.isRequired,
};

export default NavBar;
