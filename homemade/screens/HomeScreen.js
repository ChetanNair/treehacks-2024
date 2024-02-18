import React from "react";
import { MealList } from "../components/MealList";
import { View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ marginHorizontal: "5%" }}>
        <MealList navigation={navigation} />
      </View>
    </View>
  );
};
