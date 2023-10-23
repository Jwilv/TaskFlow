import { createTheme } from "@mui/material";


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f0ecfa'
    },
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#d3c7f0',
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
          backgroundColor: '#c4b4eb'
        }
      }
    },
  },

});