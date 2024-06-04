import { createSlice } from "@reduxjs/toolkit";

const handleTotalAmount = (items) => {
  return items.reduce(
    (total, item) => total + item.price * item.minimumOrderQuantity,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.minimumOrderQuantity += 1;
      } else {
        state.items.push({ ...action.payload, minimumOrderQuantity: 1 });
      }
      state.totalAmount = handleTotalAmount(state.items);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalAmount = handleTotalAmount(state.items);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.minimumOrderQuantity += 1;
        state.totalAmount = handleTotalAmount(state.items);
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.minimumOrderQuantity > 1) {
        item.minimumOrderQuantity -= 1;
        state.totalAmount = handleTotalAmount(state.items);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
