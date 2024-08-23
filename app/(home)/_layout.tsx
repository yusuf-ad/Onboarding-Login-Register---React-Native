import { useAuthStore } from "@/lib/store";
import { Redirect, Stack } from "expo-router";

function Layout() {
  const session = useAuthStore((state) => state.session);

  if (!session) {
    return <Redirect href={"/(auth)"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout;
