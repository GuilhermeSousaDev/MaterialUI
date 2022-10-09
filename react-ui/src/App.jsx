import { Button, Autocomplete, TextField, useAutocomplete } from '@mui/material';

function App() {
  const options = [
    { label: 'Fight Club', id: 1, firstLetter: 'F' },
    { label: 'The Godfather', id: 2, firstLetter: 'T' },
    { label: 'Pulp Fiction', id: 3, firstLetter: 'P' },
    { label: 'The Batman', id: 4, firstLetter: 'T' }
  ]

  return (
    <div className="App">
      <Button variant='contained'>MUI</Button>
      <Autocomplete 
        disablePortal
        options={options}
        getOptionDisabled={option => option.id === 2}
        groupBy={option => option.firstLetter}
        sx={{ width: 300, marginTop: 10 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  )
}

export default App;
