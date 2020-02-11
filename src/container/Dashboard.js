/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../assets/styles/dashboard.scss';
import Logo from '../component/home/Logo';
import ToDoCard from '../component/dashboard/DashbordRightSide.js';
import Ellipse from '../assets/images/Ellipse.png';
import DashbordLeftSide from '../component/dashboard/DashbordLeftSide';
import DashboardModels from '../component/dashboard/DashboardModels';
import ResponceMessage from '../component/dashboard/ResponceMessage';


const DashBoard = () => {
  const [modelState, setModelState] = useState('down');
  const [responce, setResponce] = useState({
    status: 'down',
    type: 'error',
    message: 'Hello',
  });
  const handleModels = (mode, model) => mode && setModelState(mode);
  const handleResponce = ({ message, status, type }) => {
    setResponce({
      ...responce,
      status,
      type: type || '',
      message: message || '',
    });
  };
  return (
    <div className="dash-container0">
      <div className="dash-container">
        <ResponceMessage
          status={responce.status}
          type={responce.type}
          message={responce.message}
          close={handleResponce}
        />
        <div className="dash-nav">
          <div className="dash-logo">
            <Logo />
          </div>
          <div className="dash-navLink">
            <div>LOGOUT</div>
          </div>
        </div>
        <div className="dash-container--main">
          <DashbordLeftSide handleModels={handleModels} />
          {/* right side component */}

          <ToDoCard />
          <div className="dash-container--main-button">
            <img src={Ellipse} alt="Ellipse" />
          </div>
        </div>
        <DashboardModels
          modelState={modelState}
          handleModels={handleModels}
          handleResponce={handleResponce}
        />
      </div>
    </div>
  );
};

export default DashBoard;
