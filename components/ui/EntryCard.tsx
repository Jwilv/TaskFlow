import { Card, CardActionArea, CardContent, Typography, CardActions } from '@mui/material';


export const EntryCard = () => {
    return (
        <Card
            sx={{ marginBottom: 1, }}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>this is the description</Typography>
                </CardContent>

                <CardActions>
                    <Typography variant='body2'>30 minutes ago</Typography>
                </CardActions>

            </CardActionArea>
        </Card>
    )
}
