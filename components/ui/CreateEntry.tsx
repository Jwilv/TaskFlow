import { Box, TextField, Button } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import { useContext, useState, ChangeEvent } from 'react';
import { UIContext } from '@/context';
import { EntriesContext } from '@/context/entries';

export const CreateEntry = () => {

    const { closeAddEntry } = useContext(UIContext)

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const { addNewEntry} = useContext(EntriesContext);

    const onChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    
    const onSave = () => {
        if (inputValue.length <= 0) return;
        addNewEntry(inputValue);
        closeAddEntry();
    }

    return (
        <>
            <TextField
                placeholder='New entry'
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                autoFocus
                multiline
                label='New entry'
                helperText={touched && inputValue.length <= 0 && 'Enter a value'}
                error={touched && inputValue.length <= 0}
                onChange={onChangeTextField}
                onBlur={() => setTouched(true)}
                value={inputValue}
            />

            <Box display={'flex'} justifyContent='space-between'>
                <Button
                    onClick={closeAddEntry}
                >Cancel</Button>

                <Button
                    variant='outlined'
                    endIcon={<SaveIcon />}
                    onClick={onSave}
                >Save</Button>

            </Box>
        </>
    )
}
