import { Tooltip, IconButton, Stack, Zoom, Fade } from '@mui/material';
import { Delete, Add } from '@mui/icons-material';

export default function TooltipComponent() {
  return (
    <>
      <h4>Tooltip Component</h4>
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
