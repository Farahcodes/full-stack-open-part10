// @ts-nocheck
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.padding.large,
    backgroundColor: 'white',
  },
  reviewContainer: {
    flexDirection: 'row',
  },
  ratingContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.margins.medium,
  },
  ratingText: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  contentContainer: {
    flex: 1,
  },
  username: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  date: {
    color: theme.colors.textSecondary,
    marginTop: theme.margins.small,
  },
  text: {
    marginTop: theme.margins.small,
  },
});

const ReviewItem = ({ review }) => {
  const { text, rating, createdAt, user } = review.node;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.date}>{formatDate(createdAt)}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;