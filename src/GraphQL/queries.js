import { gql } from "@apollo/client";
export const LOAD_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        description
        prices {
          amount
          currency
        }
        brand
      }
    }
  }
`;
