import React from "react";
import { FlatList } from "react-native";
import { MealItem } from "./MealItem";

const placeholder = "https://toriavey.com/images/2011/01/TOA109_18-1.jpeg";

// Sample data for the list
const DATA = [
  {
    id: "1",
    title: "Falafel with Hummus",
    date: "Lunch on February 18",
    url: placeholder,
    rating: "4.5",
    price: 25
  },
  {
    id: "2",
    title: "Item 2",
    date: "Lunch on February 18",
    url: placeholder,
    rating: "4.7",
    price: 25
  },
  {
    id: "3",
    title: "Item 1",
    date: "Lunch on February 18",
    url: placeholder,
    rating: "4.5",
    price: 25
  },
  {
    id: "4",
    title: "Item 2",
    date: "Lunch on February 18",
    url: placeholder,
    rating: "4.7",
    price: 25
  },
  {
    id: "5",
    title: "Item 1",
    date: "Lunch on February 18",
    url: placeholder,
    rating: "4.5",
    price: 25
  },
  {
    id: "6",
    title: "Item 2",
    date: "Lunch on February 18",
    url: placeholder,
    rating: "4.7",
    price: 25
  },
];

const host = {
  firstname: "Maria",
  lastname: "Maria",
  bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. ",
  url: "https://dlzvpuc9ucfb7.cloudfront.net/Andrew_Gerges_8fdd72d6c2.jpg",
  languages: "English",
  rating: "4.3",
};

// Main component
export const MealList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <MealItem
      meal={item}
      host={host}
      onPress={() => navigation.navigate("DetailScreen")} // TODO: Add in props here from the item.
    />
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
