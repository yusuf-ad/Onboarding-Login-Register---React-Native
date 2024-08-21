import Button from "@/components/Button";
import Input from "@/components/Input";
import { StyleSheet, Text, View } from "react-native";

function Login() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login here</Text>
        <Text style={styles.description}>Welcome back you've been missed!</Text>
      </View>

      <View style={{ width: "100%", gap: 20, marginBottom: 16 }}>
        <Input placeholder="Email" />
        <Input placeholder="Password" keyboardType="visible-password" />
      </View>

      <View style={{ alignSelf: "flex-end" }}>
        <Text
          style={{
            fontSize: 16,
            color: "#e67700",
            fontWeight: "600",
          }}
        >
          Forgot your password?
        </Text>
      </View>

      <View style={{ width: "100%", height: 52, marginTop: 32 }}>
        <Button onPress={() => console.log("Login")}>Login</Button>
      </View>

      <View style={{ alignSelf: "center", marginTop: 36 }}>
        <Text
          style={{
            fontSize: 16,
            color: "#494949",
            fontWeight: "600",
          }}
        >
          Create new account
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 24,
    color: "#e67700",
  },

  description: {
    color: "#212529",
    letterSpacing: 0.4,
    width: 240,
    lineHeight: 28,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 48,
    paddingHorizontal: 8,
  },
});

export default Login;
