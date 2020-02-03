/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';


const NavLink = ({
  linkName, className, handleClick, name,
}) => (
  <div
    className={className}
    onClick={handleClick(name)}
  >
    <div className="navTitle">{linkName}</div>
    <div className="underLine" />
  </div>
);

NavLink.propTypes = {
  linkName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavLink;
