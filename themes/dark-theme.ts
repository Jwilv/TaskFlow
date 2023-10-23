import { createTheme } from "@mui/material";


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#4d4d4d',
    },
    primary: {
      main: '#9a9a9a',
    },
    secondary: {
      main: '#747474',
    },
    error: {
      main: '#ff1744',
    }
  },

  components: {
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: '#272727'
        }
      }
    },
  },

});