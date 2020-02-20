/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import '../../assets/styles/signup.scss';
import { useHistory } from 'react-router-dom';
import HomeInput from './HomeInput';
import setWithExpiry from '../../helpers/setWithExpiry';
import USER_LOGIN from '../../graphql/query/login';


const Login = () => {
  const [atribut, setAtribut] = useState({});

  const [loginUser, { data, error }] = useLazyQuery(USER_LOGIN);
  const history = useHistory();

  const handelChange = (e) => {
    setAtribut({
      ...atribut,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = () => {
    loginUser({
      variables: {
        email: atribut.email,
        password: atribut.password,
      },
    });
  };


  useEffect(() => {
    data
    && data.Signin
    && data.Signin.token
    && (
      setWithExpiry('to_do_token', data.Signin.token, 4),
      localStorage.setItem('to_do_list_user_id', data.Signin.id),
      history.push('/dashboard')
    );
  });
  return (
    <div className="signup-form">
      <div className="signup-form--title">
        Log in to your todo app
      </div>
      <div className="signup-form--input signup-display">
        <p>
          {error && 'Incorect password or email!'}
        </p>
        <HomeInput
          handelChange={handelChange}
          validation
          name="email"
          placeholder="Email example@ex.exa"
          errorMessage=""
        />
        <HomeInput
          handelChange={handelChange}
          validation
          type="password"
          name="password"
          placeholder="Password"
          errorMessage=""
        />
      </div>
      <div
        className="signup-form--button login-form--button"
        onClick={handelSubmit}
      >
        LOGIN
      </div>
    </div>
  );
};

export default Login;
