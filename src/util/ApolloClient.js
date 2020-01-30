import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { setContext } from 'apollo-link-context';


// const { TO_DO_BACK_END } = process.env || {};

const httpLink = createHttpLink({
  uri: 'https://back-end-to-do-list.herokuapp.com/',
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
