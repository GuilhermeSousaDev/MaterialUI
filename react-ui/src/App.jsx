import { Stack } from '@mui/material';
import AutocompleteComponent from './components/Autocomplete';
import ButtonComponent from './components/Button';
import ButtonGroupComponent from './components/ButtonGroup';
import CheckboxComponent from './components/Checkbox';
import FloatingButtonComponent from './components/FloatingButton';
import RadioButtonComponent from './components/RadioButton';

function App() {

  return (
    <Stack sx={{ mt: 5, mb: 5 }}>
      <AutocompleteComponent />
      <ButtonComponent />
      <ButtonGroupComponent />
      <CheckboxComponent />
      <FloatingButtonComponent />
      <RadioButtonComponent />
    </Stack>
  )
}

export default App;
