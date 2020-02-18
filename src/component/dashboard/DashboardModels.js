/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../../assets/images/close.png';
import createToDoListMutation from '../../graphql/mutation/todo';
import { stringValidation } from '../home/validation';


const DashboardModels = ({
  modelState, handleModels, handleResponce, currentMode,
}) => {
  const [inputData, setInputData] = useState({});
  const [loading, setLoading] = useState(false);
  const createToDoList = createToDoListMutation();
  const handelChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = async (type) => {
    setLoading(true);
    if (stringValidation(inputData.todoListTitle)) {
      const { data, error } = await createToDoList({
        variables: {
          type,
          title: inputData && inputData.todoListTitle,
        },
      });
      setLoading(false);
      data && handleModels('down');
      data && (handleResponce({
        type: 'success',
        message: `${type} created`,
        status: 'up',
      }), handleModels('down'));
      error && handleResponce({
        type: 'error',
        message: `${type} not created`,
        status: 'up',
      });
    } else {
      handleModels('down');
      handleResponce({
        type: 'error',
        message: `${type} not created`,
        status: 'up',
      });
    }
  };
  return (
    <div className="dash-container--models" style={{ display: `${(modelState === 'down') ? 'none' : 'grid'}` }}>
      <div
        className="dash-container--models-create-todo"
        style={{ display: `${currentMode ? '' : 'none'}` }}
      >
        <div className="dash-container--models-create-todo--top">
          <div>
            { currentMode !== 'schedul' ? 'Creact to do list' : 'Create schedul'}
          </div>
          <img src={closeIcon} alt="closeIcon" onClick={() => handleModels('down', 'todo')} />
        </div>
        <div className="dash-container--models-create-todo--input">
          <input
            type="text"
            name="todoListTitle"
            placeholder={currentMode === 'list' ? 'List name' : 'Schedul name'}
            onChange={handelChange}
          />
        </div>
        <div>
          <div
            type="submit"
            className="dash-container--models-create-todo--button disabled"
            onClick={() => handleClick(currentMode)}
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
  currentMode: PropTypes.string,
};

DashboardModels.defaultProps = {
  currentMode: 'todo',
};


export default DashboardModels;
