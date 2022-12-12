import { Typography } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { red, blue, green, purple } from '@mui/material/colors';

export default function BreakPointsTheme() {
  const breakPointTheme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  });

  const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('tablet')]: {
      backgroundColor: red[500],
    },
    [theme.breakpoints.up('tablet')]: {
      backgroundColor: purple[500],
    },
    [theme.breakpoints.up('laptop')]: {
      backgroundColor: blue[500],
    },
    [theme.breakpoints.up('desktop')]: {
      backgroundColor: green[500],
    },
  }));

  return (
    <ThemeProvider theme={breakPointTheme}>
      <h4>BreakPoints Theme</h4>

      <Root>
        <Typography>down(md): red</Typography>
        <Typography>up(md): blue</Typography>
        <Typography>up(lg): green</Typography>
      </Root>
    </ThemeProvider>
  )
}
