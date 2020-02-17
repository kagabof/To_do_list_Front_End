/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const NavLink = ({
  linkName, className, name,
}) => (
  <Link to={(name === 'home') ? '/' : `/${name}`}>
    <div
      className={className}
    >
      <div className="navTitle">{linkName}</div>
      <div className="underLine" />
    </div>
  </Link>
);

NavLink.propTypes = {
  linkName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavLink;
