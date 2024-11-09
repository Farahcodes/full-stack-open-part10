// @ts-nocheck
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { RepositoryListContainer } from './RepositoryListContainer';
import { useNavigate } from 'react-router-native';

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  const navigate = useNavigate();

  const onRepositoryPress = (id) => {
    navigate(`/repository/${id}`);
  };

  if (loading) return null;
  if (error) return null;

  return (
    <RepositoryListContainer
      repositories={data?.repositories}
      onRepositoryPress={onRepositoryPress}
    />
  );
};

export default RepositoryList;
