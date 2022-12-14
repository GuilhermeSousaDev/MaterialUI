import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function PaperComponent() {
  return (
    <>
      <h4>Paper Component</h4>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={0} />
        <Paper square />
        <Paper elevation={3} />
        <Paper elevation={16} />
      </Box>
    </>
  );
}
