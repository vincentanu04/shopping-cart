import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import { NavButton } from '.'

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('Homepage')
  console.log(currentPage)
  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography 
            variant='h4' 
            component='a' 
            href='/'
            sx={{
                display: { xs: 'none', md: 'flex' },
                fontWeight: 900,
                letterSpacing: '.2rem',
                textDecoration: 'none',
            }}
            >
                Attire Avenue
            </Typography>
            <Box mr={2} ml={'auto'}>
              <ButtonGroup color="secondary" variant="contained">
                <NavButton 
                currentPage={currentPage}
                page='Homepage'
                onClick={setCurrentPage}
                href='/'>
                  Home
                </NavButton>
                <NavButton 
                currentPage={currentPage}
                page='Clothespage'
                onClick={setCurrentPage}
                href='/clothes'>
                  Clothes
                </NavButton>
                <NavButton 
                currentPage={currentPage}
                page='Shoespage'
                onClick={setCurrentPage}
                href='/'>
                  Shoes
                </NavButton>
              </ButtonGroup>
            </Box>
            <IconButton>
            <Badge badgeContent={1} color="error">
                <ShoppingCart color="action"/>
            </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar