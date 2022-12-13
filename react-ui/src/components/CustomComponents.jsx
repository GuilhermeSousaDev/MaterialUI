import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

export default function CustomComponents() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                backgroundColor: '#202020',
                color: '#fff',
              }),
              fontSize: '1rem',
          }),
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <h4>Custom Components</h4>

      <Button
        variant="contained"
        color="primary"
      >
        This button has disabled ripples
      </Button>
    </ThemeProvider>
  )
}
