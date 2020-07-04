import React from 'react';
import logo from './logo.svg';
import './App.css';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Hunts from './hunts';

function Apps() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_PH_GRAPHQL_URL
});

const client1 = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const client = new ApolloClient({
  uri: 'https://api.producthunt.com/v2/api/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_PH_KEY}` // TODO: Env variable doesn't work
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Top Hunts</h2>
    </div>
    <div>
      <Hunts />
    </div>
  </ApolloProvider>
);

export default App;
