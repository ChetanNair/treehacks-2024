import React from "react";
import { FlatList } from "react-native";
import { MyMealItem } from "./MyMealItem";

const placeholder = "https://toriavey.com/images/2011/01/TOA109_18-1.jpeg";

// Sample data for the list
const DATA = [
  {
    id: "1",
    title: "Falafel Plate with Hummus",
    date: "Lunch on February 20 @ 12pm",
    numPlates: "2 plates",
    url: placeholder,
    rating: "4.5",
    cancellable: true,
    location: "1 Greece Ave, Athens, Greece"
  },
  {
    id: "2",
    title: "Seared Scallops with Pea Puree",
    date: "Dinner on February 17 @ 12pm",
    numPlates: "2 plates",
    url: placeholder,
    rating: "4.5",
    cancellable: false,
    location: "1 Greece Ave, Athens, Greece"
  },
  {
    id: "3",
    title: "Falafel Plate with Hummus",
    date: "Lunch on February 20 @ 12pm",
    numPlates: "2 plates",
    url: placeholder,
    rating: "4.5",
    cancellable: false,
    location: "1 Greece Ave, Athens, Greece"
  },
  {
    id: "4",
    title: "Falafel Plate with Hummus",
    date: "Lunch on February 20 @ 12pm",
    numPlates: "2 plates",
    url: placeholder,
    rating: "4.5",
    cancellable: true,
    location: "1 Greece Ave, Athens, Greece"
  },
  {
    id: "5",
    title: "Falafel Plate with Hummus",
    date: "Lunch on February 20 @ 12pm",
    numPlates: "2 plates",
    url: placeholder,
    rating: "4.5",
    cancellable: true,
    location: "1 Greece Ave, Athens, Greece"
  },
  {
    id: "6",
    title: "Falafel Plate with Hummus",
    date: "Lunch on February 20 @ 12pm",
    numPlates: "2 plates",
    url: placeholder,
    rating: "4.5",
    cancellable: false,
    location: "1 Greece Ave, Athens, Greece"
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
export const MyMealsList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <MyMealItem
      meal={item}
      host={host}
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
