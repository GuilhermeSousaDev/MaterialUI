import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export default function DarkMode() {
  const theme = createTheme({
    palette: {
        mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <h4>Dark Mode</h4>

      <CssBaseline />
      <main>This app is using the dark mode</main>
    </ThemeProvider>
  )
}
