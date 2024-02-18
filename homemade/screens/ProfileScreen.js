import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { CustomButton } from "../components/CustomButton";
import { ReviewList } from "../components/ReviewList";

export const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(
    "Hi! I’m Anne-Marie, a recent college graduate from the U.S. looking to travel the world! My favorite part of traveling is trying new foods and making new friends! When I’m not traveling or working, I love to code, eat, and read. I’m looking forward to meeting you!"
  );

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
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

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/exampleprofile.png")}
          style={styles.image}
        />
      </View>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Nunito_400Regular",
          marginBottom: 20,
        }}
      >
        Anne-Marie Amberly
      </Text>
      {isEditing ? (
        <>
          <CustomButton title="Save Profile" onPress={handleSaveProfile} />
          <View style={styles.bioContainer}>
            <Text style={styles.headerText}>Bio</Text>
            <TextInput
              multiline
              numberOfLines={4}
              style={styles.bioTextInput}
              value={bio}
              onChangeText={setBio}
            />
            <Text style={styles.headerText}>My Past Reviews</Text>
            <ReviewList reviews={reviewsData} />
          </View>
        </>
      ) : (
        <>
          <CustomButton title="Edit Profile" onPress={handleEditProfile} />
          <View style={styles.bioContainer}>
            <Text style={styles.headerText}>Bio</Text>
            <Text style={styles.bioText}>{bio}</Text>
            <Text style={styles.headerText}>My Past Reviews</Text>
            <ReviewList reviews={reviewsData} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    marginBottom: 15,
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bioContainer: {
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginRight: "5%",
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Nunito_700Bold",
    textAlign: "left",
    marginTop: 30,
    marginBottom: 5,
  },
  bioText: {
    fontSize: 15,
    fontFamily: "Nunito_400Regular",
  },
  bioTextInput: {
    height: 150,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontFamily: "Nunito_400Regular",
    fontSize: 15,
  }
});
