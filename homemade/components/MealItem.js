import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export const MealItem = ({ title, description, imageUrl, rating, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.item}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.rating}>{rating}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  image: {
    width: '100%',
    height: 200, // Adjust the height as needed
    borderRadius: 10, // Optional: for rounded corners
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
