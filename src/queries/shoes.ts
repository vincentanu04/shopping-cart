import { gql } from "@apollo/client";

const SHOES_QUERY = gql`
    query {
        product(id: "gid://shopify/Product/7982905098262") {
            id
            title
            description
            featuredImage {
            id
            url
            }s
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

export default SHOES_QUERY;