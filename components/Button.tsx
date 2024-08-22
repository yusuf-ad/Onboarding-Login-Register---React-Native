import { ReactNode } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function Button({
  isLoading,
  children,
  backgroundColor = "#e67700",
  textColor = "white",
  onPress,
}: {
  children: ReactNode;
  isLoading?: boolean;
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => void;
}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor },
          pressed && styles.pressed,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color={"#fff"} size={28} />
        ) : (
          <Text style={[styles.buttonText, { color: textColor }]}>
            {children}
          </Text>
        )}
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
    letterSpacing: 0.5,
    fontSize: 18,
    fontWeight: "600",
  },

  pressed: {
    opacity: 0.7,
  },
});

export default Button;
