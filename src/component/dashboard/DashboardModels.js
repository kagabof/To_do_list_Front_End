/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../../assets/images/close.png';
import createToDoListMutation from '../../graphql/mutation/todo';
import { stringValidation } from '../home/validation';


const DashboardModels = ({ modelState, handleModels, handleResponce }) => {
  const [inputData, setInputData] = useState({});
  const [loading, setLoading] = useState(false);
  const createToDoList = createToDoListMutation();
  const handelChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = async () => {
    setLoading(true);
    if (stringValidation(inputData.todoListTitle)) {
      const { data, error } = await createToDoList({
        variables: {
          type: 'list',
          title: inputData && inputData.todoListTitle,
        },
      });
      setLoading(false);
      data && handleModels('down');
      data && (handleResponce({
        type: 'success',
        message: 'To do list created',
        status: 'up',
      }), handleModels('down'));
      error && handleResponce({
        type: 'error',
        message: 'To do list not created',
        status: 'up',
      });
    } else {
      handleModels('down');
      handleResponce({
        type: 'error',
        message: 'To do list not created',
        status: 'up',
      });
    }
  };

  return (
    <div className="dash-container--models" style={{ display: `${(modelState === 'down') ? 'none' : 'grid'}` }}>
      <div
        className="dash-container--models-create-todo"
        style={{ display: `${modelState === 'down' && 'none'}` }}
      >
        <div className="dash-container--models-create-todo--top">
          <div>
            Creact to do list
          </div>
          <img src={closeIcon} alt="closeIcon" onClick={() => handleModels('down')} />
        </div>
        <div className="dash-container--models-create-todo--input">
          <input type="text" name="todoListTitle" placeholder="List name" onChange={handelChange} />
        </div>
        <div>
          <div
            type="submit"
            className="dash-container--models-create-todo--button disabled"
            onClick={handleClick}
            disabled={loading}
          >
            Create
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardModels.propTypes = {
  modelState: PropTypes.string.isRequired,
  handleModels: PropTypes.func.isRequired,
  handleResponce: PropTypes.func.isRequired,
};

export default DashboardModels;
