import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectTotalQuantity = createSelector(
  [selectCartReducer],
  (cart) => cart.totalQuantity
);

export const selectTotalPrice = createSelector(
  [selectCartReducer],
  (cart) => cart.totalPrice
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);
