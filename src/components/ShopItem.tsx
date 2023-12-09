import { AddShoppingCart } from "@mui/icons-material"
import { Box, Card, CardActions, CardContent, IconButton, ImageListItem, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const ShopItem = ({ shopItem }) => {
  return (
    <Box p={4} marginBlock={1}>
      <Card>
        <ImageListItem
        component={Link}
        to={'/products/' + shopItem.node.id.substring(shopItem.node.id.length - 13)}
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
            to={'/products/' + shopItem.node.id.substring(shopItem.node.id.length - 13)}
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
            component={Link}
            to={'/products/' + shopItem.node.id.substring(shopItem.node.id.length - 13)}
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