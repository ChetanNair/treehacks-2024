import React from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { supabase } from "../initSupabase";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const SignupScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <TouchableOpacity
        style={{
          flex: 0.1,
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          position: "absolute",
          left: 20,
          top: 80,
          zIndex: 1,
        }}
        onPress={() => props.navigation.navigate("Login")}
      ></TouchableOpacity>
      <View
        style={{
          flex: 0.15,
          justifyContent: "flex-end",
          alignItems: "baseline",
          alignSelf: "flex-start",
          paddingLeft: 20,
        }}
      >
        <Text style={{ color: "black", fontSize: 40, fontWeight: "bold" }}>
          Create Account
        </Text>
      </View>
      <View style={{ flex: 0.85 }}>
        <View
          style={{
            width: 300,
            height: 60,
            fontSize: 32,
            backgroundColor: "white",
            // borderWidth: 1,
            borderRadius: 20,
            flexDirection: "row",
            paddingHorizontal: 12,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 2,
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
              fontSize: 20,
              borderRadius: 20,
              paddingHorizontal: 12,
            }}
            autoCorrect={false}
            numberOfLines={1}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <TextInput
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Button title="Sign up" onPress={handleSignup} />
        <Button
          title="Already have an account? Login"
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};
