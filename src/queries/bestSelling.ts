import { gql } from "@apollo/client";

const BEST_SELLING_QUERY = gql`
    query {
        products(first: 4) {
            edges {
                node {
                    id
                    title
                    description
                    featuredImage {
                        id
                        url
                    }
                    variants(first: 3) {
                        edges {
                            node {
                                price {
                                    amount
                                    currencyCode
                                }
                            }
                        }
                    }
                }
            }
        }     
    }
`;

export default BEST_SELLING_QUERY;