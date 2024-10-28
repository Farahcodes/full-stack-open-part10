import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

// components
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  console.log('Query data:', data);
  console.log('Query error:', error);
  console.log('Loading:', loading);

  if (loading) return null;
  if (error) return null;

  const repositories = data?.repositories?.edges?.map(edge => edge.node) ?? [];
  console.log('Repositories:', repositories);

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
