import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';


import { RepositoryListContainer } from './RepositoryListContainer';
import useRepositories from '../hooks/useRepositories';
const RepositoryList = () => {
  const [sortBy, setSortBy] = useState('latest');
  const { repositories, loading } = useRepositories(sortBy);
  const navigate = useNavigate();

  const onRepositoryPress = (id) => {
    navigate(`/repository/${id}`);
  };

  if (loading) return null;

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortBy={sortBy}
      setSortBy={setSortBy}
      onRepositoryPress={onRepositoryPress}
    />
  );
};

export default RepositoryList;
