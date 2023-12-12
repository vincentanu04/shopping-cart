import { Box, Skeleton } from "@mui/material";

const LoadingProductPage = () => {
  return (
    <Box display="flex" alignItems="center" p={8} gap={8}>
      <Skeleton variant="rounded" width={700} height={500}/>
      <Box>
        <Skeleton variant="text" sx={{fontSize: '4rem'}} width={200}/>
        <Skeleton variant="text" sx={{fontSize: '3.5rem', marginBottom:'.25em'}} width={150}/>
        <Skeleton variant="text" sx={{fontSize: '1rem'}} width={600}/>
        <Skeleton variant="text" sx={{fontSize: '1rem'}} width={600}/>
        <Skeleton variant="text" sx={{fontSize: '1rem'}} width={600}/>
        <Box marginBlock={2}>
          <Skeleton variant="text" sx={{fontSize: '2rem'}} width={100}/>
          <Skeleton variant="rectangular" height={40} width={'40%'}/>
        </Box>
        <Skeleton variant="rectangular" height={40} width={'100%'}/>
      </Box>
    </Box>
  )
}

export default LoadingProductPage;