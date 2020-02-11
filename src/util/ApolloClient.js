import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';


const httpLink = createHttpLink({
  uri: process.env.TO_DO_BACK_END,
});

const authHttpLink = setContext((_, { headers }) => {
  const localToken = localStorage.getItem('to_do_token');
  const token = localToken ? JSON.parse(localToken).value : null;
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token && token}`,
    },
  };
});

const httpLinkWithAuthentication = authHttpLink.concat(httpLink);


const client = new ApolloClient({
  link: httpLinkWithAuthentication,
  cache: new InMemoryCache(),
});

export default client;
