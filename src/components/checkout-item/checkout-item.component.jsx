import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  RemoveButton,
} from "./checkout-item.styles";

import {
  addItem,
  removeItem,
  clearItem,
} from "@/store/cart/cart.action";
import { useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const { id, name, quantity, price, imageUrl } = cartItem;

  const dispatch = useDispatch();

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
          onClick={() => dispatch(removeItem(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => dispatch(addItem(cartItem))}
        >
          &#10095;
        </div>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={() => dispatch(clearItem(cartItem))}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
