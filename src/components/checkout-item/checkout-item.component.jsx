import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { id, name, quantity, price, imageUrl } = cartItem;
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);
  return (
    <CheckoutItemContainer key={id}>
      <ImageContainer>
        <img
          src={imageUrl}
          alt={name}
        />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <div
          className="arrow"
          onClick={() => removeItemFromCart(cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => addItemToCart(cartItem)}
        >
          &#10095;
        </div>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
