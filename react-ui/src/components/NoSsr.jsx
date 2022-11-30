import { NoSsr, Box } from '@mui/material';

export default function NoSsrComponent() {
  return (
    <>
      <h4>No Ssr</h4>

      <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        Server and Client
      </Box>
      <NoSsr>
        <Box
          sx={{ p: 2, bgcolor: 'secondary.main', color: 'secondary.contrastText' }}
        >
          Client only
        </Box>
      </NoSsr>
    </>
  )
}
