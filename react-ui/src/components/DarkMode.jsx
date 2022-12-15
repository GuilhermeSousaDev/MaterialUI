import { useState, useCallback } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Switch, FormControlLabel } from '@mui/material';

export default function DarkMode() {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
        mode: mode,
    },
  });

  const handleThemeMode = useCallback((e) => {
      const lightMode = e.target.checked;

      const newMode = lightMode ? 'dark' : 'light';

      setMode(newMode);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <h4>Dark Mode</h4>

      <FormControlLabel
        control={<Switch onChange={handleThemeMode} />}
        label="Dark Mode"
      />

      <CssBaseline />
      <main>This app is using the dark mode</main>
    </ThemeProvider>
  )
}
