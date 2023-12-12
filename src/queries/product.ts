import { gql } from "@apollo/client";

const PRODUCT_QUERY = gql`
  query($productID: ID!) {
    product(id: $productID) {
      id
      title
      description
      featuredImage {
        url
      }
      variants(first: 3) {
        edges {
          node {
            price {
              amount
            }
          }
        }
      }
    }
  }
`;
export default PRODUCT_QUERY;