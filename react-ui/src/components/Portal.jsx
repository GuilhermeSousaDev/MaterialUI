import { Portal, Box } from '@mui/material';
import { useState, useRef } from 'react';

export default function PortalComponent() {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <>
      <h4>Portal Component</h4>

      <button type="button" onClick={handleClick}>
        {show ? 'Unmount children' : 'Mount children'}
      </button>

      <Box sx={{ p: 1, my: 1, border: '1px solid' }}>
        It looks lke I will render here.
        { show ? (
          <Portal container={containerRef.current}>
            <span>But I actually render here!</span>
          </Portal>
        ) : null }
      </Box>
      <Box sx={{ p: 1, my: 1, border: '1px solid' }} ref={containerRef} />
    </>
  )
}
