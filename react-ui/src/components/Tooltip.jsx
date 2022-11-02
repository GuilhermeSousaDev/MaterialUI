import { Tooltip, IconButton, Stack, Zoom, Fade, Typography } from '@mui/material';
import { Delete, Add } from '@mui/icons-material';

export default function TooltipComponent() {
  return (
    <>
      <Typography variant="h6" mt={9}>Tooltip Component</Typography>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Delete" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" arrow TransitionComponent={Zoom}>
          <IconButton>
            <Add />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  )
}
