import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyMealsList } from "../components/MyMealsList";
import { supabase } from "../initSupabase"

export const MyMealsScreen = ({ navigation }) => {
  const [meals, setMeals] = useState();

  useEffect(() => {
    async function getMeals() {
      try {
        const { data, error } = await supabase
          .from("reservation")
          .select("*, host:user_id(*), meal:meal_id(*)");
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
      <MyMealsList navigation={navigation} style={styles.mealList} meals={meals} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: "5%",
  },
});
