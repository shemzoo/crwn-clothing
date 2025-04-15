import { CART_ACTION_TYPES } from "./cart.types";

import { createAction } from "../../utils/reducer/reducer.utils";

export const toggleCart = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART);

export const addItem = (productToAdd) =>
  createAction(CART_ACTION_TYPES.ADD_ITEM, productToAdd);

export const removeItem = (cartItemToRemove) =>
  createAction(CART_ACTION_TYPES.REMOVE_ITEM, cartItemToRemove);

export const clearItem = (cartItemToClear) =>
  createAction(CART_ACTION_TYPES.CLEAR_ITEM, cartItemToClear);

export const updateTotalQuantity = (totalQuantity) =>
  createAction(
    CART_ACTION_TYPES.UPDATE_TOTAL_QUANTITY,
    totalQuantity
  );

export const updateTotalPrice = (totalPrice) =>
  createAction(CART_ACTION_TYPES.UPDATE_TOTAL_PRICE, totalPrice);

export const clearCart = () =>
  createAction(CART_ACTION_TYPES.CLEAR_CART);
