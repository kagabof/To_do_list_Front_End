/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/homePage.scss';
import Line from '../component/home/lines';
import NavBar from '../component/home/NavBar';
import Login from '../component/home/Login';
import Signup from '../component/home/Signup';


const HomePage = ({ navLink }) => (
  <div className="homepage-containers">
    <div className="homepage-container">
      <NavBar navLink={navLink} />
      <div className="home-display">
        <div className="left-side">
          <div className="wellcom-text">
            <p>
              Don’t waste time
              because it’s expensive
              and when it’s lost never
              it never comes back
            </p>
          </div>
          <div className="home-line">
            <Line />
            <div className="home-page-message">
              Make daily plane and achieve more...
            </div>
          </div>
        </div>
        <div className="right-side">
          {
            navLink === 'login'
              ? <Login />
              : (navLink === 'signup')
                ? <Signup />
                : <div />

          }
        </div>
      </div>
    </div>
  </div>
);

HomePage.propTypes = {
  navLink: PropTypes.string.isRequired,
};

export default HomePage;
