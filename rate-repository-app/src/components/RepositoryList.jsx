// @ts-nocheck
import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const { repositories, loading } = useRepositories(sortBy, debouncedSearchQuery);
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
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onRepositoryPress={onRepositoryPress}
    />
  );
};

export default RepositoryList;
