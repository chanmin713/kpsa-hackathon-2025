import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { User } from "../types/user";

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;

  diseaseId: number | null;
  setDiseaseId: (id: number) => void;
  removeDiseaseId: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set): AuthState => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),

      diseaseId: null,
      setDiseaseId: (id) => set({ diseaseId: id }),
      removeDiseaseId: () => set({ diseaseId: null })
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
