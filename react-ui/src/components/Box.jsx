import { Box, Button } from '@mui/material';

export default function BoxComponent() {
  return (
    <>
      <h4>Box Component</h4>

      <Box
        component="span"
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Button>Save</Button>
      </Box>
    </>
  )
}
