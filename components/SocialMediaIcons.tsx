import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

export function MediaIcon({
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

function SocialMediaIcons() {
  return (
    <View style={{ flexDirection: "row", gap: 8, marginTop: 20 }}>
      <MediaIcon icon="google" />
      <MediaIcon icon="facebook-square" />
      <MediaIcon icon="apple1" />
    </View>
  );
}

export default SocialMediaIcons;
