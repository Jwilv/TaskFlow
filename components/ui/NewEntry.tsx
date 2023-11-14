import { Box } from '@mui/material'
import { AddEntry } from './AddEntry'
import { CreateEntry } from './CreateEntry'





export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>

<AddEntry/> 

<CreateEntry /> 



    </Box>
  )
}
