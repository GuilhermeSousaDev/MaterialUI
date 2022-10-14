import { useState } from 'react';
import { Stack, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export default function CheckboxComponent() {
  const [checked, setChecked] = useState('false');

  return (
    <>
      <h4>Checkbox</h4>
      <Stack direction="align" spacing={2}>
        <Checkbox />
        <Checkbox defaultChecked />
        <Checkbox disabled />
        <Checkbox disabled checked />
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      </Stack>
      <h4>FormGroup Checkbox</h4>

      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Checkbox" />
        <FormControlLabel
          onChange={e => setChecked(e.target.checked.toString())}
          control={<Checkbox />}
          label={checked}
        />
      </FormGroup>
      <hr />
    </>
  )
}
