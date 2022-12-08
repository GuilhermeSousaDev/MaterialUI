import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Button } from '@mui/material';

export default function Palette() {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
         main: '#11cb5f',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <h4>Palette</h4>

      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button color="neutral" variant="contained">Neutral</Button>
    </ThemeProvider>
  )
}
