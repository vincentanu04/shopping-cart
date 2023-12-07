import { Button } from "@mui/material";

const NavButton = ({ page, currentPage, children, onClick, href }) => (
    <Button
      color={currentPage === page ? 'accent' : 'secondary'}
      onClick={() => onClick(page)}
      href={href}
    >
        {children}
    </Button>
);

export default NavButton;
  