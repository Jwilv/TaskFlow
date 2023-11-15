import { UIContext } from '@/context';
import { Entry } from '@/interfaces';
import { Card, CardActionArea, CardContent, Typography, CardActions } from '@mui/material';
import { DragEvent, useContext } from 'react';

interface Props {
    entry: Entry
}

export const EntryCard = ({ entry }: Props) => {

    const { setDragging } = useContext(UIContext);

    const onDragStart = (event: DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text', entry._id);
        setDragging(true);
    }

    return (
        <Card
            sx={{ marginBottom: 1, }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={() => { setDragging(false) }}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', padding: '3px 7px' }}>
                    <Typography variant='body2'>30 minutes ago</Typography>
                </CardActions>

            </CardActionArea>
        </Card>
    )
}
