import { Box, Button, TextField } from '@mui/material'

import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/LibraryAdd';



export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>

      <Button
      variant='outlined'
      fullWidth
      endIcon={<AddIcon />}
      >
        Add new entry
      </Button>

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
        >Cancel</Button>

        <Button
          variant='outlined'
          endIcon={<SaveIcon />}
        >Save</Button>

      </Box>

    </Box>
  )
}
