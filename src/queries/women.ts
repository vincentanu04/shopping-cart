import { gql } from "@apollo/client";

const WOMEN_QUERY = gql`
    query {
        collection(id: "gid://shopify/Collection/429493813270") {
            id
            title
            description
            image {
            url
            }
            products(first: 100) {
                edges {
                    node {
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
            }     
        }
    }
`;

export default WOMEN_QUERY;