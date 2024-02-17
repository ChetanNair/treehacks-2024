import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen')}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

