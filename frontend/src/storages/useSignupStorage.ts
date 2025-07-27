import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Disease } from "../types/user";

interface SignupState {
  disease: Disease | null;
  setDisease: (disease: Disease | null) => void;

  username: string | null;
  setUsername: (name: string | null) => void;
}

export const useSignupStore = create<SignupState>()(
  persist(
    (set): SignupState => ({
      disease: null,
      setDisease: (disease) => set({ disease }),

      username: null,
      setUsername: (name) => set({ username: name })
    }),
    {
      name: "signin-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
