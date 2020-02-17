/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import errorIcon from '../../assets/images/error.png';
import okIcon from '../../assets/images/circle-ok.png';
import closeMessagesIcon from '../../assets/images/closeMessages.png';
import cancelIcon from '../../assets/images/cancel.png';
import '../../assets/styles/ResponceMessage.scss';


const ResponceMessage = ({
  status, message, type, close,
}) => (
  <div
    className={`dash-container--message ${type}`}
    style={{ display: `${(status === 'up') ? 'grid' : 'none'}` }}
  >
    <img
      src={(type === 'success') ? okIcon : (type === 'worning') ? errorIcon : cancelIcon}
      alt="okIcon"
      className="dash-container--message-success"
    />
    <div className="dash-container--message-text">
      { message }
    </div>
    <img
      src={closeMessagesIcon}
      alt="closeMessagesIcon"
      className="dash-container--message-close"
      onClick={() => close({ status: 'down' })}
    />
  </div>
);

ResponceMessage.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
export default ResponceMessage;
