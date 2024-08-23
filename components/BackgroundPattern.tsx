import { View } from "react-native";

function BackgroundPattern() {
  return (
    <>
      {/* elipse - 1 background */}
      <View
        style={{
          position: "absolute",
          backgroundColor: "#fff4e6",
          width: 440,
          height: 440,
          borderRadius: 9999,
          top: -230,
          right: -230,
          zIndex: -1,
        }}
      ></View>

      {/* elipse - 2 background */}
      <View
        style={{
          position: "absolute",
          borderColor: "#fff4e6",
          borderWidth: 3,
          width: 480,
          height: 480,
          borderRadius: 9999,
          top: -230,
          right: -230,
          zIndex: -1,
        }}
      ></View>
    </>
  );
}

export default BackgroundPattern;
