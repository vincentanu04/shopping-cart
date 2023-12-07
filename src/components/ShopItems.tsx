import { Box } from "@mui/material"
import { ShopItem } from "."

// interface ShopItemsProps {
//   shopItems: ShopItem[];
// }

const ShopItems = ({ shopItems }) => {
  console.log(shopItems)
  return (
    <Box display={'flex'}>
      {shopItems.map((shopItem) => (
        <ShopItem key={shopItem.node.id} shopItem={shopItem}/>
      ))}
    </Box>
  )
}

export default ShopItems