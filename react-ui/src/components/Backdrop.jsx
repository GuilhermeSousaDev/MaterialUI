import { useState, useCallback } from 'react';
import { Backdrop, Button, CircularProgress, Typography } from '@mui/material';

export default function BackdropComponent() {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, []);

  return (
    <>
      <h4>Backdrop Component</h4>
      <Button onClick={handleOpen}>Show Backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}
