import { ShopCategoryContainer, Title } from "./category.styles.jsx";
import { useEffect, Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";

import { selectCategoriesMap } from "../../store/categories/categories.selector.js";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(categoriesMap);
    if (categoriesMap) {
      setProducts(categoriesMap[category] || []);
    }
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <ShopCategoryContainer>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div>No products found in this category.</div>
        )}
      </ShopCategoryContainer>
    </Fragment>
  );
};

export default Category;
