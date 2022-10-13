import { Autocomplete, TextField } from '@mui/material';

export default function AutocompleteComponent() {
    const options = [
        { label: 'Fight Club', id: 1, firstLetter: 'F' },
        { label: 'The Godfather', id: 2, firstLetter: 'T' },
        { label: 'Pulp Fiction', id: 3, firstLetter: 'P' },
        { label: 'The Batman', id: 4, firstLetter: 'T' }
      ]

    return (
        <>
            <h4>Autocomplete Component</h4>
            <Autocomplete
                disablePortal
                options={options}
                getOptionDisabled={option => option.id === 2}
                groupBy={option => option.firstLetter}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <hr />
        </>
    )
}
