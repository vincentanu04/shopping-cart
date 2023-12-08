import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavButton = ({ page, currentPage, children, setCurrentPage, to }) => (
    <Button
      color={currentPage === page ? 'accent' : 'secondary'}
      onClick={() => setCurrentPage(page)}
      to={to}
      LinkComponent={Link}
    >
        {children}
    </Button>
);

export default NavButton;
  