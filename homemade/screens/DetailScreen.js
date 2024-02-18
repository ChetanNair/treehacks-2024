import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { LeftChevron } from "../components/LeftChevron";
import { CustomButton } from "../components/CustomButton";
import { ProfileCard } from "../components/ProfileCard";
import { ReviewList } from "../components/ReviewList";

const placeholder = "https://toriavey.com/images/2011/01/TOA109_18-1.jpeg";

const host = {
  firstname: "Maria",
  lastname: "Maria",
  bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. ",
  url: "https://dlzvpuc9ucfb7.cloudfront.net/Andrew_Gerges_8fdd72d6c2.jpg",
  languages: "English",
  rating: "4.3",
};

const reviewsData = [
  {
    reviewerName: "Yolanda",
    rating: 4,
    reviewDate: "01/31/24",
    reviewText:
      "Meeting Maria was genuinely the highlight of my trip. I think I've made a friend for life <3 - one that cooks some of the best food I've ever had!",
    imageUrl:
      "https://dlzvpuc9ucfb7.cloudfront.net/Andrew_Gerges_8fdd72d6c2.jpg",
  },
  {
    reviewerName: "Yolanda",
    rating: 4,
    reviewDate: "01/31/24",
    reviewText:
      "Meeting Maria was genuinely the highlight of my trip. I think I've made a friend for life <3 - one that cooks some of the best food I've ever had!",
    imageUrl:
      "https://dlzvpuc9ucfb7.cloudfront.net/Andrew_Gerges_8fdd72d6c2.jpg",
  },
  {
    reviewerName: "Yolanda",
    rating: 4,
    reviewDate: "01/31/24",
    reviewText:
      "Meeting Maria was genuinely the highlight of my trip. I think I've made a friend for life <3 - one that cooks some of the best food I've ever had!",
    imageUrl:
      "https://dlzvpuc9ucfb7.cloudfront.net/Andrew_Gerges_8fdd72d6c2.jpg",
  },
  {
    reviewerName: "Yolanda",
    rating: 4,
    reviewDate: "01/31/24",
    reviewText:
      "Meeting Maria was genuinely the highlight of my trip. I think I've made a friend for life <3 - one that cooks some of the best food I've ever had!",
    imageUrl:
      "https://dlzvpuc9ucfb7.cloudfront.net/Andrew_Gerges_8fdd72d6c2.jpg",
  },
];

const meal = {
  name: "Falafel Plate with Hummus",
  distance: "2.0",
  date: "Lunch on February 17 @ 12pm",
  price: "25",
  available_plates: 3,
  total_plates: 5,
  description:
    "Join our family for a classic Greek meal: featuring crispy chickpea patties infused with Mediterranean flavors, served alongside creamy hummus and fresh veggies, nestled in warm pita bread.",
};

const placeholder_data = {
  meal: meal,
  host: host,
};

export const DetailScreen = ({ navigation }) => {
  const renderPlates = (available, total) => {
    let plates = [];
    for (let i = 1; i <= total; i++) {
      plates.push(
        <Text key={i} style={styles.plate}>
          {i <= available ? "●" : "○"}
        </Text>
      );
    }
    return plates;
  };
  return (
    <View style={{ backgroundColor: "white" }}>
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
            <View style={{flexDirection: "row"}}>
              {renderPlates(
                placeholder_data.meal.available_plates,
                placeholder_data.meal.total_plates
              )}
            </View>
            <CustomButton
              title={"Pull Up"}
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
          <ReviewList reviews={reviewsData} />
        </View>
      </ScrollView>
    </View>
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
  plate: {
    color: "#ff851b",
    fontSize: 25,
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
    marginBottom: "1.5%"
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
    lineHeight: 20,
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
