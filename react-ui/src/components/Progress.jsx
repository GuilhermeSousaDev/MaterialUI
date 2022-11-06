import { useState, useEffect } from 'react';
import { CircularProgress, Stack, LinearProgress } from '@mui/material';

export default function ProgressComponent() {
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => prev >= 100? 5 : prev + 5);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h4>Progress Component</h4>
      <Stack direction="row" spacing={2}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress variant="determinate" value={progress} />
      </Stack>
      <Stack sx={{ mt: 7 }} spacing={2}>
        <LinearProgress />
        <LinearProgress variant="determinate" value={progress} />
      </Stack>
    </>
  )
}
