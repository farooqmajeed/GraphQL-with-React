import React from 'react';
import ReactDOM from 'react-dom';
import SongList from './Components/SongList';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import {Route, Router, useHistory,  } from 'react-router'

const client = new ApolloClient({});

const Root = () => {
  return (<ApolloProvider client={client}>
    <SongList />
  </ApolloProvider>)
};



ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
