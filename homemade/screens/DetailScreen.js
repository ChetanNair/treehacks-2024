import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const DetailScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Food Detail Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("PaymentScreen")}
      >
        <Text>Reserve</Text>
      </TouchableOpacity>
    </View>
  );
};
