import { Box, Button, Typography } from "@mui/material"

const Hero = () => {
  return (
    <Box 
    display={'flex'} 
    flexDirection={'column'} 
    alignItems={'center'} 
    padding={5}
    sx={{
      paddingInline: { xs: 20, md: 36, },
    }}
    gap={2}
    textAlign={'center'}>
        <Typography variant="h4" fontWeight={600} fontSize={'2.5rem'}>Your one stop shop for all your fashion needs!</Typography>
        <Typography>Discover style redefined at Attire Avenue! Your ultimate fashion destination for chic clothing, trendy accessories, and stylish footwear. Elevate your style effortlessly with Attire Avenue – your go-to for fashion essentials!</Typography>
        <Button variant="contained" color="secondary">Clothes</Button>
        <Button variant="contained" color="secondary">Shoes</Button>
    </Box>
  )
}

export default Hero