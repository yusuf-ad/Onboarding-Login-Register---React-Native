import Button from "@/components/Button";
import { useAuthStore } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const deleteSession = useAuthStore((state) => state.deleteSession);

  const handleSignOut = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      return Alert.alert(error.message);
    }

    setLoading(false);
    deleteSession();

    router.replace("/(auth)/");
  };

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
          <Button isLoading={loading} onPress={handleSignOut}>
            Sign out
          </Button>
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
