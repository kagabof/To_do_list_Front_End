import React from 'react';
import '../assets/styles/homePage.scss';
import Line from './lines';
import NavBar from './NavBar';


const HomePage = () => (
  <div className="homepage-containers">
    <div className="homepage-container">
      <NavBar />
      <div className="wellcom-text">
        <p>
          Don’t waste time
          because it’s expensive
          and when it’s lost never
          it never comes back
        </p>
      </div>
      <div>
        <Line />
      </div>
    </div>
  </div>
);

export default HomePage;
