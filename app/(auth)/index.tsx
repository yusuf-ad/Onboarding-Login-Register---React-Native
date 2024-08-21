// !!!!!!!!!!!
// @ts-nocheck

import Button from "@/components/Button";
import HeroImage from "@/components/HeroImage";
import { router } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor={"#e67700"} barStyle={"light-content"} />
      <View style={styles.container}>
        <HeroImage />

        <View style={{ justifyContent: "space-between", marginTop: 24 }}>
          <Text style={styles.title}>Welcome to Memoria</Text>
          <Text style={styles.description}>
            Capture your moments, add quotes, and take notes about the memories
            you cherish.
          </Text>
          <View style={styles.buttonContainer}>
            <Button onPress={() => router.push("/login")}>Login</Button>
            <Button
              onPress={() => router.push("/register")}
              backgroundColor="#f1f3f5"
              textColor="#000"
            >
              Register
            </Button>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 48,
    paddingHorizontal: 8,
    lineHeight: 24,
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 16,
  },
});
