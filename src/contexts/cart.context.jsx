import {
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {}, // ADD_ITEM
  removeItemFromCart: () => {}, // REMOVE_ITEM
  clearItemFromCart: () => {}, // CLEAR_ITEM
  totalQuantity: 0,
  totalPrice: 0,
  isCartOpen: false,
  setIsCartOpen: () => {}, // TOGGLE_CART
});

const INITIAL_STATE = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  isCartOpen: false,
};

export const CART_ACTION_TYPES = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_ITEM: "CLEAR_ITEM",
  TOGGLE_CART: "TOGGLE_CART",
  UPDATE_TOTAL_QUANTITY: "UPDATE_TOTAL_QUANTITY",
  UPDATE_TOTAL_PRICE: "UPDATE_TOTAL_PRICE",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM:
      return addItemToCartReducer(state, payload); // Delegate to helper function
    case CART_ACTION_TYPES.REMOVE_ITEM:
      return removeItemFromCartReducer(state, payload);
    case CART_ACTION_TYPES.CLEAR_ITEM:
      return clearItemFromCartReducer(state, payload);
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case CART_ACTION_TYPES.UPDATE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: payload, // Update totalPrice
      };
    case CART_ACTION_TYPES.UPDATE_TOTAL_QUANTITY:
      return {
        ...state,
        totalQuantity: payload, // Update totalQuantity
      };
    default:
      throw new Error(`Unknown action type in cartReducer: ${type}`);
  }
};

const addItemToCartReducer = (state, productToAdd) => {
  const { cartItems } = state;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return {
      ...state,
      cartItems: cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ),
    };
  }

  return {
    ...state,
    cartItems: [...cartItems, { ...productToAdd, quantity: 1 }],
  };
};

const clearItemFromCartReducer = (state, cartItemToClear) => {
  const { cartItems } = state;

  return {
    ...state,
    cartItems: cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToClear.id
    ),
  };
};

const removeItemFromCartReducer = (state, cartItemToRemove) => {
  const { cartItems } = state;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity > 1) {
    return {
      ...state,
      cartItems: cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ),
    };
  }

  if (existingCartItem.quantity === 1) {
    return clearItemFromCartReducer(state, cartItemToRemove);
  }
  return state;
};

export const CartItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { cartItems, totalQuantity, totalPrice, isCartOpen } = state;

  const toggleCartHandler = () => {
    dispatch({
      type: CART_ACTION_TYPES.TOGGLE_CART,
    });
  };

  const addItemToCart = (productToAdd) => {
    dispatch({
      type: CART_ACTION_TYPES.ADD_ITEM,
      payload: productToAdd,
    });
  };

  const removeItemFromCart = (cartItemToRemove) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_ITEM,
      payload: cartItemToRemove,
    });
  };

  const clearItemFromCart = (cartItemToClear) => {
    dispatch({
      type: CART_ACTION_TYPES.CLEAR_ITEM,
      payload: cartItemToClear,
    });
  };

  useEffect(() => {
    const newTotalQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    dispatch({
      type: CART_ACTION_TYPES.UPDATE_TOTAL_QUANTITY,
      payload: newTotalQuantity,
    });
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({
      type: CART_ACTION_TYPES.UPDATE_TOTAL_PRICE,
      payload: newTotalPrice,
    });
  }, [cartItems]);

  const value = {
    cartItems,
    totalQuantity,
    totalPrice,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    toggleCartHandler,
    isCartOpen,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
