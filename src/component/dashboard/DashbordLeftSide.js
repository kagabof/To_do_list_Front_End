/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import SearchIcon from '../../assets/images/Icon-search.png';
import calenderIcon from '../../assets/images/calender-icon.png';
import watchIcon from '../../assets/images/watch-icon.png';
import listIcon from '../../assets/images/list.png';
import '../../assets/styles/dashboardLeft.scss';
import DisplayToDoList from './ToDoListDisplay';
import GET_USER from '../../graphql/query/user';


const DashbordLeftSide = ({ handleModels }) => {
  const {
    data: {
      User: { toDoList = [] } = {},
    } = {}, error, loading,
  } = useQuery(GET_USER, {
    variables: {
      id: localStorage.getItem('to_do_list_user_id'),
    },
  });

  return (
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
            {toDoList.length}
          </div>
        </div>

        <div className="dash-container--main-left--buttons-more">
          <div className="dash-container--main-left--buttons-more--1" onClick={() => handleModels('up', 'todo')}>
          Create List
          </div>
          <div className="dash-container--main-left--buttons-more--2" onClick={() => handleModels('up', 'schedul')}>
          Schedul
          </div>
        </div>

        <DisplayToDoList
          toDoLists={toDoList}
          loading={loading}
        />
      </div>
    </div>

  );
};

DashbordLeftSide.propTypes = {
  handleModels: PropTypes.func.isRequired,
};

export default DashbordLeftSide;
