import { Button } from '@mui/material'


import AddIcon from '@mui/icons-material/LibraryAdd';

interface Props {
    onClick: () => void;
}

export const AddEntry = ({ onClick }: Props) => {

    return (
        <Button
            variant='outlined'
            fullWidth
            endIcon={<AddIcon />}
            onClick={onClick}
        >
            Add new entry
        </Button>
    )
}
