import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeToCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  clearAll: () => set(() => ({ cart: [] })),
}));

// import { create } from "zustand";

// export const useStore = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
//   dec: () => set((state) => ({ count: state.count - 1 })),
// }));
