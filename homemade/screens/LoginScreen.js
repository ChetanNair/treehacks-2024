import React from "react";
import { Text, TextInput, Button } from "react-native";
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
        // justifyContent: "center",
        // position: "relative",
      }}
    >
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={(password) => setPassword(password)}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Sign Up"
        onPress={() => props.navigation.navigate("Signup")}
      />
    </SafeAreaView>
  );
};
