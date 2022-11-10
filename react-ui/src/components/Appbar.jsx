import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';

export default function AppbarComponent() {
  return (
    <>
      <h4>Appbar Component</h4>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start">
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
