/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/displayToDoList.scss';


const DisplayToDoList = ({ toDoLists, loading }) => (
  <div className="display-list">
    <div className="display-list-title">
      To do lists
    </div>
    <div className="display-list-items">

      {/** display all items */}
      {
        !loading
          ? toDoLists.length
            ? toDoLists.map((data, index) => (
              <div
                className="display-list-items--item"
                key={`display-list-items--item${data.id}`}
              >
                <div className="display-list-items--item-label" />
                <div className="display-list-items--item-name">
                  {data.title || `to do list ${index}`}
                </div>
                <div className="display-list-items--item-number">
                  <div>
                    {data.toDo.length}
                  </div>
                </div>
              </div>
            ))
            : (
              <div className="display-list-items--item">
                <div className="display-list-items--item-label" />
                <div className="display-list-items--item-name">
                  No to do list available
                </div>
                <div className="display-list-items--item-number">
                  <div />
                </div>
              </div>
            )
          : (
            <div>
              loading...
            </div>
          )
      }

    </div>
  </div>
);

DisplayToDoList.propTypes = {
  toDoLists: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default DisplayToDoList;
