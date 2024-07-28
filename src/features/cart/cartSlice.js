import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = new item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId == action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId == action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
      if(item.quantity === 0)cartSlice.caseReducers.deleteItem(state,action)
    },
    clearCart(state) {
      state.cacrt = [];
    },
  },
});
export const { addItem, deleteItem, increaseItem, decreaseItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
export const getCart = (state) => state.cart.cart;
export const getTotalCartQty = (state) =>
  state.cart.cart.reduce((acc, item) => item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, item) => item.totalPrice, 0);
export const getCurQty = (id) => {
  (state) => {
    const item = state.cart.cart.find((item) => item.pizzaId == id);
    return item.quantity ? item.quantity : 0;
  };
};
