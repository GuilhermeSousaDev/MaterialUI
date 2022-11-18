import { useState } from 'react';
import { Pagination, Typography } from '@mui/material';

export default function PaginationComponent() {
  const [page, setPage] = useState(1);

  return (
    <>
      <h4>Pagination Component</h4>

      <Typography variant="body2">Page: { page }</Typography>
      
      <Pagination
        count={10}
        page={page}
        onChange={(e, value) => setPage(value)}
        shape="rounded"
        color="secondary"
      />
    </>
  )
}
