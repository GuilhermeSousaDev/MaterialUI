import { useState } from 'react';
import { Popover, Button, Typography } from '@mui/material';

export default function PopoverComponent() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <h4>Popover Component</h4>

      <Button variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </>
  )
}
