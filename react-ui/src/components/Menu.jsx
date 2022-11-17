import { useState } from 'react';
import { Menu, MenuItem, Button, Divider, ListItemIcon } from '@mui/material';
import { AccountCircle, Logout, PersonAdd, Settings } from '@mui/icons-material';

export default function MenuComponent() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = e => {
    setAnchorEl(e.target);
    setOpen(true);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  }

  return (
    <>
      <h4>Menu Component</h4>

      <Button onClick={handleOpen}>Dashboard</Button>
      <Menu open={open} anchorEl={anchorEl}>
        <MenuItem onClick={handleClose}><AccountCircle /> Profile</MenuItem>
        <MenuItem onClick={handleClose}><AccountCircle /> My account</MenuItem>
        <MenuItem onClick={handleClose}><Logout /> Logout</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add Account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
