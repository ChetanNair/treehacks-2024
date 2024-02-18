import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useState } from "react";

const placeholder = "https://toriavey.com/images/2011/01/TOA109_18-1.jpeg";
const FAKE_MARKERS = [
  {
    latitude: 37.99093378207929,
    longitude: 23.727087241410256,
    hostName: "Andrew Gerges",
    description: "The Best Food in Town",
  },
  {
    latitude: 37.96093378207729,
    longitude: 23.717087241450256,
    hostName: "Yolanda Maria",
    description: "A warm and cozy place",
  },
  {
    latitude: 37.96993378207729,
    longitude: 23.707087241450256,
    hostName: "Seb Losada",
    description: "A warm and cozy place",
  },
  {
    latitude: 37.98493378207729,
    longitude: 23.735087241450256,
    hostName: "Alex Lopez",
    description: "A warm and cozy place",
  },
  {
    latitude: 37.96493378207729,
    longitude: 23.747087241450256,
    hostName: "Yalcin Alkan",
    description: "A warm and cozy place",
  },
];

export const MapScreen = ({ navigation }) => {
  const [markers, setMarkers] = useState(FAKE_MARKERS);
  if (!markers) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MapView
        loadingEnabled={true}
        initialRegion={{
          latitude: 37.99093378207929,
          longitude: 23.727087241410256,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
            >
              <>
                <Image
                  source={require("../assets/marker.png")}
                  style={{ width: 30, height: 30, tintColor: "#ff851b" }}
                  resizeMode="contain"
                />
                <Callout
                  tooltip
                  onPress={() => {
                    navigation.navigate("DetailScreen");
                  }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 12,
                    width: 150,
                    height: 150,
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      // paddingHorizontal: 2,
                      // paddingVertical: 4,
                    }}
                  >
                    <Image
                      source={{ uri: placeholder }}
                      style={{
                        flex: 1,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      }}
                      resizeMode="cover"
                    />
                    <View
                      style={{
                        flex: 0.4,
                        // width: 40,
                        // height: 50,
                        marginTop: 8,
                        alignItems: "center",
                        // padding: 10,
                        // backgroundColor: "green",
                      }}
                    >
                      <Text
                        style={{
                          width: "90%",
                          textAlign: "left",
                          fontFamily: "Nunito_600SemiBold",
                        }}
                        numberOfLines={1}
                      >
                        {marker.description}
                      </Text>
                      <Text
                        style={{
                          width: "90%",
                          textAlign: "left",
                          color: "#9e9e9e",
                          fontFamily: "Nunito_400Regular,",
                        }}
                        numberOfLines={1}
                      >
                        {`Meet ${marker.hostName}`}
                      </Text>
                    </View>
                  </View>
                </Callout>
              </>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};
