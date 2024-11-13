import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

// components
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import ReviewForm from './ReviewForm';
import SignUp from './SignUp';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-review" element={<ReviewForm />} />
        <Route path="/my-reviews" element={<MyReviews />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;