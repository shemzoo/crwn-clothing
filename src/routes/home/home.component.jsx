import { Outlet } from "react-router-dom";
import CategoriesMenu from "../../components/categories-menu/categories-menu.component";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Home = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  console.log(categoriesMap);

  const categoriesArray = useMemo(() => {
    return Object.keys(categoriesMap).map((categoryKey) => {
      const firstProduct = categoriesMap[categoryKey][0];
      return {
        id: firstProduct.id,
        title:
          categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1),
        imageUrl: firstProduct.imageUrl,
      };
    });
  }, [categoriesMap]);

  return (
    <div>
      <CategoriesMenu categories={categoriesArray} />
      <Outlet />
    </div>
  );
};

export default Home;
