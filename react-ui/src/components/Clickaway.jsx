import { useState } from 'react';
import { ClickAwayListener, Box } from '@mui/material';

export default function ClickAwayComponent() {
  const [open, setOpen] = useState(false);

  const styles = {
      position: 'absolute',
      top: 28,
      right: 0,
      left: 0,
      zIndex: 1,
      border: '1px solid',
      p: 1,
      bgcolor: 'background.paper',
  };

  return (
    <>
      <h4>Click Away Component</h4>

      <ClickAwayListener onClickAway={_ => setOpen(false)}>
        <Box>
          <button type="button" onClick={_ => setOpen(true)}>
            Open menu dropdown
          </button>
          { open ?
            (
              <Box>
                Click me, I will stay visible until you click outside.
              </Box>
            ) : ''
          }
        </Box>
      </ClickAwayListener>
    </>
  )
}
