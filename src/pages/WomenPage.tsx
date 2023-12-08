import { useQuery } from "@apollo/client"
import { WOMEN_QUERY } from "../queries"
import { Box } from "@mui/material"
import { LoadingSkeletonCards, ShopItems } from "../components"

const WomenPage = () => {
  const { data, loading, error } = useQuery(WOMEN_QUERY)

  if (error) return <div>Error..</div>

  return (
    <Box p={6}>
        
        {loading
            ? <LoadingSkeletonCards numberOfItems={8} itemsPerRow={4}/>
            : <ShopItems shopItems={data.collection.products.edges} itemsPerRow={4}/>}
    </Box>
  )
}

export default WomenPage