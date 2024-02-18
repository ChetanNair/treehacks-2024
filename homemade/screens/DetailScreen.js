import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { LeftChevron } from "../components/LeftChevron";
import { CustomButton } from "../components/CustomButton";
import { ProfileCard } from "../components/ProfileCard";
import { ReviewList } from "../components/ReviewList";
import { formatTimestamp } from "../util/formatTimestamp";
import { supabase } from "../initSupabase";

export const DetailScreen = ({ navigation, route }) => {
  const [reviews, setReviews] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const { meal } = route.params;
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

  useEffect(() => {
    setLoading(true);
    async function getReviews() {
      try {
        const { data, error } = await supabase
          .from("review")
          .select("*, host:host(*)")
          .eq("meal_id", meal.id);
        setReviews(data);
        if (error) {
          alert(error);
        }
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
    getReviews();
    setLoading(false);
  }, []);

  if (!reviews) {
    return <Text>Hello</Text>;
  }
  return (
    <View style={{ backgroundColor: "white" }}>
      <LeftChevron navigation={navigation} />
      <ScrollView>
        <Image source={{ uri: meal.photo_url }} style={styles.image} />
        <View style={styles.container}>
          {/* Meal Details */}
          <View style={styles.titleContainer}>
            <Text style={styles.mealTitle}>{meal.name}</Text>
            <Text style={styles.distance}>{meal.distance} mi</Text>
          </View>

          <Text style={styles.mealDate}>
            {meal.meal_type} on {formatTimestamp(meal.time)}
          </Text>
          <Text style={styles.mealPrice}>{`$${meal.price} per plate`}</Text>
          <View style={styles.platesContainer}>
            <View style={{ flexDirection: "row" }}>
              {renderPlates(meal.available_plates, meal.total_plates)}
            </View>
            <CustomButton
              title={"Pull Up"}
              onPress={() => navigation.navigate("PaymentScreen")}
            />
          </View>

          {/* Description */}
          <Text style={styles.mealDescription}>{meal.description}</Text>

          <CustomButton
            title={"View Dietary Information"}
            onPress={() => alert("Open Modal")}
            customButtonStyles={styles.dietaryButton}
            customTextStyles={styles.dietaryButtonText}
          />

          {/* Host Information */}
          <Text style={styles.hostTitle}>About Your Host</Text>
          <ProfileCard user={meal.host} />
          <ReviewList reviews={reviews} />
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
    marginBottom: "1.5%",
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
