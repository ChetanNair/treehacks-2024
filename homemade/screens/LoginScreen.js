import React from "react";
import {
  Text,
  TextInput,
  Button,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { supabase } from "../initSupabase";
import { SafeAreaView } from "react-native-safe-area-context";

export const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin() {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (!error && !user) {
      console.log("Something went wrong");
    }
    if (error) {
      alert(error); // TODO: Wrong email / password
    }
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 40,
        fontFamily: "Nunito_400Regular",
      }}
    >
      <View style={{ flex: 0.4, width: "100%" }}>
        <Image
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/logo_temp.png")}
        />
      </View>
      <View style={{ flex: 0.6 }}>
        <View
          style={{ flex: 0.4, justifyContent: "space-evenly", paddingTop: 20 }}
        >
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
        </View>

        <View
          style={{
            flex: 0.5,
            marginTop: 40,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              paddingHorizontal: 4,
              paddingVertical: 8,
              borderRadius: 12,
              width: 140,
              alignItems: "center",
              backgroundColor: "#ff851b",
            }}
            onPress={handleLogin}
          >
            <Text
              style={{
                fontSize: 24,
                color: "#fae8c5",
                fontFamily: "Nunito_400Regular",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontFamily: "Nunito_400Regular" }}>
              Don't Have an Account?
            </Text>
            <TouchableOpacity
              style={{ alignItems: "center", marginTop: 4 }}
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{
                  fontSize: 16,
                  textDecorationLine: "underline",
                  color: "#ff851b",
                  fontFamily: "Nunito_400Regular",
                }}
              >
                Sign up Here!
              </Text>
            </TouchableOpacity>
          </View>
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
