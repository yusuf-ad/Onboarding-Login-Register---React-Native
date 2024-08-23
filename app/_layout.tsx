import { useAuthStore } from "@/lib/store";
import { Slot } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const getSession = useAuthStore((state) => state.getSession);

  useEffect(() => {
    getSession();
  }, [getSession]);

  return <Slot />;
}
