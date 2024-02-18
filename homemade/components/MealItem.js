import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { formatTimestamp } from "../util/formatTimestamp";

export const MealItem = ({ meal, onPress, host }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.item}>
        <Image source={{ uri: meal.photo_url }} style={styles.mealImage} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.title}>{meal.name}</Text>
            <Text style={styles.date}>
              {meal.meal_type} on {formatTimestamp(meal.time)}
            </Text>
            <Text style={styles.cost}>${meal.price} per plate</Text>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={{ uri: meal.host.profile_pic }} style={styles.hostImage} />
              <Text style={styles.hostName}>{meal.host.firstname}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.rating}>{meal.host.rating}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  item: {
    marginVertical: "5%",
  },
  hostImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginHorizontal: 5,
  },
  mealImage: {
    width: "100%",
    height: 400, // Adjust the height as needed
    borderRadius: 10, // Optional: for rounded corners
    marginBottom: "4%",
  },
  title: {
    fontSize: 16,
    color: "#121212",
    fontWeight: "500",
  },
  date: {
    color: "#535353",
    fontSize: 16,
  },
  rating: {
    fontSize: 16,
    fontWeight: "500",
  },
  hostName: {
    color: "#121212",
    fontWeight: "500",
  },
  cost: {
    color: "#535353",
    fontSize: 16,
  },
  star: {
    color: "#ff851b",
    marginRight: 2,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
