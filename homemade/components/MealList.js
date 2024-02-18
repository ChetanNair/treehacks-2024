import React from "react";
import { FlatList } from "react-native";
import { MealItem } from "./MealItem";

const placeholder = "https://toriavey.com/images/2011/01/TOA109_18-1.jpeg"

// Sample data for the list
const DATA = [
  {
    id: "1",
    title: "Item 1",
    description: "This is a description for item 1.",
    imageUrl: placeholder,
    rating: "4.5",
  },
  {
    id: "2",
    title: "Item 2",
    description: "This is a description for item 2.",
    imageUrl: placeholder,
    rating: "4.7",
  },
  {
    id: "3",
    title: "Item 1",
    description: "This is a description for item 1.",
    imageUrl: placeholder,
    rating: "4.5",
  },
  {
    id: "4",
    title: "Item 2",
    description: "This is a description for item 2.",
    imageUrl: placeholder,
    rating: "4.7",
  },
  {
    id: "5",
    title: "Item 1",
    description: "This is a description for item 1.",
    imageUrl: placeholder,
    rating: "4.5",
  },
  {
    id: "6",
    title: "Item 2",
    description: "This is a description for item 2.",
    imageUrl: placeholder,
    rating: "4.7",
  },
  // Add more items here
];

// Main component
export const MealList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <MealItem
      title={item.title}
      description={item.description}
      imageUrl={item.imageUrl}
      rating={item.rating}
      onPress={() => navigation.navigate("DetailScreen")} // TODO: Add in props here from the item.
    />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
