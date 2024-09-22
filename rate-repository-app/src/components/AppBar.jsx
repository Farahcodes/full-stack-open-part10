import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';


// theme
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection:"row"
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

const AppBarTab = ({ title, to }) => (
  <Link to={to} style={styles.tab}>
    <Text style={styles.tabText}>{title}</Text>
  </Link>
);

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title="Repositories" to="/" />
      <AppBarTab title="Sign in" to="/signin" />
    </View>
  );
};

export default AppBar;