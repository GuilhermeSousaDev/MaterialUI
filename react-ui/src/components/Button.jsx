import { useState } from "react";
import { Button, IconButton, Stack } from "@mui/material";
import { Delete, Send, AddShoppingCart } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

export default function ButtonComponent() {
    const [size, setSize] = useState('medium');
    const [loading, setLoading] = useState(false);

    return (
        <>
            <h4>Button Component</h4>
            <Stack direction="row" spacing={2}>
              <span onClick={_ => setSize('small')}>small</span>
              <span onClick={_ => setSize('medium')}>medium</span>
              <span onClick={_ => setSize('large')}>large</span>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="warning">Contained</Button>
              <Button variant="text" color="primary">Text</Button>
              <Button variant="outlined" color="error">Outlined</Button>
              <Button variant="contained" size={size}>{size}</Button>
            </Stack>
            <h4>Button Icons</h4>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" startIcon={<Delete />}> Delete </Button>
              <Button variant="contained" endIcon={<Send />}>Send</Button>
              <IconButton color="primary">
                  <AddShoppingCart />
              </IconButton>
            </Stack>
            <h4>Loading Button</h4>
            <Stack direction="row" spacing={2}>
              <LoadingButton loading variant="outlined">
                  Submit
              </LoadingButton>
              <LoadingButton
                  onClick={_ => setLoading(true)}
                  variant="contained"
                  loading={loading}
                  startIcon={<Send />}
                  loadingPosition="start"
              >
                  Save
              </LoadingButton>
            </Stack>
            <hr />
        </>
    )
}
