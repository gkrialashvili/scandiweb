import { useQuery, gql } from "@apollo/client";
import { LOAD_PRODUCTS } from "../GraphQL/queries";
import { useEffect, useState } from "react";

function GetProducts() {
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

  if (nana) {
    return (
      <div className="container">
        {nana.map((m) => {
          return (
            <div key={m.id}>
              <img
                src={m.gallery}
                className="catalogItemsMain_itemConteiner_img"
                alt=""
              />
              <h1>{m.name}</h1>
              <h3></h3>
            </div>
          );
        })}
      </div>
    );
  } else return <div className="container">No Data</div>;
}
export default GetProducts;
