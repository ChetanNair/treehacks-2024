import React from "react";
import { View, Text, Alert, TextInput, Button } from "react-native";
import { supabase } from "../initSupabase";
import { useState } from "react";
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
  );
};
