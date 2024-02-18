import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Slider from "@react-native-community/slider";

const BottomSheetContent = ({ onClose }) => {
  const [distance, setDistance] = useState(0);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ paddingTop: 40, marginTop: 40 }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text
            style={{ position: "absolute", top: -18, left: 30, fontSize: 30 }}
          >
            X
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.divider} />
      <Image
        resizeMode="contain"
        source={require("../assets/filter2.png")}
        style={styles.image}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // padding: 22,
    paddingTop: 40,
    marginBottom: 90,
    justifyContent: "center",
    borderRadius: 20,
    // borderTopRightRadius: 20,
    marginHorizontal: "7%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Align X button to left and Title to right
  },
  closeButton: {
    marginRight: 0, // Add marginRight to create space between X and Filter
  },
  title: {
    fontSize: 24,
    fontFamily: "Nunito_400Regular",
    color: "#121212",
  },
  subtitle: {
    fontSize: 24,
    fontFamily: "Nunito_400Regular",
    color: "#121212",
  },
  divider: {
    // borderBottomWidth: 1,
    // borderBottomColor: "#D9D9D9",
    marginVertical: 10,
  },
  distanceText: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "Nunito_400Regular",
    color: "#999898",
  },
  image: {
    flex: 1,
    width: "100%",
    // marginLeft: -57,
    height: 800,
    resizeMode: "contain",
    borderWidth: 0,
  },
});

export default BottomSheetContent;
