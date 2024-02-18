import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const MyMealsScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
     <Text>My Meals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
});
