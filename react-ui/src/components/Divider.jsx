import { List, ListItem, Divider, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
import { Image } from '@mui/icons-material';

export default function DividerComponent() {
  return (
    <>
      <h4>Divider</h4>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Inbox" />
          <Divider />
        </ListItem>
        <ListItem button divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
        <Divider textAlign="center">Center</Divider>
        <ListItem divider>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
      </List>
    </>
  )
}
