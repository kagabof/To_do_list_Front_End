import React from 'react';
import PropTypes from 'prop-types';


const HomeInput = ({
  handelChange, validation, name, placeholder, errorMessage, type,
}) => (
  <>
    <input
      type={type || 'text'}
      name={name}
      placeholder={placeholder}
      onChange={handelChange}
      style={{
        borderBottom: `${(validation !== false) ? '2px solid white'
          : '2px solid red'}`,
      }}
    />
    <p>{(validation === false) && errorMessage && errorMessage }</p>
  </>
);


HomeInput.propTypes = {
  handelChange: PropTypes.func.isRequired,
  validation: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  type: PropTypes.string,
};

HomeInput.defaultProps = {
  validation: true,
  name: 'text',
  placeholder: '',
  errorMessage: '',
  type: '',
};

export default HomeInput;
