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
import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const Example = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="First Name"
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Last Name"
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="email" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Email"
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        type={show ? "text" : "password"}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
        placeholder="Password"
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        type={show ? "text" : "password"}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
        placeholder="Confirm Password"
      />
    </Stack>
  );
};

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
        <Example />
        {/* <View
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
        </View> */}

        {/* <TextInput
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> */}
        <Button style={{}} title="Sign up" onPress={handleSignup} />
        <Button
          title="Already have an account? Login"
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};
