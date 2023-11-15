import { Box, TextField, Button } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import { useContext, useState, ChangeEvent } from 'react';
import { EntriesContext } from '@/context/entries';
import { EntryStatus } from '@/interfaces';

interface Props {
    status: EntryStatus;
    onClickCancel: () => void;
}

export const CreateEntry = ({ status, onClickCancel }: Props) => {

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const { addNewEntry } = useContext(EntriesContext);

    const onChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        setTouched(true);
        if (inputValue.length <= 0) return;
        addNewEntry(inputValue, status);
        onClickCancel();
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
                value={inputValue}
            />

            <Box display={'flex'} justifyContent='space-between'>
                <Button
                    onClick={onClickCancel}
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
