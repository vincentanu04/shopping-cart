import { useQuery } from "@apollo/client"
import { Box, Typography } from "@mui/material"
import { BEST_SELLING_QUERY } from "../queries"
import { ShopItems, LoadingSkeletonCard } from "."

const BestSelling = () => {
  const { data, loading, error } = useQuery(BEST_SELLING_QUERY);

  if (error) return 'Error Occured!'

  return (
    <Box
    textAlign={'center'}
    padding={4}
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    >
      <Typography variant="h4" fontWeight={600}>
        Our best selling items
      </Typography>
      {loading 
        ? <Box display={'flex'} gap={4}>
            <LoadingSkeletonCard />
            <LoadingSkeletonCard />
            <LoadingSkeletonCard />
            <LoadingSkeletonCard />
          </Box>
        : <ShopItems shopItems={data.products.edges} />}
    </Box>
  )
}

export default BestSelling