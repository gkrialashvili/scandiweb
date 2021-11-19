import { useQuery, gql } from "@apollo/client";
import { LOAD_PRODUCTS } from "../GraphQL/queries";
import { useEffect, useState } from "react";

function GetProducts() {
  const { error, loading, data } = useQuery(LOAD_PRODUCTS);
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    if (data) {
      setproductData(data.categories);
    }
    console.log(data);
  }, [data]);

  const clothesCategory = productData.filter((x) => x.name === "clothes");
  const newMap = clothesCategory.map((y) => y.products[0]);

  return (
    <div>
      {newMap.map((val) => {
        return <h1 key={val.id}>{val.name}</h1>;
      })}
    </div>
  );
}
export default GetProducts;
