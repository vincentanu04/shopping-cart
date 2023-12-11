import { Box, ImageListItem, Typography } from "@mui/material"

const ShoppingCartItem = ({ item }) => {
  console.log(item)
  return (
    <Box display={'flex'} gap={2}>
        <ImageListItem>
            <img src={item.imageURL} alt={item.title} style={{width: '15vw'}}/>
        </ImageListItem>
        <Box>
            <Typography variant="h5">{item.title}</Typography>
            <Typography>$ {Number(item.price).toFixed(2)}</Typography>
            
        </Box>
    </Box>
  )
}

export default ShoppingCartItem