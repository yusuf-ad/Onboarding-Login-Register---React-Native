import { Stack } from "expo-router";

function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen name="login" options={{ title: "Login" }} />
    </Stack>
  );
}

export default AuthLayout;
