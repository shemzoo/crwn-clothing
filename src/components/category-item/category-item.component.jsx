import {
  CategoryContainer,
  CategoryBodyContainer,
  BackgroundImage,
} from "./category-item.styles.jsx";

import { useNavigate } from "react-router-dom";

const CategoryItem = ({ $imageUrl, title }) => {
  let navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate(`shop/${title.toLowerCase()}`);
  };
  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage $imageUrl={$imageUrl}></BackgroundImage>
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
