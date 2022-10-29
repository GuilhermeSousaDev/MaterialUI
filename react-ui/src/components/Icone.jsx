import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Chip, Stack, IconButton } from '@mui/material';
import {
  Phone,
  Home,
  Battery20,
  Battery30,
  Battery50,
  Battery60,
  Battery80,
  Battery90,
  BatteryFull,
  Cameraswitch,
  KeyboardVoice
} from '@mui/icons-material';

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
      <h4>Material Icons + 2000 icons</h4>

      <Stack direction="row" spacing={2}>
        <Battery20 />
        <Battery30 />
        <Battery50 />
        <Battery60 />
        <Battery80 />
        <Battery90 />
        <BatteryFull />
        <KeyboardVoice />
        <IconButton color="primary"> <Cameraswitch /> </IconButton>
      </Stack>
    </>
  )
}
