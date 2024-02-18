import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const ReviewCard = ({
  reviewerName,
  rating,
  reviewDate,
  reviewText,
  imageUrl,
}) => {
  // Function to render the stars based on the rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text key={i} style={styles.star}>
          {i <= rating ? "★" : "☆"}
        </Text>
      );
    }
    return stars;
  };

  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.name}>{reviewerName}</Text>
      </View>
      <View style={styles.ratingRow}>
        {renderStars(rating)}
        <Text style={styles.date}>{reviewDate}</Text>
      </View>
      <Text style={styles.reviewText}>{reviewText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F2F2F2",
    borderRadius: 6,
    padding: 15,
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 10,
    width: "100%",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    marginLeft: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    padding: 10,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    color: "#ff851b",
    marginRight: 2,
  },
  date: {
    marginLeft: 8,
    fontSize: 12,
    color: "grey",
  },
  reviewText: {
    fontSize: 14,
    marginTop: 4,
  },
});
