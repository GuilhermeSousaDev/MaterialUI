import { Fab, Stack } from '@mui/material';
import { Add, Navigation } from '@mui/icons-material';

export default function FloatingButton() {
  return (
    <>
      <h4>Floating Action Button</h4>
      <Stack direction="row" spacing={2}>
        <Fab color="primary">
          <Add />
        </Fab>
        <Fab variant="extended">
          <Navigation sx={{ mr: 1 }} />
          Navigate
        </Fab>
      </Stack>
      <hr />
    </>
  )
}
