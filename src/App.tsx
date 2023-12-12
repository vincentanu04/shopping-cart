import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet, RouterProvider } from 'react-router-dom';
import router from './routes/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router}>
          <Outlet />
      </RouterProvider>CssBaseline
    </ThemeProvider>
  );
}

export default App;