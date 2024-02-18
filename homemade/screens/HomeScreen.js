import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image, BottomSheet } from "react-native-elements";
import { MealList } from "../components/MealList";
import { CustomInput } from "../components/CustomInput";
import BottomSheetContent from "../components/BottomSheetContent";
import { supabase } from "../initSupabase";
export const HomeScreen = ({ navigation }) => {
  const [meals, setMeals] = useState();
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
    async function getMeals() {
      try {
        const { data, error } = await supabase
          .from("meal")
          .select("*, host(*)");
        setMeals(data);
        console.log(error);
        if (error) {
          alert(error);
        }
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
    getMeals();
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
        <TouchableOpacity onPress={openBottomSheet}>
          <Image 
            source={require("../assets/filter.png")} 
            style={styles.image} 
          />
        </TouchableOpacity>
      </View>
      <MealList navigation={navigation} style={styles.mealList} meals={meals} />
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
