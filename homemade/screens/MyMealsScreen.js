import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyMealsList } from "../components/MyMealsList";

export const MyMealsScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
     <MyMealsList navigation={navigation} style={styles.mealList}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: "5%"
  },
});
