import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

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
        <Typography>Elevate your style effortlessly with Attire Avenue – your go-to for fashion essentials! Your ultimate fashion destination for chic clothing, trendy accessories, and stylish footwear.</Typography>
        <Button variant="contained" color="secondary" LinkComponent={Link}>Men's</Button>
        <Button variant="contained" color="secondary" LinkComponent={Link}>Women's</Button>
    </Box>
  )
}

export default Hero