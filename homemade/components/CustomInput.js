import { View, Image, TextInput } from "react-native";

export const CustomInput = ({
  asset = "../assets/user.png",
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
