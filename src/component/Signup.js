/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import '../assets/styles/signup.scss';
import { useMutation } from '@apollo/react-hooks';
import { signupValidate } from './validation';
import CREATE_USER from '../graphql/mutation/user';
import HomeInput from './HomeInput';

const Signup = () => {
  const [atribut, setAtribut] = useState({});
  const [validation, setValidation] = useState({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    rePassword: true,
  });

  const [CreateUser, { loading }] = useMutation(CREATE_USER);
  const handelChange = (e) => {
    setAtribut({
      ...atribut,
      [e.target.name]: e.target.value,
    });
  };
  const handelOnKeyUp = () => setValidation(signupValidate(atribut));

  const handelSubmit = () => {
    const {
      firstName, lastName, email, password,
    } = validation;
    !loading && (
      firstName && lastName && email && password
    ) && CreateUser({
      variables: {
        firstName,
        lastName,
        email,
        role: 'admin',
        password,
        age: null,
      },
    });
  };

  const {
    firstName, lastName, email, password, rePassword,
  } = validation;
  return (
    <div className="signup-form">
      <div className="signup-form--title">
        Create an account
      </div>
      <div className="signup-form--input signup-display">
        <HomeInput
          handelChange={handelChange}
          validation={firstName}
          name="firstName"
          placeholder="First name"
          errorMessage="first name should containe at list three letters!"
        />
        <HomeInput
          handelChange={handelChange}
          validation={lastName}
          name="lastName"
          placeholder="Last name"
          errorMessage="last name should containe at list three letters!"
        />
        <HomeInput
          handelChange={handelChange}
          validation={email}
          name="email"
          placeholder="Your email address"
          errorMessage="email is not valid!"
        />
        <HomeInput
          handelChange={handelChange}
          validation={password}
          type="password"
          name="password"
          placeholder="Create a password"
          errorMessage="password is not valid!"
        />
        <HomeInput
          handelChange={handelChange}
          validation={rePassword}
          type="password"
          name="rePassword"
          placeholder="Re-type your password"
          errorMessage="re-password should be semilar to password!"
        />
      </div>
      <div className="signup-form--button" onClick={handelSubmit} onMouseDown={handelOnKeyUp}>
        SIGNUP
      </div>
    </div>
  );
};

export default Signup;
