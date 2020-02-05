import React from 'react';
import '../assets/styles/homePage.scss';
import Line from './lines';
import NavBar from './NavBar';
import Signup from './Signup';


const HomePage = () => (
  <div className="homepage-containers">
    <div className="homepage-container">
      <NavBar />
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
          <div id="signup" className="side-not-visible">
            <Signup />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
