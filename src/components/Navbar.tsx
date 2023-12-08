import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import { NavButton } from '.'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('Homepage')
  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography 
            variant='h4' 
            component={Link} 
            to='/'
            sx={{
                display: { xs: 'none', md: 'flex' },
                fontWeight: 900,
                letterSpacing: '.2rem',
                textDecoration: 'none',
            }}
            onClick={() => setCurrentPage('Homepage')}
            >
                Attire Avenue
            </Typography>
            <Box mr={2} ml={'auto'}>
              <ButtonGroup color="secondary" variant="contained">
                <NavButton 
                currentPage={currentPage}
                page='Homepage'
                setCurrentPage={setCurrentPage}
                to='/'>
                  Home
                </NavButton>
                <NavButton 
                currentPage={currentPage}
                page='Clothespage'
                setCurrentPage={setCurrentPage}
                to='/clothes'>
                  Clothes
                </NavButton>
                <NavButton 
                currentPage={currentPage}
                page='Shoespage'
                setCurrentPage={setCurrentPage}
                to='/'>
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