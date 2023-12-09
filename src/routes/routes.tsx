import { createBrowserRouter } from "react-router-dom";
import { Homepage, MenPage, Layout, WomenPage, ProductPage, ShoppingCartPage } from "../pages";

  
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/men',
        element: <MenPage />,
      },
      {
        path: '/women',
        element: <WomenPage />,
      },
      {
        path: '/products/:productID',
        element: <ProductPage />
      },
      {
        path: '/cart',
        element: <ShoppingCartPage />
      }
    ],
  }
]);

export default router;
