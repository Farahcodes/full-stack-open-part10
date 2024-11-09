import React from 'react';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return null;
  if (error) return null;

  const repository = data?.repository;

  return (
    <View style={styles.container}>
      <RepositoryItem item={repository} showGitHubLink={true} />
    </View>
  );
};

export default SingleRepository;