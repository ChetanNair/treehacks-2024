import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { CustomButton } from "./CustomButton";

export const MyMealItem = ({ meal, host }) => (
  <Pressable>
    <View style={styles.item}>
    <Image source={{ uri: meal.url }} style={styles.mealImage} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.title}>{meal.title}</Text>
          <Text style={styles.date}>{meal.date}</Text>
          <Text style={styles.cost}>{meal.numPlates}</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={{ uri: host.url }} style={styles.hostImage} />
            <Text style={styles.hostName}>{host.firstname}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.rating}>{meal.rating}</Text>
          </View>
        </View>
      </View>
      {
        meal.cancellable
        ?
        <View style={styles.buttonContainer}>
          <CustomButton
              title={"Cancel"}
              onPress={() => alert('Are you sure you want to cancel this meal?')}
              customButtonStyles={styles.cancelButton}
              customTextStyles={styles.cancelButtonText}
            />
        </View>
        :
        <Text style={styles.date}>{meal.location}</Text>
      }
    </View>
  </Pressable>
);

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
  cancelButton: {
    paddingHorizontal: 0,
    paddingVertical: 8,
    borderRadius: "7.5%",
    borderWidth: 1,
    width: "30%",
    alignItems: "center",
    marginTop: -7
  },
  cancelButtonText: {
    fontFamily: "Nunito_400Regular",
    color: "black",
    fontSize: 18
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
