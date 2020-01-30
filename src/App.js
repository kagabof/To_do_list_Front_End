/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './component/HomePage';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    );
  }
}

export default App;
