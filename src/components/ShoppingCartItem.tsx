import { Clear } from "@mui/icons-material"
import { Box, Button, ButtonGroup, IconButton, ImageListItem, Typography } from "@mui/material"
import { useCart } from "../contexts/CartContext"

const ShoppingCartItem = ({ item }) => {
  const { removeFromCart, adjustQuantity } = useCart();

  return (
    <Box display={'flex'} gap={2}>
        <ImageListItem>
            <img src={item.imageURL} alt={item.title} style={{width: '15vw'}}/>
        </ImageListItem>
        <Box display={'flex'} justifyContent={'space-between'} flex={1}>
          <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
              <Typography variant="h5">{item.title}</Typography>
              <Typography color={'#808080'}>Product ID: {item.id}</Typography>
              <Box mt={'auto'}>
                <Typography color={'red'} fontWeight={900}>$ {Number(item.price).toFixed(2)}</Typography>
                <Typography variant="h6" fontWeight={900} fontSize='medium'>Quantity</Typography>
                <ButtonGroup variant="contained" sx={{height: '2em'}}>
                  <Button
                  onClick={() => adjustQuantity(item, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <Button
                  color="secondary"
                  sx={{pointerEvents: 'none', paddingInline:'1.25em'}}
                  >
                    {item.quantity}
                  </Button>
                  <Button
                  onClick={() => adjustQuantity(item, item.quantity + 1)}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </Box>
          </Box>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} textAlign={'right'}>
            <IconButton sx={{alignSelf:'flex-end'}} onClick={() => removeFromCart(item)}>
              <Clear  />
            </IconButton>
            <Typography fontWeight={900}>
              Subtotal: <Typography display={'inline'} color="red" fontWeight={900}>
                          $ {Number(item.quantity * item.price).toFixed(2)}
                        </Typography>
            </Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default ShoppingCartItem