import React from 'react';
import { View, StyleSheet } from 'react-native';

// components
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
};

export default Main;