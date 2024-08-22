import Button from "@/components/Button";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function HomePage() {
  return (
    <>
      <StatusBar backgroundColor="#e67700" style="light" />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Memoria</Text>
        <Text style={styles.description}>
          Capture your moments, add quotes, and take notes about the memories
          you cherish.
        </Text>
        <View style={{ width: "100%", height: 54 }}>
          <Button>Sign out</Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
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
});

export default HomePage;
