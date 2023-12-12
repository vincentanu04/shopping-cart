import { gql } from "@apollo/client";

const MEN_QUERY = gql`
    query {
        collection(id: "gid://shopify/Collection/429493780502") {
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

export default MEN_QUERY;