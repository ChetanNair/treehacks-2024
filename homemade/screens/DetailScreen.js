import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { LeftChevron } from "../components/LeftChevron";
import { CustomButton } from "../components/CustomButton";
import { ProfileCard } from "../components/ProfileCard";

const placeholder = "https://toriavey.com/images/2011/01/TOA109_18-1.jpeg";

const host = {
  firstname: "Maria",
  lastname: "Maria",
  bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. ",
  url: "https://dlzvpuc9ucfb7.cloudfront.net/Andrew_Gerges_8fdd72d6c2.jpg",
  languages: "English",
  rating: "4.3",
};

const meal = {
  name: "Falafel Plate with Hummus",
  distance: "2.0",
  date: "Lunch on February 17 @ 12pm",
  price: "25",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede.",
};

const placeholder_data = {
  meal: meal,
  host: host,
};

export const DetailScreen = ({ navigation }) => {
  return (
    <>
      <LeftChevron navigation={navigation} />
      <ScrollView>
        <Image source={{ uri: placeholder }} style={styles.image} />
        <View style={styles.container}>
          {/* Meal Details */}
          <View style={styles.titleContainer}>
            <Text style={styles.mealTitle}>{placeholder_data.meal.name}</Text>
            <Text style={styles.distance}>
              {placeholder_data.meal.distance} mi
            </Text>
          </View>

          <Text style={styles.mealDate}>{placeholder_data.meal.date}</Text>
          <Text
            style={styles.mealPrice}
          >{`$${placeholder_data.meal.price} per plate`}</Text>
          <View style={styles.platesContainer}>
            <Text style={styles.plateIcons}>TODO: INSERT PLATES</Text>
            <CustomButton
              title={"Reserve"}
              onPress={() => navigation.navigate("PaymentScreen")}
            />
          </View>

          {/* Description */}
          <Text style={styles.mealDescription}>
            {placeholder_data.meal.description}
          </Text>

          <CustomButton
            title={"View Dietary Information"}
            onPress={() => alert("Open Modal")}
            customButtonStyles={styles.dietaryButton}
            customTextStyles={styles.dietaryButtonText}
          />

          {/* Host Information */}
          <Text style={styles.hostTitle}>About Your Host</Text>
          <ProfileCard user={placeholder_data.host} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "2%",
    marginHorizontal: "5%",
  },
  image: {
    width: "100%",
    height: 350, // Adjust the height as needed
    borderRadius: 10, // Optional: for rounded corners
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3%",
  },
  mealTitle: {
    fontSize: 24,
  },
  distance: {},
  mealDate: {
    fontSize: 18,
    color: "grey",
    marginBottom: "1.5%",
  },
  mealPrice: {
    fontSize: 17,
    color: "grey",
  },
  platesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5%",
  },
  plateIcons: {
    fontSize: 15,
  },
  mealDescription: {
    fontStyle: "italic",
    color: "grey",
    marginBottom: "5%",
  },
  dietaryButton: {
    paddingHorizontal: 0,
    paddingVertical: 8,
    borderRadius: "7.5%",
    borderWidth: 1,
    width: "60%",
    alignItems: "center",
    alignSelf: "left",
    marginBottom: "10%",
  },
  dietaryButtonText: {
    color: "black",
  },
  hostTitle: {
    fontSize: 20,
    marginBottom: "3%",
  },
});
