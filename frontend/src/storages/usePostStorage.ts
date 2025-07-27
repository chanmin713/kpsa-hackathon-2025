import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { category } from "../types/posts";

interface PostState {
  title: string | null;
  content: string | null;
  category: category;

  setTitle: (title: string | null) => void;
  setContent: (content: string | null) => void;
  setCategory: (category: category) => void;
}

export const usePostStore = create<PostState>()(
  persist(
    (set): PostState => ({
      title: null,
      content: null,
      category: "FREE",
      setTitle: (title) => set({ title }),
      setContent: (content) => set({ content }),
      setCategory: (category) => set({ category })
    }),
    {
      name: "post-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
