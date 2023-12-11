import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { CartProvider } from "../contexts/CartContext";

const Layout = () => {
    return (
      <>
        <CartProvider>
          <Navbar />
          <Outlet />
        </CartProvider>
      </>
    )
  }

export default Layout;