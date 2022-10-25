import { Avatar, Stack, FormControl, FormControlLabel } from '@mui/material';
import { Pageview } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

export default function AvatarComponent() {
  return (
    <>
      <h4>Avatar Component</h4>
      <Stack direction="row" spacing={2}>
        <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
        <Avatar src="https://mui.com/static/images/avatar/3.jpg" />
        <FormControl>
          <FormControlLabel
            label="Cindy Baker"
            labelPlacement="bottom"
            control={<Avatar src="https://mui.com/static/images/avatar/3.jpg" />}
          />
        </FormControl>
        <Avatar variant="rounded">H</Avatar>
        <Avatar variant="square">GA</Avatar>
        <Avatar>
          <Pageview />
        </Avatar>
      </Stack>
      <hr />
    </>
  )
}
