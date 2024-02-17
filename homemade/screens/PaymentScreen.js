import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const PaymentScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Payment Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.popToTop();
        }}
      >
        <Text>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};
