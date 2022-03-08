import React from 'react';
import ReactDOM from 'react-dom';
import SongList from './Components/SongList';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';

const client = new ApolloClient({});

const Root = () => {
  return <div><SongList /></div>
};

<ApolloProvider client={client}>
  <Root />
</ApolloProvider>

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
