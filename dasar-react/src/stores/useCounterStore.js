// store/useCounterStore.js
import { create } from "zustand";

// This store manages a simple counter state with increment and decrement actions.
export const useCounterStore = create((set) => ({
  count: 0, // Initial state of the counter

  increment: () =>
    set((state) => ({
      count: state.count + 1, // Increment the count by 1
    })),

  decrement: () =>
    set((state) => ({
      count: state.count - 1, // Decrement the count by 1
    })),
}));
