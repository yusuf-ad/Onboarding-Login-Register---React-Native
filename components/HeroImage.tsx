import { Image, StyleSheet, View } from "react-native";

function HeroImage() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/hero-img.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    borderRadius: 20,
  },
});

export default HeroImage;
