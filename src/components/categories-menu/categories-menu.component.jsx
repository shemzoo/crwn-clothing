import CategoryItem from "../category-item/category-item.component.jsx";
import { CategoriesContainer } from "./category-menu.styles.jsx";

const CategoryMenu = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map(({ title, id, imageUrl }) => {
        return (
          <CategoryItem
            key={id}
            title={title}
            $imageUrl={imageUrl}
          />
        );
      })}
    </CategoriesContainer>
  );
};

export default CategoryMenu;
