import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortBy) => {
  let variables = {};

  switch (sortBy) {
    case 'latest':
      variables = { orderBy: "CREATED_AT", orderDirection: "DESC" };
      break;
    case 'highest':
      variables = { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
      break;
    case 'lowest':
      variables = { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
      break;
    default:
      variables = { orderBy: "CREATED_AT", orderDirection: "DESC" };
  }

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: variables
  });

  console.log('Current sort:', sortBy, 'Variables:', variables);
  console.log('Repositories:', data?.repositories);

  return { repositories: data?.repositories, loading, error };
};

export default useRepositories;