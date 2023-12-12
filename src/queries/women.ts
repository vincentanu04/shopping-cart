import { gql } from "@apollo/client";

const WOMEN_QUERY = gql`
    query {
        collection(id: "gid://shopify/Collection/429493813270") {
            id
            handle
            title
            description
            image {
            id
            url
            }
            products(first: 100) {
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
    }
`;

export default WOMEN_QUERY;