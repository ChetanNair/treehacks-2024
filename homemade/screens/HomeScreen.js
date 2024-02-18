import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar, Image } from "react-native-elements";
import { MealList } from "../components/MealList";
import { CustomInput } from "../components/CustomInput";

export const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <CustomInput
          state={searchText}
          setState={handleSearch}
          placeholder="Search"
          asset={require("../assets/home.png")}
        />
        <Image source={require("../assets/filter.png")} style={styles.image} />
      </View>
      <MealList navigation={navigation} style={styles.mealList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: "5%",
  },
  searchContainer: {
    width: "100%",
    alignItems: "center",
    marginRight: "5%",
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "5%"
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  inputStyle: {
    marginLeft: 0,
  },
});
