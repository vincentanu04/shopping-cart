import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
          },
        },
      },
    },
    palette: {
      primary: {
        main: '#37f5bc',
        // #eba41e  
      },
      secondary: {
        main: '#93d1f5',
        light: '#f3fffd',
      },
      background: {
        default: '#edfcfa'
      },
      accent: {
        main: '#eba41e',
        dark: '#966a18'
      },
      text:{
        primary: '#0c0901'
      },
    },
});

export default theme;