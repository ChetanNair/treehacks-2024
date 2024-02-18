import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { supabase } from "../initSupabase";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "../components/CustomInput"

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
          {/* TODO: Add assets */}
          <CustomInput
            state={email}
            setState={setEmail}
            placeholder="Email"
          />
          <CustomInput
            state={password}
            password
            setState={setPassword}
            placeholder="Password"
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
                color: "white",
                fontFamily: "Nunito_600SemiBold",
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