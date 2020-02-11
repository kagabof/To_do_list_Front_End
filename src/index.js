import React from 'react';
import ReactDom from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/main.scss';
import client from './util/ApolloClient';
import App from './App';


const renderToDOM = () => {
  if (document.getElementById('app') !== null) {
    ReactDom.render(
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <App />
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>,
      document.getElementById('app'),
    );
  }
};

renderToDOM();
export default renderToDOM;
