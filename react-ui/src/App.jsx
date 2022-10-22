import { Stack } from '@mui/material';
import AutocompleteComponent from './components/Autocomplete';
import ButtonComponent from './components/Button';
import ButtonGroupComponent from './components/ButtonGroup';
import CheckboxComponent from './components/Checkbox';
import FloatingButtonComponent from './components/FloatingButton';
import RadioButtonComponent from './components/RadioButton';
import RatingComponent from './components/Rating';
import SelectComponent from './components/Select';
import SliderComponent from './components/Slider';
import SwitchComponent from './components/Switch';
import TextFieldComponent from './components/TextField';
import TransferListComponent from './components/TransferList';

function App() {

  return (
    <Stack sx={{ mt: 5, mb: 5 }}>
      <AutocompleteComponent />
      <ButtonComponent />
      <ButtonGroupComponent />
      <CheckboxComponent />
      <FloatingButtonComponent />
      <RadioButtonComponent />
      <RatingComponent />
      <SelectComponent />
      <SliderComponent />
      <SwitchComponent />
      <TextFieldComponent />
      <TransferListComponent />
    </Stack>
  )
}

export default App;
