import { useQuery, gql } from "@apollo/client";
import { LOAD_PRODUCTS } from "../GraphQL/queries";
import { useEffect, useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { error, loading, data } = useQuery(LOAD_PRODUCTS);
  const [productData, setproductData] = useState([]);
  const [categoryName, setCategoryName] = useState("tech");

  useEffect(() => {
    if (data) {
      setproductData(data.categories);
    }
    console.log(data);
  }, [data]);

  let clothesCategory = productData
    .filter((x) => x.name === categoryName)
    .map((y) => y.products);

  const nana = clothesCategory[0];

  if (nana) nana.map((e) => console.log(e.id));

  return (
    <ProductContext.Provider value={nana}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
