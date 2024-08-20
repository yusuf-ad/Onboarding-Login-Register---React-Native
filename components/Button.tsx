import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({
  children,
  backgroundColor = "#e67700",
  textColor = "white",
}: {
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor },
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },

  button: {
    borderRadius: 6,
    paddingVertical: 14,
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
    fontWeight: "600",
  },

  pressed: {
    opacity: 0.7,
  },
});

export default Button;
