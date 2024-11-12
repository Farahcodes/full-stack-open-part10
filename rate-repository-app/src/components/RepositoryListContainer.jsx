// @ts-nocheck
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({
  repositories,
  sortBy,
  setSortBy,
  searchQuery,
  setSearchQuery,
  onRepositoryPress
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderHeader = () => (
    <RepositoryListHeader
      sortBy={sortBy}
      setSortBy={setSortBy}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem
          item={item}
          onPress={() => onRepositoryPress(item.id)}
        />
      )}
      keyExtractor={item => item.id}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default RepositoryListContainer;