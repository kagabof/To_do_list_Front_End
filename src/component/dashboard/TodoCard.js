import React from 'react';
import editIcon from '../../assets/images/edit.png';
import timeIcon from '../../assets/images/time.png';
import locationIcon from '../../assets/images/location.png';
import '../../assets/styles/todoCard.scss';

const TodoCard = () => (
  <div className="dash-container--main-right--to-do-card">
    <div className="dash-container--main-right--to-do-card-sidenote" />
    <div className="dash-container--main-right--to-do-card-info">
      <div className="dash-container--main-right--to-do-card-info--top">
        <div className="dash-container--main-right--to-do-card-info--top-title">
          Weak-up time
        </div>
        <img src={editIcon} alt={editIcon} />
      </div>
      <div className="dash-container--main-right--to-do-card-info--description">
        Time for starting implimenting features
      </div>
      <div className="dash-container--main-right--to-do-card-info--bottom">
        <div className="dash-container--main-right--to-do-card-info--bottom-time">
          <img src={timeIcon} alt="timeIcon" />
          <div>7:00 am</div>
        </div>
        <div className="dash-container--main-right--to-do-card-info--bottom-location">
          <img src={locationIcon} alt="locationIcon" />
          <div>Kigali, Rwanda</div>
        </div>
      </div>
    </div>
  </div>
);


export default TodoCard;
