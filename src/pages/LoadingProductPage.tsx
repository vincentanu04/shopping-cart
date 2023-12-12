import { Box, CircularProgress } from "@mui/material";

const LoadingProductPage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height={'90vh'}>
      <CircularProgress/>
    </Box>
  )
}

export default LoadingProductPage;