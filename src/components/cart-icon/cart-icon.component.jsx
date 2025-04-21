import "connect-history-api-fallback";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "@/store/cart/cart.action";
import { selectTotalQuantity } from "../../store/cart/cart.selector.js";

const CartIcon = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const dispatch = useDispatch();
  return (
    <CartIconContainer onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
