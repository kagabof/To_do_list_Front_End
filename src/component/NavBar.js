/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Logo from './Logo';
import '../assets/styles/navBar.scss';
import NavLink from './NavLink';


const NavBar = () => {
  const [navLink, useNavLink] = useState({
    active: 'home',
  });

  const handleClick = (name) => () => {
    name && useNavLink({
      ...navLink,
      active: name,
    });
    (name === 'signup')
      ? document.getElementById('signup').classList.remove('side-not-visible')
      : document.getElementById('signup').classList.add('side-not-visible');
  };

  return (
    <div className="navbar">
      <div className="logo-class" onClick={handleClick('home')}>
        <Logo />
      </div>
      <div className="nav-links">
        <NavLink
          className={navLink.active === 'home' ? 'nav-link-active' : 'nav-link'}
          handleClick={handleClick}
          name="home"
          linkName="HOME"
        />
        <NavLink
          className={navLink.active === 'signup' ? 'nav-link-active' : 'nav-link'}
          handleClick={handleClick}
          name="signup"
          linkName="SIGNUP"
        />
        <NavLink
          className={navLink.active === 'login' ? 'nav-link-active' : 'nav-link'}
          handleClick={handleClick}
          name="login"
          linkName="LOGIN"
        />
      </div>
    </div>
  );
};


export default NavBar;
