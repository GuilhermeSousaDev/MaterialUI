import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

export default function Color() {
  const theme = createTheme({
      palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <h4>Color Theme</h4>

      <Button variant="contained">Theme</Button>
    </ThemeProvider>
  )
}
