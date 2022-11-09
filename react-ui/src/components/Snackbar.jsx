import { useState } from 'react';
import { Snackbar, Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

export default function SnackbarComponent() {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>UNDO</Button>
      <IconButton size="small" color="inherit" onClick={handleClose}>
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <h4>Snackbar Component</h4>
      <Button onClick={_ => setOpen(true)}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </>
  )
}
