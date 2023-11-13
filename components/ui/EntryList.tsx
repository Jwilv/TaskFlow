import { Paper, List } from "@mui/material"
import { EntryCard } from "."

export const EntryList = () => {
    return (
        //aca vamos a hacer un drop
        <div>

            <Paper
                sx={{ height: 'calc(100vh - 180px)', backgroundColor: 'transparent',overflow: 'scroll', '::-webkit-scrollbar': { display: 'none' } }}
                
            >

                <List sx={{ opacity: 1 }}>
                    <EntryCard />

                    <EntryCard />

                </List>

            </Paper>

        </div>
    )
}
