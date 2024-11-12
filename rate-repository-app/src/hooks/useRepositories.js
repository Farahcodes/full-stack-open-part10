import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortBy, searchKeyword) => {
  let variables = {
    searchKeyword,
  };

  switch (sortBy) {
    case 'latest':
      variables = { ...variables, orderBy: "CREATED_AT", orderDirection: "DESC" };
      break;
    case 'highest':
      variables = { ...variables, orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
      break;
    case 'lowest':
      variables = { ...variables, orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
      break;
    default:
      variables = { ...variables, orderBy: "CREATED_AT", orderDirection: "DESC" };
  }

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: variables
  });

  return { repositories: data?.repositories, loading, error };
};

export default useRepositories;