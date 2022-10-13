import { Stack } from '@mui/material';
import AutocompleteComponent from './components/Autocomplete';
import ButtonComponent from './components/Button';
import ButtonGroupComponent from './components/ButtonGroup';
import CheckboxComponent from './components/Checkbox';

function App() {

  return (
    <Stack sx={{ marginTop: 5, marginBottom: 5 }}>
      <AutocompleteComponent />
      <ButtonComponent />
      <ButtonGroupComponent />
      <CheckboxComponent />
    </Stack>
  )
}

export default App;
