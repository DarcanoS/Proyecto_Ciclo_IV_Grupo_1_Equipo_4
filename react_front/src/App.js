import React from 'react';
//import ApolloClient, { HttpLink, ApolloLink, InMemoryCache, from } from 'apollo-boost';
//import { ApolloProvider } from 'react-apollo';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import Browser from './components/Browser';

import 'bootstrap/dist/css/bootstrap.min.css';

// const httpLink = new HttpLink({ uri: "http://localhost:3001/graphiql"});

// const authMiddleware = new ApolloLink( (operation, forward) => {
//   operation.setContext( ({headers = {}}) => ({
//     headers: {
//       ...headers,
//     }
//   }))
//   return forward(operation);
// })

const client = new ApolloClient({
  uri:'http://localhost:3001/graphiql',
  cache: new InMemoryCache(),
  // link: from([
  //   authMiddleware,
  //   httpLink
  // ])
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Browser />
    </ApolloProvider>
  );
}

export default App;
