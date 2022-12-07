import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Checkbox } from '@mui/material';
import { orange, green } from '@mui/material/colors';

export default function Theming() {
  const theme = createTheme({
    status: {
      any: orange[500]
    }
  });

  const outherTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      }
    }
  });

  const CustomCheckBox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.any,
    '&.Mui-checked': {
      color: theme.status.any,
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      <h4>Theming</h4>

      <CustomCheckBox />

      <ThemeProvider theme={outherTheme}>
        <Checkbox />
      </ThemeProvider>
    </ThemeProvider>
  )
}
