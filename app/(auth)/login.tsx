import Button from "@/components/Button";
import Input from "@/components/Input";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { Link } from "expo-router";
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

      <View style={{ gap: 36, width: "100%", marginBottom: 52 }}>
        <View style={{ alignSelf: "flex-end" }}>
          <Text style={[{ color: "#e67700" }, styles.actionText]}>
            Forgot your password?
          </Text>
        </View>
        <View style={{ width: "100%", height: 52 }}>
          <Button onPress={() => console.log("Login")}>Sign in</Button>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Link
            href={"/register"}
            style={[{ color: "#494949" }, styles.actionText]}
          >
            Create new account
          </Link>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={[{ color: "#e67700" }, styles.actionText]}>
          Or continue with
        </Text>

        <SocialMediaIcons />
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
    padding: 24,
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

  actionText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Login;
