import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Chip, Stack } from '@mui/material';
import { Phone, Home } from '@mui/icons-material';

export default function IconeComponent() {
  const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: 'content-box',
          padding: 3,
          paddingTop: 5,
          fontSize: '1.125rem',
        },
      },
    },
  },
});

  return (
    <>
      <h4>Icone Component</h4>

      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={2}>
          <Chip icon={<Phone />} label="Call me" />
          <Chip icon={<Home />} label="Home" />
        </Stack>
      </ThemeProvider>
    </>
  )
}
