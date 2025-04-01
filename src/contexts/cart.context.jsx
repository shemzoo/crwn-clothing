import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = [...cartItems];
    const existingCartItem = newCartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      newCartItems.push({ ...productToAdd, quantity: 1 });
    }

    setCartItems(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    let newCartItems = [...cartItems];
    const existingCartItem = newCartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity === 1) {
      newCartItems = newCartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
    } else {
      existingCartItem.quantity -= 1;
    }
    setCartItems(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    let updatedCartItems = [...cartItems];
    const itemToRemove = updatedCartItems.find(
      (cartItem) => cartItem.id === cartItemToClear.id
    );
    updatedCartItems = updatedCartItems.filter(
      (cartItem) => cartItem.id !== itemToRemove.id
    );
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const newTotalQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalPrice(newTotalPrice);
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
