import { Paper, List } from "@mui/material"

export const EntryList = () => {
    return (
        //aca vamos a hacer un drop
        <div>

            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', }}>

                <List sx={{ opacity: 1 }}>

                </List>

            </Paper>

        </div>
    )
}
