import { AddShoppingCart } from "@mui/icons-material"
import { Box, Card, CardActions, CardContent, IconButton, ImageListItem, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import { getShopItemID } from "../utils"


interface ShopItemProps {

}

const ShopItem = ({ shopItem }: ShopItemProps) => {
  const { cart, addToCart } = useCart();

  const cartShopItem = {
    id: getShopItemID(shopItem),
    quantity: 1,
    title: shopItem.node.title,
    imageURL: shopItem.node.featuredImage.url,
    price: shopItem.node.variants.edges[0].node.price.amount,
  }

  return (
    <Box p={4} marginBlock={1}>
      <Card>
        <ImageListItem
        component={Link}
        to={'/products/' + getShopItemID(shopItem)}
        >
          <img
          src={shopItem.node.featuredImage.url}
          alt={shopItem.node.title}/>
        </ImageListItem>
        <Box display={'flex'} justifyContent={'space-between'}>
          <CardContent>
            <Typography 
            variant="h6" 
            fontSize={'medium'}
            component={Link}
            to={'/products/' + getShopItemID(shopItem)}
            sx={{ 
              position:'relative',
              textDecoration:'none', 
              color: 'black', 
              '::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '.15rem',
                background: '#023306',
                left: 0,
                bottom: -1,
                opacity: 0,
                transition: "opacity .5s ease",
              },
              ':hover::after': { 
                opacity: 1 ,   
              } 
            }}
            >
              {shopItem.node.title}
            </Typography>
            <Typography textAlign={'left'}>
              $ {Number.parseFloat(shopItem.node.variants.edges[0].node.price.amount).toFixed(2)}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton 
            aria-label="add to cart"
            onClick={() => addToCart(cartShopItem)}
            >
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </Box>
  )
}

export default ShopItem