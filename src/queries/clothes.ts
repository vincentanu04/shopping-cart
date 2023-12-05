import { gql } from "@apollo/client";

const CLOTHES_QUERY = gql`
    query {
        products(categoryId: 1) {
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

export default CLOTHES_QUERY;