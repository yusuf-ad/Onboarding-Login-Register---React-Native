import Button from "@/components/Button";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <View style={{ width: "100%", aspectRatio: 1, marginBottom: 24 }}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              borderRadius: 20,
            }}
            source={require("../../assets/images/hero-img.jpg")}
          />
        </View>

        <Text style={styles.title}>Welcome to Memoria</Text>
        <Text style={styles.description}>
          Capture your moments, add quotes, and take notes about the memories
          you cherish.
        </Text>

        <View style={{ flexDirection: "row", width: "100%", gap: 16 }}>
          <Button>Login</Button>

          <Button backgroundColor="#f1f3f5" textColor="#000">
            Register
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
});
