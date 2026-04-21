import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      login: (data) =>
        set({
          user: data,
          token: data.accessToken, // pakai accessToken
        }),

      logout: () =>
        set({
          user: null,
          token: null,
        }),
    }),
    {
      name: "auth-storage", // nama di localStorage
    },
  ),
);
