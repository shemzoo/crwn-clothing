import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  isCartOpen: false,
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen };
    case CART_ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state, payload),
      };
    case CART_ACTION_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state, payload),
      };
    case CART_ACTION_TYPES.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };
    case CART_ACTION_TYPES.CLEAR_CART:
      return { ...state, cartItems: [] };
    case CART_ACTION_TYPES.UPDATE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: payload,
      };
    case CART_ACTION_TYPES.UPDATE_TOTAL_QUANTITY:
      return {
        ...state,
        totalQuantity: payload,
      };
    default:
      return state;
  }
};

const addItemToCart = (state, productToAdd) => {
  const { cartItems } = state;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemFromCart = (state, cartItemToRemove) => {
  const { cartItems } = state;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // Check if quantity is greater than 1, if it is decrement quantity
  if (existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  // if quantity is 1, remove item from cart
  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(state.cartItems, cartItemToRemove); // Pass cartItems directly
  }
  // This case should ideally not be reached if logic is correct, but return original cartItems if needed
  return cartItems;
};

// Note: This function now expects cartItems array directly, not the full state
const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter(
    (cartItem) => cartItem.id !== cartItemToClear.id
  );
};
