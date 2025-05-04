import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!exisitingItem)
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (exisitingItem.quantity === 1)
        state.items = state.items.filter((item) => item.id !== id);
      else {
        exisitingItem.quantity--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
      }
    },
  },
});

export const cartActoins = cartSlice.actions;
export default cartSlice.reducer;
