import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function MediaQuery() {
  const theme = useTheme();
  const matches = useMediaQuery('(min-width:600px)');
  const matchesTheme = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <h4>MediaQuery</h4>

      <span>{`(min-width:600px) matches: ${matches}`}</span>;
      <span>{`theme.breakpoints.up('sm') matches: ${matchesTheme}`}</span>;
    </>
  )
}
