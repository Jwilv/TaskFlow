import { Box } from '@mui/material'
import { AddEntry } from './AddEntry'
import { CreateEntry } from './CreateEntry'
import { useState } from 'react';
import { EntryStatus } from '@/interfaces'


interface Props {
  status?: EntryStatus
}


export const NewEntry = ({ status = 'pending' }: Props) => {

  const [isAdding, setIsAdding] = useState(false);

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>

      {
        isAdding
          ?
          <CreateEntry status={status} onClickCancel={() => setIsAdding(false)} />
          :
          <AddEntry onClick={() => setIsAdding(true)} />
      }

    </Box>
  )
}
