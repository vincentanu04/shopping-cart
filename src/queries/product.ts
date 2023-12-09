import { gql } from "@apollo/client";

const PRODUCT_QUERY = gql`
  query($productID: ID!) {
    product(id: $productID) {
      id
      title
      description
      featuredImage {
        id
        url
      }
      variants(first: 3) {
        edges {
          cursor
          node {
            id
            title
            image {
              url
            }
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
export default PRODUCT_QUERY;