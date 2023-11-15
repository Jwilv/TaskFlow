import { DragEvent } from "react"

import { Paper, List } from "@mui/material"
import { EntryCard } from "."
import { EntryStatus } from "@/interfaces"
import { useContext, useMemo } from "react"
import { EntriesContext } from "@/context/entries"

interface Props {
    status: EntryStatus
}

export const EntryList = ({ status }: Props) => {

    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    const allowEntry = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        console.log(id)
    }

    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowEntry}
        >

            <Paper
                sx={{ height: 'calc(100vh - 180px)', backgroundColor: 'transparent', overflow: 'scroll', '::-webkit-scrollbar': { display: 'none' } }}
            >
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>
            </Paper>

        </div>
    )
}
