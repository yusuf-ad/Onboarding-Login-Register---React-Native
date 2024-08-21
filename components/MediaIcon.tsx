import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

function MediaIcon({
  icon,
}: {
  icon: "google" | "facebook-square" | "apple1";
}) {
  return (
    <View
      style={{
        backgroundColor: "#ececec",
        padding: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
      }}
    >
      <AntDesign name={icon} size={20} color="black" />
    </View>
  );
}

export default MediaIcon;
