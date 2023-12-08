import { createBrowserRouter } from "react-router-dom";
import { Homepage, MenPage } from "../pages";
import Layout from "../pages/Layout";
import WomenPage from "../pages/WomenPage";


  
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
      }
    ],
  }
]);

export default router;
