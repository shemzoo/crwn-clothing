import { createContext, useState, useEffect } from "react";
import PRODUCTS_DATA from "../shop-data.json";

export const ProductsContext = createContext({
  products: null,
  setProducts: () => null,
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    const getProducts = async () => {
      const productsData = PRODUCTS_DATA;
      setProducts(productsData);
    };

    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
