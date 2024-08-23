import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
  session: string | null;
  getSession: () => void;
  setSession: (session: string) => void;
  deleteSession: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  getSession: async () => {
    const session = await AsyncStorage.getItem("session");

    set({ session });
  },
  setSession: (session) => {
    AsyncStorage.setItem("session", session);

    set({ session });
  },
  deleteSession: () => {
    AsyncStorage.removeItem("session");

    set({ session: null });
  },
}));
