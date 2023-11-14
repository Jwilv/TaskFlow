import { Box, TextField, Button } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import { useContext } from 'react';
import { UIContext } from '@/context';

export const CreateEntry = () => {

    const { closeAddEntry } = useContext(UIContext)

    return (
        <>
            <TextField
                placeholder='New entry'
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                autoFocus
                multiline
                label='New entry'
            />

            <Box display={'flex'} justifyContent='space-between'>
                <Button
                    onClick={closeAddEntry}
                >Cancel</Button>

                <Button
                    variant='outlined'
                    endIcon={<SaveIcon />}
                >Save</Button>

            </Box>
        </>
    )
}
