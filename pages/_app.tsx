import '@/styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'

const basictheme = createTheme({
  palette: {
    mode : 'dark'
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={basictheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
