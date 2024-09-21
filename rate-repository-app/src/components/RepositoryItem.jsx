import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const formatCount = (count) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  }
  return count.toString();
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.fullName}>{item.fullName}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
      <View style={styles.stats}>
        <Text>Forks: {formatCount(item.forksCount)}</Text>
        <Text>Stars: {formatCount(item.stargazersCount)}</Text>
        <Text>Rating: {item.ratingAverage}</Text>
        <Text>Reviews: {formatCount(item.reviewCount)}</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  fullName: {
    fontWeight: 'bold',
  },
  description: {
    color: 'grey',
    marginVertical: 5,
  },
  language: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 4,
    borderRadius: 3,
    alignSelf: 'flex-start',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default RepositoryItem;