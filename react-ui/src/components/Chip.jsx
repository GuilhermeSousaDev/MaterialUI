import { Chip, Stack, Avatar } from '@mui/material';
import { Done, Delete, Face } from '@mui/icons-material';

export default function ChipComponent() {
  return (
    <>
      <h4>Chip Component</h4>
      <Stack direction="row" spacing={2}>
        <Chip
          color="primary"
          label="Clickable Deletable"
          onClick={() => console.log("Clicked")}
          onDelete={() => console.log("Deleted")}
          deleteIcon={<Done />}
        />
        <Chip
          color="success"
          label="Clickable Deletable"
          variant="outlined"
          onClick={() => console.log("Clicked")}
          onDelete={() => console.log("Deleted")}
          deleteIcon={<Delete />}
        />
        <Chip
          label="Avatar"
          avatar={<Avatar src="https://mui.com/static/images/avatar/3.jpg" />}
          onDelete={() => console.log("Deleted")}
          deleteIcon={<Done />}
        />
        <Chip
          label="With Icon"
          icon={<Face />}
          onDelete={() => console.log("Deleted")}
          deleteIcon={<Done />}
        />
      </Stack>
      <hr />
    </>
  )
}
