import { Container, Box } from '@mui/material';

export default function ContainerComponent() {
  return (
    <>
      <h4>Container Component</h4>

      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' }}></Box>
      </Container>
    </>
  )
}
