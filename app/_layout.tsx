import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#e67700" style="light" />

      <Stack>
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(home)"
          options={{
            headerTitle: "Home",
            headerBackVisible: false,
          }}
        />
      </Stack>
    </>
  );
}
