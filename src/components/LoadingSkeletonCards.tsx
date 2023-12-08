import { Box } from "@mui/material"
import { LoadingSkeletonCard } from "."

interface LoadingSkeletonCardsProps {
    numberOfItems: number,
    itemsPerRow: number,
}

const LoadingSkeletonCards = ({ numberOfItems, itemsPerRow }: LoadingSkeletonCardsProps) => {
  const flexBasis = `${100 / itemsPerRow}%`;
  const itemsArray = Array.from({ length: numberOfItems });
  return (
    <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
        {itemsArray.map((_, index) => (
            <Box key={index} flexBasis={flexBasis}>
                <LoadingSkeletonCard />
            </Box>
        ))}
    </Box>  
  )
}

export default LoadingSkeletonCards