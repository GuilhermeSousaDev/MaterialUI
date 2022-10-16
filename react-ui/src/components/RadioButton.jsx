import { RadioGroup, Radio, FormControl, FormControlLabel, FormLabel } from '@mui/material';

export default function RadioButton() {
  return (
    <>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup row defaultValue="Male">
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </>
  )
}
