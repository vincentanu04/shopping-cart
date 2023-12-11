import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ContinueShoppingButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1);
  };

  return (
    <Button 
    variant="contained" 
    sx={{padding:'.5em 2em'}}
    onClick={handleButtonClick}
    >
        Continue Shopping
    </Button>
  )
}

export default ContinueShoppingButton