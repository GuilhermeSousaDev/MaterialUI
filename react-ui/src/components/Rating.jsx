import { useState } from 'react';
import { Typography, Rating } from '@mui/material';

export default function RatingComponent() {
  const [value, setValue] = useState(2);

  return (
    <>
      <Typography component="legend">Controlled</Typography>
      <Rating
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      />
      <Typography component="legend">Read Only</Typography>
      <Rating value={value} readOnly />

      <Typography component="legend">Disabled</Typography>
      <Rating value={value} disabled />

      <Typography component="legend">No Rating Given</Typography>
      <Rating value={null} />

      <Typography component="legend">Floating Rating</Typography>
      <Rating defaultValue={2.5} precision={0.5} />
    </>
  )
}
