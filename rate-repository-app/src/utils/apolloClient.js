import { ApolloClient, InMemoryCache } from '@apollo/client';


const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.1.107:4000/graphql',
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;