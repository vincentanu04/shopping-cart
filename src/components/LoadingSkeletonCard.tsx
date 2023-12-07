import { Box, Skeleton } from "@mui/material"

const LoadingSkeletonCard = () => {
  return (
    <Box mt={4}>
        <Skeleton width={250} height={40}/>
        <Skeleton width={250} height={40}/>
        <Skeleton width={250} height={40}/>
        <Skeleton width={250} height={40}/>
        <Skeleton width={250} height={40}/>
    </Box>
  )
}

export default LoadingSkeletonCard