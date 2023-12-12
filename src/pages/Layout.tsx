import { Outlet } from "react-router-dom";
import { Navbar, ScrollToTop } from "../components";
import { CartProvider } from "../contexts/CartContext";

const Layout = () => {
    return (
      <>
        <ScrollToTop/>
        <CartProvider>
          <Navbar />
          <Outlet />
        </CartProvider>
      </>
    )
  }

export default Layout;