import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const MapScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Map Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("DetailScreen")}>
        <Text>Reserve</Text>
      </TouchableOpacity>
    </View>
  );
};
