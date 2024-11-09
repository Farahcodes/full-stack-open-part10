import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onRepositoryPress }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <Pressable onPress={() => onRepositoryPress(item.id)}>
      <RepositoryItem item={item} showGitHubLink={false} />
    </Pressable>
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};