import { useState } from 'react';
import { Alert, AlertTitle, Collapse, Button, Stack } from '@mui/material';
import { Check } from '@mui/icons-material';

export default function AlertComponent() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <h4>Alert Component</h4>
      <Stack spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is an error alert — check it out!</Alert>
        <Alert severity="info">This is an error alert — check it out!</Alert>
        <Alert severity="success">This is an error alert — check it out!</Alert>
        <Collapse in={open}>
          <Alert icon={<Check />} severity="success" onClose={_ => setOpen(!open)}>
            <AlertTitle>Success</AlertTitle>
            This is an error alert — check it out!
          </Alert>
        </Collapse>
        <Button
          variant="contained"
          onClick={_ => setOpen(true)}
          disabled={open === true}
        >
          RE-OPEN
        </Button>
      </Stack>
    </>
  )
}
