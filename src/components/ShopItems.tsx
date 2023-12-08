import { Box } from "@mui/material"
import { ShopItem } from "."

const ShopItems = ({ shopItems, itemsPerRow }) => {
  const flexBasis = `${100 / itemsPerRow}% `
  return (
    <Box display={'flex'} flexWrap={'wrap'}>
      {shopItems.map((shopItem) => (
        <Box key={shopItem.node.id} flexBasis={flexBasis}>
          <ShopItem shopItem={shopItem}/>
        </Box>
      ))}
    </Box>
  )
}

export default ShopItems