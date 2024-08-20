import {
  Button,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

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

        <Pressable style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </Pressable>
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

  button: {
    width: "100%",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#e67700",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
