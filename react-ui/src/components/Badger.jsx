import { useState } from 'react';
import { Badge, Stack, IconButton, ButtonGroup, Button } from '@mui/material';
import { Mail, ShoppingCart, Add, Remove } from '@mui/icons-material';

export default function BadgeComponent() {
  const [count, setCount] = useState(1);

  return (
    <>
      <h4>Badge Component</h4>
      <Stack direction="row" spacing={3}>
        <Badge badgeContent={count} color="primary" invisible={count <= 0} max={9}>
          <Mail />
        </Badge>
        <ButtonGroup>
          <Button onClick={_ => setCount(count - 1)}>
            <Remove fontSize="small" />
          </Button>
          <Button onClick={_ => setCount(count + 1)}>
            <Add fontSize="small" />
          </Button>
        </ButtonGroup>
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Stack>
      <hr />
    </>
  )
}
