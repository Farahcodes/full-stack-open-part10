// @ts-nocheck
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import Text from './Text';
import theme from '../theme';
import { format } from 'date-fns';
import { Button } from 'react-native-paper';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  reviewContainer: {
    backgroundColor: 'white',
    padding: 15,
  },
  reviewHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  ratingContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  ratingText: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  reviewInfo: {
    flex: 1,
  },
  repositoryName: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  reviewText: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review, navigate }) => {
  const { repository, rating, createdAt, text } = review.node;

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <View style={styles.reviewInfo}>
          <Text style={styles.repositoryName}>{repository.fullName}</Text>
          <Text style={styles.date}>
            {format(new Date(createdAt), 'dd.MM.yyyy')}
          </Text>
          <Text style={styles.reviewText}>{text}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigate(`/repository/${repository.id}`)}
        >
          View repository
        </Button>
      </View>
    </View>
  );
};

const MyReviews = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return null;
  if (error) return <Text>Error loading reviews</Text>;
  if (!data?.me?.reviews?.edges?.length) return <Text>No reviews yet</Text>;

  const reviews = data.me.reviews.edges;

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewItem review={item} navigate={navigate} />
      )}
      keyExtractor={({ node }) => node.id}
    />
  );
};

export default MyReviews;