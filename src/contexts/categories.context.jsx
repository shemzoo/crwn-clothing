import { createContext, useState, useEffect, useMemo } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: () => null,
  categoriesArray: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const categoriesArray = useMemo(() => {
    console.log("Calculating categoriesArray in context");
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

  const value = { categoriesMap, setCategoriesMap, categoriesArray };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
