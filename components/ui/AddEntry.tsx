import { Button } from '@mui/material'


import AddIcon from '@mui/icons-material/LibraryAdd';
import { useContext } from 'react';
import { UIContext } from '@/context';

export const AddEntry = () => {

    const { openAddEntry } = useContext(UIContext)

    return (
        <Button
            variant='outlined'
            fullWidth
            endIcon={<AddIcon />}
            onClick={openAddEntry}
        >
            Add new entry
        </Button>
    )
}
