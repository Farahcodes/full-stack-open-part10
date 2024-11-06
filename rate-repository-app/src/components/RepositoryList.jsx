import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { RepositoryListContainer } from './RepositoryListContainer';

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return null;
  if (error) return null;

  return <RepositoryListContainer repositories={data?.repositories} />;
};

export default RepositoryList;
