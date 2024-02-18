import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ReviewCard } from "./ReviewCard";
import { useWindowDimensions } from "react-native";

export const ReviewList = ({ reviews }) => {
  const { width } = useWindowDimensions();
  const renderItem = ({ item }) => (
    <View style={{ maxWidth: width - 2 * (width * 0.05), marginHorizontal: 5}}>
      <ReviewCard
        reviewerName={item.reviewerName}
        rating={item.rating}
        reviewDate={item.reviewDate}
        reviewText={item.reviewText}
        imageUrl={item.imageUrl}
      />
    </View>
  );

  return (
    <FlatList
      horizontal
      data={reviews}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 0, // Ensures the FlatList doesn't expand beyond its content size
  },
});
