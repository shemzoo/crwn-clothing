import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";

import Button from "../button/button.component";
import { addItem } from "@/store/cart/cart.action";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const addProductToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <ProductCardContainer>
      <img
        src={imageUrl}
        alt={`${name}`}
      />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        $buttonType="inverted"
        onClick={() => addProductToCart(product)}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
