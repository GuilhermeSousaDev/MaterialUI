import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';

export default function SelectComponent() {
  const [age, setAge] = useState('');

  return (
    <>
      <h4>Select Component</h4>
      <FormControl>
        <InputLabel>Age</InputLabel>
        <Select value={age} onChange={e => setAge(e.target.value)}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <hr />
    </>
  )
}
