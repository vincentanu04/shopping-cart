import { useQuery } from "@apollo/client"
import { Box, Typography } from "@mui/material"
import { BEST_SELLING_QUERY } from "../queries"
import { ShopItems, LoadingSkeletonCards } from "."

const BestSelling = () => {
  const { data, loading, error } = useQuery(BEST_SELLING_QUERY);

  if (error) return 'Error Occured!'

  return (
    <Box
    textAlign={'center'}
    padding={6}
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    >
      <Typography variant="h4" fontWeight={600}>
        Our best selling items
      </Typography>
      {loading 
        ? <LoadingSkeletonCards numberOfItems={4} itemsPerRow={4}/>
        : <ShopItems shopItems={data.products.edges} itemsPerRow={4}/>}
    </Box>
  )
}

export default BestSelling