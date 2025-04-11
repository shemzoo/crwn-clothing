import { useSelector } from "react-redux";
import { selectCategoriesMap } from "@/store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoryPreviewContainer } from "./categories-preview.styles.jsx";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <CategoryPreviewContainer>
      {categoriesMap &&
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview
              key={title}
              title={title}
              products={products}
            />
          );
        })}
    </CategoryPreviewContainer>
  );
};

export default CategoriesPreview;
