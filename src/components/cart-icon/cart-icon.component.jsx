import "connect-history-api-fallback";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { toggleCartHandler } = useContext(CartContext);
  const { totalQuantity } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={toggleCartHandler}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
