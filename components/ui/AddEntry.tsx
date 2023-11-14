import { Button } from '@mui/material'


import AddIcon from '@mui/icons-material/LibraryAdd';

export const AddEntry = () => {
    return (
        <Button
            variant='outlined'
            fullWidth
            endIcon={<AddIcon />}
        >
            Add new entry
        </Button>
    )
}
