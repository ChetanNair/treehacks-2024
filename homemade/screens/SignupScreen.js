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
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const SignupScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSignup = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
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
            marginTop: 40,
          }}
          source={require("../assets/logo_temp.png")}
        >
          Create an Account
        </Text>
      </View>
      <View style={{ flex: 0.9 }}>
        <View style={{ flex: 0.8, justifyContent: "space-around" }}>
          <CustomInput
            state={firstName}
            setState={setFirstName}
            placeholder="First Name"
            asset={"../assets/profile.png"}
          />
          <CustomInput
            state={lastName}
            setState={setLastName}
            placeholder="Last Name"
            asset={"../assets/profile.png"}
          />
          <CustomInput
            state={email}
            setState={setEmail}
            placeholder="Email"
            asset={"../assets/profile.png"}
          />
          <CustomInput
            state={password}
            password
            setState={setPassword}
            placeholder="Password"
            asset={"../assets/profile.png"}
          />
          <CustomInput
            state={confirmPass}
            password
            setState={setConfirmPassword}
            placeholder="Confirm Password"
            asset={"../assets/profile.png"}
          />
        </View>

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
              width: 140,
              alignItems: "center",
              backgroundColor: "#ff851b",
            }}
            onPress={handleSignup}
          >
            <Text
              style={{
                fontSize: 24,
                color: "#fae8c5",
                fontFamily: "Nunito_400Regular",
              }}
            >
              Next
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
