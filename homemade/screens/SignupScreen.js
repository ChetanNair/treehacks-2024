import React from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { supabase } from "../initSupabase";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "../components/CustomInput"

export const SignupScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSignup = async () => {
    props.navigation.navigate("PhotoUpload", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
    return;
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
          />
          <CustomInput
            state={lastName}
            setState={setLastName}
            placeholder="Last Name"
          />
          <CustomInput
            state={email}
            setState={setEmail}
            placeholder="Email"
            asset={require("../assets/email.png")}
          />
          <CustomInput
            state={password}
            password
            setState={setPassword}
            placeholder="Password"
            asset={require("../assets/padlock.png")}
          />
          <CustomInput
            state={confirmPass}
            password
            setState={setConfirmPassword}
            placeholder="Confirm Password"
            asset={require("../assets/padlock.png")}
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
                color: "white",
                fontFamily: "Nunito_600SemiBold",
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
