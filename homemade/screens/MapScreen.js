import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useState } from "react";
import { supabase } from "../initSupabase";

const placeholder = "https://toriavey.com/images/2011/01/TOA109_18-1.jpeg";

export const MapScreen = ({ navigation }) => {
  const [meals, setMeals] = useState();

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

  if (!meals) {
    return <></>;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MapView
        loadingEnabled={true}
        initialRegion={{
          latitude: 37.380341296741314,
          longitude: -5.961909271962847,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {meals.map((meal, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(meal.latitude),
                longitude: parseFloat(meal.longitude),
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
                    navigation.navigate("DetailScreen", { meal });
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
                      source={{ uri: meal.photo_url }}
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
                        {meal.description}
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
                        {`Meet ${meal.host.firstname}`}
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
