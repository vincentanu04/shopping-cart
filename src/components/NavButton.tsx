import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const NavButton = ({ children, to }) => {
  const location = useLocation();

  return (
    <Button
      color={location.pathname === to ? 'accent' : 'secondary'}
      to={to}
      component={Link}
      sx={{
        paddingInline: '1.25em'
      }}
    >
        {children}
    </Button>
);}

export default NavButton;
  