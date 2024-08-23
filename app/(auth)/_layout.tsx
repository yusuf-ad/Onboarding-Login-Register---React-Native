import { useAuthStore } from "@/lib/store";
import { Redirect, Stack } from "expo-router";

function AuthLayout() {
  const session = useAuthStore((state) => state.session);

  if (session) {
    return <Redirect href={"/(home)"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen name="login" options={{ headerShown: false }} />

      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}

export default AuthLayout;
