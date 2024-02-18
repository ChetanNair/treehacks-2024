import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SearchBar, Image, BottomSheet } from "react-native-elements";
import { MealList } from "../components/MealList";
import { CustomInput } from "../components/CustomInput";
import BottomSheetContent from "../components/BottomSheetContent";
import { supabase } from "../initSupabase";
import { useEffect } from "react";
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

  useEffect(() => {
    async function getUsers() {
      const { data, error } = await supabase.from("user").select();
      console.log(data);
      console.log(error);
    }
    getUsers();
  }, []);
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
      <BottomSheet isVisible={bottomSheetVisible} onClose={closeBottomSheet}>
        <BottomSheetContent onClose={closeBottomSheet} />
      </BottomSheet>
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
    marginBottom: "5%",
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
