import { Link, Drawer, Stack } from '@mui/material';
import { Mail } from '@mui/icons-material';

export default function LinkComponent() {

  return (
    <>
      <h4>Link Component</h4>

      <Stack direction="row" spacing={2}>
        <Link href="#" underline="hover">Link</Link>
        <Link href="#" color="inherit">Inherit</Link>
        <Link href="#" variant="body2">Body2</Link>
      </Stack>
    </>
  )
}
