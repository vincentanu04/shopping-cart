import { Box, Skeleton } from "@mui/material"

const LoadingSkeletonCard = () => {
  return (
    <Box p={4} mt={4}>
        <Skeleton width={225} height={48}/>
        <Skeleton width={225} height={48}/>
        <Skeleton width={225} height={48}/>
        <Skeleton width={225} height={48}/>
        <Skeleton width={225} height={48}/>
    </Box>
  )
}

export default LoadingSkeletonCard