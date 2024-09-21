import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';

// theme
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
});

const AppBarTab = ({ title }) => (
  <Pressable style={styles.tab}>
    <Text style={styles.tabText}>{title}</Text>
  </Pressable>
);

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title="Repositories" />
    </View>
  );
};

export default AppBar;