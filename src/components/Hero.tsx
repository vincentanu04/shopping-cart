import { Box, Button, Typography } from "@mui/material"

const Hero = () => {
  return (
    <Box 
    display={'flex'} 
    flexDirection={'column'} 
    alignItems={'center'} 
    padding={6}
    paddingInline={40}
    gap={3}
    textAlign={'center'}>
        <Typography variant="h4" fontWeight={600}>Your one stop shop for all your fashion needs</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde delectus asperiores, incidunt quisquam inventore ut ex vel iure nostrum voluptate qui, assumenda modi quod nemo ab magni ad totam quo.</Typography>
        <Button variant="contained" color="secondary">Clothes</Button>
        <Button variant="contained" color="secondary">Shoes</Button>
    </Box>
  )
}

export default Hero