import { Box, Button, TextField } from '@mui/material'

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



    </Box>
  )
}
