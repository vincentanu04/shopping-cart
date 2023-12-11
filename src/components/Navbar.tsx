import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material'
import { NavButton } from '.'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { isCartEmpty, numberCartItems } from '../utils'

const Navbar = () => {
  const { cart, addToCart } = useCart();

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography 
            color={'#023306'}
            variant='h4' 
            component={Link} 
            to='/'
            sx={{
                fontWeight: 900,
                letterSpacing: '.2rem',
                textDecoration: 'none',
            }}
            >
                Attire Avenue
            </Typography>
            <Box mr={2} ml={'auto'}>
              <ButtonGroup color="secondary" variant="contained" >
                <NavButton 
                to='/'>
                  Home
                </NavButton>
                <NavButton 
                to='/men'>
                  Men
                </NavButton>
                <NavButton 
                to='/women'>
                  Women
                </NavButton>
              </ButtonGroup>
            </Box>
            <IconButton
            component={Link}
            to={'/cart'}>
            <Badge badgeContent={numberCartItems(cart)} color="error">
                <ShoppingCart color="action"/>
            </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar