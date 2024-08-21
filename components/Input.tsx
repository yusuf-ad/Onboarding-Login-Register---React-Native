import { useState } from "react";
import { StyleSheet, TextInput, View, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  placeholder: string;
}

function Input({ placeholder, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, isFocused && styles.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#f1f4ff",
    borderWidth: 2,
    borderColor: "transparent",
    color: "#000",
    fontSize: 16,
  },

  inputFocused: {
    borderColor: "#e67700",
  },
});

export default Input;
