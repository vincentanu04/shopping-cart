import { Box, Button, Divider, Typography } from "@mui/material"
import { isCartEmpty, numberCartItems } from "../utils"
import { ContinueShoppingButton, ShoppingCartItem } from "../components"
import { useCart } from "../contexts/CartContext"
import React from "react"

const ShoppingCartPage = () => {
  const { cart } = useCart();
  const numberOfItems = numberCartItems(cart);
  const totalOrder = Object.values(cart)
    .reduce(
      (total, item) => total + item.quantity * item.price, 0
    )

  return (
    <Box p={4} display={'flex'}>
      <Box >
        <Typography variant='h3' component='h1' mb={4}>
          Shopping Cart
        </Typography>
        {
          isCartEmpty(cart)
            ? (
              <Box>
                <Typography mb={4} mt={8}>Your cart is currently empty.</Typography>
                <ContinueShoppingButton />
              </Box>
            )
            : (
              <Box display={'flex'} sx={{
                overflowY: 'auto',
                paddingRight: '1em',
                paddingBlock: '1em',
                maxHeight: ['unset', 'unset', '64vh'],
              }}>
                <Box display={'flex'} flexDirection={'column'} gap={4} width={'55vw'}>
                  {
                    Object.values(cart).map((item, index) => (
                      <React.Fragment key={item.id}>
                        <ShoppingCartItem item={item} />
                        {index !== Object.values(cart).length - 1 && <Divider />}
                      </React.Fragment>
                    ))
                  }
                </Box>
              </Box>
            )
        }
      </Box>
      {!isCartEmpty(cart) && 
        <Box display={'flex'} flexDirection='column' alignItems={'flex-start'} flex={1} paddingInline={6} pt={4} height={'100%'}>
          <Typography variant="h6" fontWeight={900} mb={4} alignSelf={'center'}>Order Summary | {numberOfItems} item(s)</Typography>
          <Box>
            {Object.values(cart).map((item) => (
              <Box key={item.id} mb={2}>
                <Typography fontWeight={900}>{item.title} ({item.quantity})</Typography>
                <Typography color={'#525151'}>Subtotal: <Typography display={'inline'} fontWeight={900} color={'red'}>$ {Number(item.quantity * item.price).toFixed(2)}</Typography></Typography>
              </Box>
            ))}
          </Box>
          <Typography mb={2} variant="h6" alignSelf={'flex-end'} fontWeight={900}>Total Order: <Typography variant='h6' display={'inline'} fontWeight={900} color={'red'}>$ {Number(totalOrder).toFixed(2)}</Typography></Typography>
          <Button variant="contained" sx={{width: '100%'}}>Checkout</Button>
        </Box>}
    </Box>

  )
}

export default ShoppingCartPage