/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import '../../assets/styles/signup.scss';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { loginValidation } from './validation';
import { USER_LOGIN } from '../../graphql/mutation/user';
import HomeInput from './HomeInput';
import setWithExpiry from '../../helpers/setWithExpiry';


const Login = () => {
  const [atribut, setAtribut] = useState({});
  const [res, setRes] = useState({
    error: null,
    data: null,
  });
  const [validation, setValidation] = useState({
    valid: true,
  });
  const history = useHistory();
  const { data, error } = useQuery(USER_LOGIN, {
    variables: {
      email: atribut && atribut.email,
      password: atribut && atribut.password,
    },
  });
  const handelChange = (e) => {
    setAtribut({
      ...atribut,
      [e.target.name]: e.target.value,
    });
  };
  const handelOnKeyUp = () => setValidation({ valid: loginValidation(atribut) });

  const handelSubmit = () => {
    const { valid } = validation;
    valid && setRes({
      ...res,
      error,
      data,
    });
  };

  const { valid } = validation;

  useEffect(() => {
    res
    && res.data
    && res.data.Signin
    && res.data.Signin.token
    && (setWithExpiry('to_do_token', res.data.Signin.token, 4), history.push('/dashboard'));
  });
  return (
    <div className="signup-form">
      <div className="signup-form--title">
        Log in to your todo app
      </div>
      <div className="signup-form--input signup-display">
        <p>
          {res && res.error && 'Incorect password or email!'}
        </p>
        <HomeInput
          handelChange={handelChange}
          validation={valid}
          name="email"
          placeholder="Email example@ex.exa"
          errorMessage=""
        />
        <HomeInput
          handelChange={handelChange}
          validation={valid}
          type="password"
          name="password"
          placeholder="Password"
          errorMessage=""
        />
      </div>
      <div className="signup-form--button login-form--button" onClick={handelSubmit} onMouseDown={handelOnKeyUp}>
        LOGIN
      </div>
    </div>
  );
};

export default Login;
