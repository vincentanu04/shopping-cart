import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { PRODUCT_QUERY } from "../queries";
import { Box, Button, ButtonGroup, Divider, ImageListItem, Typography } from "@mui/material";
import LoadingProductPage  from "./LoadingProductPage";
import { useState } from "react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { productID } = useParams();
  const productIDString = "gid://shopify/Product/" + productID;

  const { data, loading, error } = useQuery(PRODUCT_QUERY, {
    variables: {
      productID: productIDString,
    },
  });

  if (loading) {
    return <LoadingProductPage/>; 
  }

  console.log(data)
  if (error || !data || !data.product) {
    return <p>Error loading product data</p>;
  }

  const product = data.product;

  return (
    <Box display="flex" alignItems="center"  p={8} gap={8}>
      <ImageListItem>
        <img src={product.featuredImage.url} alt="Product" style={{ width: '40vw'}}/>
      </ImageListItem>
      <Box>
        <Typography variant="h2" component="h1" fontWeight={600}>
          {product.title}
        </Typography>
        <Typography variant="h4" fontWeight={900} mb={1}>
          $ {Number.parseFloat(product.variants.edges[0].node.price.amount).toFixed(2)}
        </Typography>
        <Divider/>
        <Typography mt={4}>{product.description}</Typography>
        <Box mt={4} mb={4}>
          <Typography mb={1} variant="h6" fontWeight={900} fontSize='large'>Quantity</Typography>
          <ButtonGroup variant="contained">
            <Button 
            sx={{paddingInline:'1.5em'}}
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
            >
              -
            </Button>
            <Button 
            color="secondary" 
            sx={{pointerEvents: 'none', paddingInline:'1.25em'}}
            >
              {quantity}
            </Button>
            <Button 
            sx={{paddingInline:'1.5em'}}
            onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </ButtonGroup>
        </Box>
        <Button variant="contained" sx={{width:'100%', height: '2.5em'}}>Add To Cart</Button>  
      </Box>

    </Box>
  );
};

export default ProductPage;
