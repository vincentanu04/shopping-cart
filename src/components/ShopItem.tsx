import { AddShoppingCart } from "@mui/icons-material"
import { Box, Button, Card, CardActions, CardContent, IconButton, ImageListItem, Typography } from "@mui/material"

const ShopItem = ({ shopItem }) => {
  return (
    <Box p={4} marginBlock={1}>
      <Card>
        <ImageListItem>
          <img
          src={shopItem.node.featuredImage.url}
          alt={shopItem.node.title}/>
        </ImageListItem>
        <Box display={'flex'} justifyContent={'space-between'}>
          <CardContent>
            <Typography variant="h6" fontSize={'medium'}>{shopItem.node.title}</Typography>
            <Typography textAlign={'left'}>$ {shopItem.node.variants.edges[0].node.price.amount}</Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to cart">
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </Box>
  )
}

export default ShopItem