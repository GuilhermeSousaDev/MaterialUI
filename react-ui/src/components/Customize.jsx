import { useState } from 'react';
import { Slider, FormControlLabel, Switch } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export default function Customize() {
  const [checked, setChecked] = useState(false);

  const CustomSlider = styled(Slider)(({ theme }) => ({
    width: 300,
    color: checked ? theme.palette.success.main : theme.palette.warning.main,
    '& .MuiSlider-thumb': {
      borderRadius: '5px',
      '&:hover, &.Mui-focusVisible': {
        boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.warning.main, 0.16)}`,
      }
    },
    '& .Mui-Active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.warning.main, 0.16)}`,
    }
  }));

  return (
    <>
      <h4>Customize Component</h4>

      <FormControlLabel
        label="Success"
        control={
          <Switch
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
          />
        }
      />

      <CustomSlider defaultValue={50} />
    </>
  )
}
