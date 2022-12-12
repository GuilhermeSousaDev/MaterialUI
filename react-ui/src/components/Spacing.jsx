import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export default function SpacingTheme() {
  const theme = createTheme({
    spacing: 4,
  });

  theme.spacing(2);

  return (
    <ThemeProvider theme={theme}>
      <h4>Spacing Theme</h4>

      <Typography>Spacing</Typography>
    </ThemeProvider>
  )
}
