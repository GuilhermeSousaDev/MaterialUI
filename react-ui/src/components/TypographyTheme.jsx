import { Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

export default function TypographyTheme() {
  let theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 13,
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: 'italic',
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <h4>Typography Theme</h4>

      <Typography variant="subtitle1">subtitle</Typography>
      <Typography>body1</Typography>
      <Button>Button</Button>
    </ThemeProvider>
  )
}
