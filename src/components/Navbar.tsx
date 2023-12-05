import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Typography 
            variant='h4' 
            component='a' 
            href="#"
            sx={{
                // display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.15rem',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 1,
            }}>
                Attire Avenue
            </Typography>
            <Box mr={2}>
                <ButtonGroup color="secondary" variant="contained">
                <Button color="success">
                    Home
                </Button>
                <Button>
                    Clothes
                </Button>
                <Button>
                    Shoes
                </Button>
                </ButtonGroup>
            </Box>
            <IconButton>
            <Badge badgeContent={1} color="error">
                <ShoppingCart color="action"/>
            </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar