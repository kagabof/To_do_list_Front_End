/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './component/HomePage';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <HomePage navLink="home" />} />
        <Route exact path="/signup" component={() => <HomePage navLink="signup" />} />
        <Route exact path="/login" component={() => <HomePage navLink="login" />} />
      </Switch>
    );
  }
}

export default App;
