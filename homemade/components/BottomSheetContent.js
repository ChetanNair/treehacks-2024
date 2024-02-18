import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider';

const BottomSheetContent = ({ onClose }) => {

  const [distance, setDistance] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text>X</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <View style={styles.divider} /> 
      </View>
      <View style={styles.divider} /> 
      <Image 
            source={require("../assets/filters.jpg")} 
            style={styles.image} 
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: '5%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align X button to left and Title to right
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
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginVertical: 10, 
  },
  distanceText: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "Nunito_400Regular",
    color: "#999898",
  },
  image: {
    width: '80%',
    height: 800,
    resizeMode: "cover"
  }
});

export default BottomSheetContent;
