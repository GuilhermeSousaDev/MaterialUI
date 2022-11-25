import { Stack, Paper, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function StackComponent() {
  return (
    <>
      <h4>Stack Component</h4>

      <Stack spacing={2} direction="row" divider={<Divider orientation="vertical" flexItem />}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </>
  )
}
