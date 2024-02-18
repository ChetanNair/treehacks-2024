import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const LeftChevron = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ zIndex: 10, position: "absolute", top: "7.5%", left: "5%" }}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name="left" size={24} color="black" />
    </TouchableOpacity>
  );
};
