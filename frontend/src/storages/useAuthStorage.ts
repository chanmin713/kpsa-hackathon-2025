import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Disease, User } from "../types/user";

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;

  disease: Disease | null;
  setDisease: (disease: Disease | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set): AuthState => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),

      disease: null,
      setDisease: (disease) => set({ disease }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
