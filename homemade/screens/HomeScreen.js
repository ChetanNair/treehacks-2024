import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SearchBar, Image, BottomSheet } from "react-native-elements";
import { MealList } from "../components/MealList";
import BottomSheetContent from '../components/BottomSheetContent';

export const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchText}
          containerStyle={{
            backgroundColor: "transparent",
            paddingHorizontal: 0,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 30,
            width: "70%",
          }}
          inputContainerStyle={{ backgroundColor: "#fff", borderRadius: 30 }}
          inputStyle={[styles.inputStyle, searchText !== "" && { color: "black" }]}
        />
        <TouchableOpacity onPress={openBottomSheet}>
         <View style={styles.circle}>
            <Image
              source={require("../assets/filter.png")}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>
      <MealList navigation={navigation} style={styles.mealList} />
      <BottomSheet
        isVisible={bottomSheetVisible}
        onClose={closeBottomSheet}
      >
        <BottomSheetContent onClose={closeBottomSheet} />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  searchContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 20,
    marginLeft: "5%",
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
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

