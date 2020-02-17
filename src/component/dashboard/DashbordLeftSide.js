/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../assets/images/Icon-search.png';
import calenderIcon from '../../assets/images/calender-icon.png';
import watchIcon from '../../assets/images/watch-icon.png';
import listIcon from '../../assets/images/list.png';
import '../../assets/styles/dashboardLeft.scss';

const DashbordLeftSide = ({ handleModels }) => (
  <div className="dash-container--main-left">
    <div className="dash-container--main-left--search">
      <div className="dash-container--main-left--search-icon">
        <img src={SearchIcon} alt="search" />
      </div>
      <input type="text" placeholder="Search" className="dash-container--main-left--search-input" />
    </div>
    <div className="dash-container--main-left--buttons">
      <div className="dash-container--main-left--buttons-top">
        <div className="dash-container--main-left--buttons-top--todo">
          <div className="dash-container--main-left--buttons-top--todo-top">
            <img src={calenderIcon} alt="calenderIcon" />
            <div>
              12
            </div>
          </div>
          <div className="dash-container--main-left--buttons-top--todo-title">
            Today
          </div>
        </div>

        <div className="dash-container--main-left--buttons-top--scheduled">
          <div className="dash-container--main-left--buttons-top--todo-top">
            <img src={watchIcon} alt="calenderIcon" />
            <div>
              23
            </div>
          </div>
          <div className="dash-container--main-left--buttons-top--todo-title">
            Today
          </div>
        </div>
      </div>

      <div className="dash-container--main-left--buttons-alllist">
        <img src={listIcon} alt="listIcon" />
        <div>
          ALL LISTS
        </div>
        <div>
          65
        </div>
      </div>
      <div className="dash-container--main-left--buttons-more">
        <div className="dash-container--main-left--buttons-more--1" onClick={() => handleModels('up', 'createTodo')}>
          Create List
        </div>
        <div className="dash-container--main-left--buttons-more--2">
          Schedul
        </div>
      </div>
    </div>
  </div>

);

DashbordLeftSide.propTypes = {
  handleModels: PropTypes.func.isRequired,
};

export default DashbordLeftSide;
