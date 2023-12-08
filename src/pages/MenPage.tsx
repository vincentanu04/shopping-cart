import { useQuery } from "@apollo/client"
import { MEN_QUERY } from "../queries"
import { LoadingSkeletonCards, ShopItems } from "../components";
import { Box } from "@mui/material";

const MenPage = () => {
  const { data, loading, error } = useQuery(MEN_QUERY)

  if (error) return <div>Error..</div>

  return (
    <Box p={6}>
        
        {loading
            ? <LoadingSkeletonCards numberOfItems={8} itemsPerRow={4}/>
            : <ShopItems shopItems={data.collection.products.edges} itemsPerRow={4}/>}
    </Box>
  )
}

export default MenPage