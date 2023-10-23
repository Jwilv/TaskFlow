import { createTheme } from "@mui/material";


export const lightTheme = createTheme({
    palette: {
      mode : 'light',
      background:{
        default : '#e0e0e0'
      },
      primary:{
        main : '#4a148c',
      },
      secondary:{
        main : '#19857b',
      },
      error:{
          main : '#ff1744',
      }
    }
  });