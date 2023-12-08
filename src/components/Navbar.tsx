import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import { NavButton } from '.'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('Home')
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
            onClick={() => setCurrentPage('Home')}
            >
                Attire Avenue
            </Typography>
            <Box mr={2} ml={'auto'}>
              <ButtonGroup color="secondary" variant="contained" >
                <NavButton 
                currentPage={currentPage}
                page='Home'
                setCurrentPage={setCurrentPage}
                to='/'>
                  Home
                </NavButton>
                <NavButton 
                currentPage={currentPage}
                page='Men'
                setCurrentPage={setCurrentPage}
                to='/men'>
                  Men's
                </NavButton>
                <NavButton 
                currentPage={currentPage}
                page='Women'
                setCurrentPage={setCurrentPage}
                to='/women'>
                  Women's
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