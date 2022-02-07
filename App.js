import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import Routes from './routes/routes';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDU1MjM0NjIsImlhdCI6MTY0MzEwNDI2MiwiaXNzIjoiY2hhdGx5IiwianRpIjoiYzc2YWNkYmMtMzg4MS00M2E0LWJhMjktYjBiYjZjNmNkYTlhIiwibmJmIjoxNjQzMTA0MjYxLCJzdWIiOiI1MjUzYWEwMC0zYzU5LTRhNzQtOTRlZC01YWI5NTU2ZTQ5ZjkiLCJ0eXAiOiJhY2Nlc3MifQ.swla28rwn0_CXu2JukIRs4Yjin8fL6oMK2D-RB11A7fCIswm-8P3Jf7t7C9h2rwxYjC9Q1PfRraQ3iifJzg0jw";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
})

const link = authLink.concat(httpLink);
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache
})

export default function App() {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
            <Routes />
      </Provider>
    </ApolloProvider>
  );
}
