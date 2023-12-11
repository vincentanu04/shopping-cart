import { Box, Typography } from "@mui/material"
import { isCartEmpty } from "../utils"
import { ContinueShoppingButton, ShoppingCartItem } from "../components"
import { useCart } from "../contexts/CartContext"

const ShoppingCartPage = () => {
  const { cart, addToCart } = useCart();

  return (
    <Box p={4}>
      <Typography variant='h3' component='h1' mb={8}>
        Shopping Cart
      </Typography>
      {
        isCartEmpty(cart)
          ? (
            <Box>
              <Typography mb={4}>Your cart is currently empty.</Typography>
              <ContinueShoppingButton />
            </Box>
          )
          : (
            <Box display={'flex'} flexDirection={'column'} gap={4}>
              {
                Object.values(cart).map((item) => (
                  <ShoppingCartItem item={item} key={item.id}/>
                ))
              }
            </Box>
          )
      }
    </Box>
  )
}

export default ShoppingCartPage