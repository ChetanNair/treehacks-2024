import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const CustomButton = ({ onPress, title = "CustomButton", customButtonStyles, customTextStyles}) => {

  return (
    <TouchableOpacity style={customButtonStyles ? customButtonStyles : styles.button} onPress={onPress}>
      <Text style={customTextStyles ? customTextStyles : styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderRadius: "7.5%",
    width: 140,
    alignItems: "center",
    backgroundColor: "#ff851b",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "white"
  },
});
