import { TextareaAutosize } from '@mui/material';

export default function TextareaAutoSizeComponent() {
  return (
    <>
      <h4>TextareaAutoSize Component</h4>

      <TextareaAutosize
        minRows={3}
        placeholder="Minimum 3 rows"
        style={{ width: 200 }}
      />
    </>
  )
}
