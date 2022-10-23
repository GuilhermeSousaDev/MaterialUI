import { useState, useCallback } from 'react';
import { AccountCircle } from '@mui/icons-material';
import { TextField, Stack, InputAdornment } from '@mui/material';

export default function TextFieldComponent() {
  const [props, setProps] = useState({
    id: "standard-basic",
    label: "TextField",
    variant: "outlined",
    multiline: true,
  });

  const pushError = useCallback(e => {
    if (e.target.value.toLowerCase() === 'hello world') {
      setProps({
        ...props,
        error: true,
        helperText: "Incorrect Entry",
        label: "Error",
      });
    } else {
      setProps({
        id: "standard-basic",
        label: "TextField",
        variant: "outlined",
        multiline: true,
      });
    }
  }, [props]);

  return (
    <>
      <Stack spacing={1}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField
          { ...props }
          onChange={pushError}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <hr />
    </>
  )
}
