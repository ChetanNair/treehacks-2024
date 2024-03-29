import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const ConfirmationScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Confirmation Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.popToTop();
        }}
      >
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
};
