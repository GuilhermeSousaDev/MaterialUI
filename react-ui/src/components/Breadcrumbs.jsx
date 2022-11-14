import { Breadcrumbs, Link, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

export default function BreadcrumbsComponent() {
  return (
    <>
      <h4>Breadcrumbs Component</h4>
      <Breadcrumbs separator={<NavigateNext />}>
        <Link underline="hover" color="inherit" href="#">MUI</Link>
        <Link underline="hover" color="inherit" href="#core">Core</Link>
        <Typography color="text.secondary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </>
  )
}
