import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function TypographyComponent() {
  return (
    <>
      <h4>Typography Component</h4>
      <Stack spacing={2}>
        <Div>{"This div's text looks like that of a button."}</Div>
        <Typography variant="h6" component="h6">
          h1. Heading
        </Typography>
      </Stack>
    </>
  )
}
