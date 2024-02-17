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
      >
        <Image
          resizeMode="contain"
          style={{
            width: 50,
            zIndex: 0,
          }}
          source={require("../assets/left_arrow.png")}
        />
      </TouchableOpacity>
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
        <Text>Signup Screen</Text>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Button title="Sign up" onPress={handleSignup} />
        <Button
          title="Go to Login Page"
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};
