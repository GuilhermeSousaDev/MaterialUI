import { useState, useEffect } from 'react';
import { Skeleton, Box } from '@mui/material';

export default function SkeletonComponent() {
  const [item, setItem] = useState(false);

  useEffect(() => {
    setTimeout(() => setItem(true), 1000);
  }, []);

  return (
    <>
      <h4>Skeleton Component</h4>
      { item ?
        <img
          width={210}
          height={118}
          src='https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_960_720.jpg'
        /> :
        <Skeleton variant="rect" width={210} height={118} />
      }
      <Box mt={2}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} animation={false} />
        <Skeleton sx={{ mt: 2 }} variant="rounded" width={210} height={60} animation="wave" />
      </Box>
    </>
  )
}
