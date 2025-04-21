import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCurrentUser } from "../src/utils/firebase/firebase.utils";

import { checkUserSession } from "../src/store/user/user.action";
import { fetchCategoriesStart } from "../src/store/categories/categories.action";

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
    dispatch(checkUserSession());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
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
