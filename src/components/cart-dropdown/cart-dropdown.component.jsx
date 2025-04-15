import {
  CartDropdownContainer,
  CartItems,
} from "./cart-dropdown.styles.jsx";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "@/store/cart/cart.action";
import { selectCartItems } from "@/store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(toggleCart());
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
          />
        ))}
      </CartItems>
      <Button
        onClick={goToCheckoutHandler}
        $buttonType="default"
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
