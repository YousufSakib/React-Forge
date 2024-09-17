import { create } from "zustand";

const initialState = {
  user: {
    id: "user302",
    friends: ["jack", "jessica", "colin"],
    profile: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "1234",
      },
    },
  },
};

export const useUser = create((set) => ({
  ...initialState,
  updateAddressStreet: (street) =>
    set((state) => ({
      user: {
        ...state.user,
        profile: {
          ...state.user.profile,
          address: {
            ...state.user.profile.address,
            street: street,
          },
        },
      },
    })),
}));
