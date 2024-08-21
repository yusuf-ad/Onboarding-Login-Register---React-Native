import Button from "@/components/Button";
import Input from "@/components/Input";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function Register() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.description}>
          Create an account to capture and cherish your life's precious moments.
        </Text>
      </View>

      <View style={{ width: "100%", gap: 20, marginBottom: 32 }}>
        <Input placeholder="Email" />
        <Input placeholder="Password" keyboardType="visible-password" />
        <Input placeholder="Confirm Password" keyboardType="visible-password" />
      </View>

      <View style={{ gap: 36, width: "100%" }}>
        <View style={{ width: "100%", height: 54 }}>
          <Button>Sign up</Button>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Link
            href={"/login"}
            style={[{ color: "#494949" }, styles.actionText]}
          >
            Already have an account
          </Link>
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 48 }}>
        <Text
          style={[{ color: "#e67700", marginBottom: 2 }, styles.actionText]}
        >
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

export default Register;
