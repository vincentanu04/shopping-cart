import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages";
import Layout from "../pages/Layout";


  
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/clothes',
        element: 1,
      }
    ],
  }
]);

export default router;
