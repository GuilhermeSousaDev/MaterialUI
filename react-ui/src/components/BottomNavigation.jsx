import { useState } from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Restore, Favorite, LocationOn, Folder } from '@mui/icons-material';

export default function BottomNavigationComponent() {
  const [value, setValue] = useState();

  return (
    <>
      <h4>BottomNavigation Component</h4>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction label="Recents" icon={<Restore />} />
          <BottomNavigationAction label="Favorites" icon={<Favorite />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
          <BottomNavigationAction label="Folder" icon={<Folder />} />
        </BottomNavigation>
      </Box>
    </>
  )
}
