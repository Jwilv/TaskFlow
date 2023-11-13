import { Entry } from '@/interfaces';
import { Card, CardActionArea, CardContent, Typography, CardActions } from '@mui/material';

interface Props {
    entry: Entry
}

export const EntryCard = ({ entry }: Props) => {
    return (
        <Card
            sx={{ marginBottom: 1, }}
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
