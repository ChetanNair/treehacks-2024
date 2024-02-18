import React from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { supabase } from "../initSupabase";
import * as ImagePicker from "expo-image-picker";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const PhotoUploadScreen = ({ route: { params }, ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const handleSignup = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: params.email,
      password: params.password,
    });

    if (error) Alert.alert(error.message);
    if (!session) console.log(session);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 40,
        fontFamily: "Nunito_400Regular",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          position: "absolute",
          top: 60,
          left: 40,
        }}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Image
          resizeMode="contain"
          source={require("../assets/left_arrow.png")}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
      <View style={{ flex: 0.2, width: "100%" }}>
        <Text
          style={{
            width: "100%",
            height: "100%",
            fontFamily: "Nunito_700Bold",
            textAlign: "center",
            fontSize: 40,
            paddingTop: 40,
          }}
        >
          Setting Up Profile
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.6,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {selectedImage === null ? (
            <TouchableOpacity
              onPress={pickImageAsync}
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                marginVertical: 20,
                backgroundColor: "#ffdbbd",
                //   borderWidth: 1,
                borderColor: "#ff851b",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../assets/camera.png")}
                style={{ width: 40, height: 40, tintColor: "#ff851b" }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={pickImageAsync}
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                marginVertical: 20,
                backgroundColor: "#ffdbbd",
                //   borderWidth: 1,
                borderColor: "#ff851b",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                resizeMode="resize"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100,
                  marginVertical: 20,
                  borderColor: "#ff851b",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                source={{ uri: selectedImage }}
              />
            </TouchableOpacity>
          )}
          <Text
            style={{
              width: "100%",
              height: "100%",
              fontFamily: "Nunito_600SemiBold",
              textAlign: "center",
              fontSize: 24,
            }}
          >
            Upload Profile Photo
          </Text>
        </View>
        <View style={{ flex: 0.4 }}></View>
        <TextInput
          style={{
            width: 300,
            paddingLeft: 20,
            paddingTop: 10,
            height: 160,
            color: "#9E9E9E",
            fontSize: 16,
            borderRadius: 20,
            borderWidth: 1,
            paddingHorizontal: 12,
            fontFamily: "Nunito_400Regular",
          }}
          autoCorrect={false}
          numberOfLines={4}
          multiline={true}
          placeholderTextColor={"#9E9E9E"}
          placeholder={"Optional: Add a Bio"}
          value={bio}
          autoCapitalize="none"
          secureTextEntry={password}
          onChangeText={(newVal) => setBio(newVal)}
        />

        <View
          style={{
            flex: 0.4,
            marginTop: 40,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 4,
              paddingVertical: 8,
              borderRadius: 12,
              width: 220,
              alignItems: "center",
              backgroundColor: "#ff851b",
            }}
            onPress={handleSignup}
          >
            <Text
              style={{
                fontSize: 24,
                color: "white",
                fontFamily: "Nunito_600SemiBold",
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const CustomInput = ({
  asset,
  placeholder,
  state,
  setState,
  password,
  margin,
}) => {
  return (
    <View
      style={{
        width: 300,
        height: 50,
        fontSize: 32,
        // borderWidth: 1,
        borderRadius: 20,
        flexDirection: "row",
        paddingHorizontal: 12,
        backgroundColor: "FFC691",
        borderWidth: 1.5,
        borderColor: "#9e9e9e",
        alignItems: "center",
      }}
    >
      <Image
        resizeMode="contain"
        source={require("../assets/user.png")}
        style={{ width: 24, height: 24, alignSelf: "center" }}
      />
      <TextInput
        style={{
          width: 300,
          height: 60,
          color: "#9E9E9E",
          fontSize: 20,
          borderRadius: 20,
          paddingHorizontal: 12,
          fontFamily: "Nunito_400Regular",
        }}
        autoCorrect={false}
        numberOfLines={1}
        placeholderTextColor={"#9E9E9E"}
        placeholder={placeholder}
        value={state}
        autoCapitalize="none"
        secureTextEntry={password}
        onChangeText={(newVal) => setState(newVal)}
      />
    </View>
  );
};
