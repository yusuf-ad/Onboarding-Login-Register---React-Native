import { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, TextInput, View, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  control: any;
  name: string;
  placeholder: string;
}

function Input({ control, name, placeholder, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ width: "100%" }}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            style={[styles.input, isFocused && styles.inputFocused]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              onBlur();
            }}
            onChangeText={onChange}
            value={value}
            {...props}
          />
        )}
        name={name}
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
