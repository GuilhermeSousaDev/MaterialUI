import { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatColorFill,
  ArrowDropDown
} from '@mui/icons-material';

export default function ToggleButtonComponent() {
  const [formats, setFormats] = useState(['bold', 'italic']);

  return (
    <>
      <h4>Toggle Button Component</h4>
      <ToggleButtonGroup
        value={formats}
        onChange={(e, newFormats) => setFormats(newFormats)}
      >
        <ToggleButton value="bold">
          <FormatBold />
        </ToggleButton>
        <ToggleButton value="italic">
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlined />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFill />
          <ArrowDropDown />
        </ToggleButton>
      </ToggleButtonGroup>
      <hr />
    </>
  )
}
