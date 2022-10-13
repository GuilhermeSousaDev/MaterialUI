import { ButtonGroup, Button } from '@mui/material';

export default function ButtonGroupComponent() {
  return (
    <>
      <h4>Button Group</h4>

      <ButtonGroup sx={{ marginBottom: 5 }} variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <hr />
    </>
  )
}
