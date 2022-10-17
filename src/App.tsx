import React from 'react';
import './App.css';
import { ApolloClient,InMemoryCache,ApolloProvider,HttpLink,from, createHttpLink } from '@apollo/client';
import {setContext} from "@apollo/client/link/context"
import Profile from './pages/profile';
import 'bootstrap/dist/css/bootstrap.min.css';

const link =from([
    
  new HttpLink({uri:"https://api.github.com/graphql"})
])

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  
  const token : string | undefined = (process.env.REACT_APP_GITHUB_TOKEN )

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}` ,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


const  App:React.FC=()=> {
  return (
    
    <ApolloProvider client={client}>   
   <Profile></Profile>
   </ApolloProvider>

  );
}

export default App;
