import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChangedListener } from "../src/utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../src/utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "@/utils/firebase/firebase.utils";

import { setCurrentUser } from "../src/store/user/user.action";
import { fetchCategoriesAsync } from "../src/store/categories/categories.action";

import { selectCartItems } from "./store/cart/cart.selector";
import { updateTotalQuantity } from "./store/cart/cart.action";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/sign-in/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    const newTotalQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    dispatch(updateTotalQuantity(newTotalQuantity));
  }, [cartItems, dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigation />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="shop/*"
          element={<Shop />}
        />
        <Route
          path="auth"
          element={<Authentication />}
        />
        <Route
          path="checkout"
          element={<Checkout />}
        />
      </Route>
    </Routes>
  );
};

export default App;
