import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
  List,
  ListSubheader
} from '@mui/material';
import { Send } from '@mui/icons-material';

export default function ListComponent() {
  return (
    <>
      <h4>List Component</h4>
      <List subheader={<ListSubheader>Settings</ListSubheader>}>
        <ListItemButton component="a" href="#simple-test">
          <ListItemText primary="spam" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-test">
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="spam" secondary="Send Message" />
          <ListItemIcon>
            <Send />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </>
  )
}
