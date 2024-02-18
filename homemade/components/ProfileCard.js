import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const ProfileCard = ({ user }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.container}>
        <Image source={{ uri: user.url }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{user.firstname}</Text>
          <Text style={styles.speaks}>{user.languages}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.rating}>{user.rating}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{user.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    marginBottom: "5%"
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "1%",
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: "100%",
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 22,
  },
  speaks: {
    color: "gray",
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    fontSize: 25,
    color: "#ff851b",
  },
  rating: {
    marginLeft: 5,
    fontSize: 20,
  },
  bio: {
    color: "grey",
    fontSize: 15,
    marginTop: 4,
    alignSelf: "center",
  },
});
