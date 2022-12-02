import { useState } from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
export default function PopperComponent() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <h4>Popper Component</h4>
      <button type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.
        </Box>
      </Popper>
    </div>
  );
}
