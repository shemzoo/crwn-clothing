import { Outlet } from "react-router-dom";
import CategoriesMenu from "../../components/categories-menu/categories-menu.component";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

const Home = () => {
  const { categoriesArray } = useContext(CategoriesContext);

  return (
    <div>
      <CategoriesMenu categories={categoriesArray} />
      <Outlet />
    </div>
  );
};

export default Home;
