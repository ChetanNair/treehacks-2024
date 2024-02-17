import React from "react";
import { FlatList } from "react-native";
import { MealItem } from "./MealItem";


const placeholder = "https://lh3.googleusercontent.com/proxy/XXvCwMT5tNyiMYl1H5s2ebhi5GiisJo1P0N3eyhftD2S1_IQpSvA5JGeJcu7-dHA55nUyS5tDuckAYJFNg_N5AJ-_Ba-xbxYIboO5CxWNSnuxIFANs1Mse0cGIe4UdJPCw"

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
