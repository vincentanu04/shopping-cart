import { gql } from "@apollo/client";

const SHOES_QUERY = gql`
    query {
        products(categoryId: 4) {
            id
            title
            price
            description
            images
            category {
            id
            name
            image
            }
        }
    }
`;

export default SHOES_QUERY;