import { Box } from '@mui/material'
import { AddEntry } from './AddEntry'
import { CreateEntry } from './CreateEntry'
import { useContext } from 'react'
import { UIContext } from '@/context'





export const NewEntry = () => {

  const { isAdding } = useContext(UIContext);

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>

      {
        isAdding ? <CreateEntry /> : <AddEntry />
      }

    </Box>
  )
}
