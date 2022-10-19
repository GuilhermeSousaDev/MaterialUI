import { useState, useCallback } from 'react';
import { Stack, Slider } from '@mui/material';
import { VolumeUp, VolumeDown } from '@mui/icons-material';

export default function SliderComponent() {
  const [value, setValue] = useState(10);

  const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

  const handleChange = useCallback((e, newValue) => setValue(newValue), [value]);

  return (
    <>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }}>
        <VolumeDown onClick={_ => setValue(prevState => prevState - 10)} />
        <Slider value={value} onChange={handleChange} />
        <VolumeUp onClick={_ => setValue(prevState => prevState + 10)} />
        { value }
      </Stack>
      <Slider disabled defaultValue={value} />
      <Slider color="secondary" defaultValue={20} step={10} marks={marks} />
    </>
  )
}
