import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
const placeholder = "https://toriavey.com/images/2011/01/TOA109_18-1.jpeg";

export const PaymentScreen = ({ navigation }) => {
  const [numPlates, setNumPlates] = useState(3);
  const [price, setPrice] = useState(25);
  const [platesArray, setPlatesArray] = useState(() => {
    const arr = new Array(numPlates).fill(false);
    if (arr.length > 0) {
      arr[0] = true;
    }
    return arr;
  });

  useEffect(() => {
    const arr = new Array(numPlates).fill(false);
    if (arr.length > 0) {
      arr[0] = true;
    }
    setPlatesArray(arr);
  }, [numPlates]);

  const handlePayment = () => {
    console.log("Payment Successful");
    navigation.navigate("HomeScreen");
  };
  const numberOfSelectedPlates = platesArray.filter(
    (value) => value === true
  ).length;

  return (
    <SafeAreaView
      style={{ flex: 3, alignItems: "center", paddingHorizontal: 20 }}
    >
      <View
        style={{
          flex: 0.3,
          flexDirection: "row",
          // backgroundColor: "blue",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            position: "absolute",
            left: 10,
            top: 18,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            resizeMode="contain"
            source={require("../assets/left_arrow.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 24 }}>
          Confirm and Pay
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          resizeMode="cover"
          style={{
            height: "100%",
            width: 180,
            aspectRatio: 1,
            borderRadius: 8,
          }}
          source={{ uri: placeholder }}
        />
        <View
          style={{
            // backgroundColor: "blue",
            height: "100%",
            width: "50%%",
            paddingVertical: 20,
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "Nunito_600SemiBold",
              fontSize: 20,
              marginLeft: -12,
            }}
          >
            Falafel Plate with Hummus
          </Text>

          <View
            style={{
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              // marginLeft: 12,
            }}
          >
            <Text style={{ fontFamily: "Nunito_400Regular", fontSize: 18 }}>
              Lunch on February 17 @ 12 PM
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-start",
                marginLeft: 8,
                marginTop: 4,
                alignItems: "center",
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: "black",
                  borderRadius: 20,
                  backgroundColor: "green",
                }}
                source={require("../assets/user_filled.png")}
              />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: 16,
                  fontFamily: "Nunito_400Regular",
                }}
              >
                Maria
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.7,
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100%",
          width: "100%",
        }}
      >
        <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 20 }}>
          Select More Plates
        </Text>
        <View
          style={{
            width: "100%",
            height: "30%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          {platesArray.map((plate, index) => {
            return (
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: index === 0 ? 0 : 20,
                  borderRadius: 40,
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  platesArray[index] = !platesArray[index];
                  setPlatesArray([...platesArray]);
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    tintColor: platesArray[index] ? "#ff851b" : "#121212",
                  }}
                  source={require("../assets/plate.png")}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontFamily: "Nunito_600SemiBold",
              fontSize: 20,
              marginTop: 32,
            }}
          >
            Your Total
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: -20,
            }}
          >
            <Text
              style={{
                fontFamily: "Nunito_400Regular",
                fontSize: 20,
                marginTop: 32,
                color: "#858585",
              }}
            >
              {numberOfSelectedPlates} plate x {`$${price}`}
            </Text>
            <Text
              style={{
                fontFamily: "Nunito_700Bold",
                fontSize: 20,
                marginTop: 32,
              }}
            >
              {`$${numberOfSelectedPlates * price}`}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.8,
          flexDirection: "column",
          // backgroundColor: "yellow",
          height: "100%",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontFamily: "Nunito_600SemiBold",
            fontSize: 20,
            marginTop: 30,
          }}
        >
          Payment Method
        </Text>
        <PaymentMethodCard />
        <TouchableOpacity
          style={{
            paddingHorizontal: 4,
            paddingVertical: 8,
            borderRadius: 12,
            width: 140,
            marginTop: 20,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#ff851b",
          }}
          onPress={handlePayment}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              paddingHorizontal: 4,
              fontFamily: "Nunito_600SemiBold",
            }}
          >
            Confirm and Pay
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const PaymentMethodCard = () => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: "#9e9e9e",
        borderRadius: 12,
        width: "100%",
        flexDirection: "row",
        height: 40,
        marginTop: 10,
        flex: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 12,
          flex: 2,
          alignItems: "center",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
          source={require("../assets/amex.png")}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          flex: 7,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#121212",
            textAlign: "left",
            fontFamily: "Nunito_600SemiBold",
          }}
        >
          ●●●● ●●●●●● ●2008
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#121212",
            textAlign: "left",
            fontFamily: "Nunito_600SemiBold",
          }}
        >
          Expires 09/28
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 3,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          source={require("../assets/right_chevron.png")}
          style={{ width: 40, height: 40 }}
        />
      </View>
    </TouchableOpacity>
  );
};
