import { DragEvent } from "react"

import { Paper, List } from "@mui/material"
import { EntryCard } from "."
import { EntryStatus } from "@/interfaces"
import { useContext, useMemo } from "react"
import { EntriesContext } from "@/context/entries"
import { UIContext } from "@/context"

import styles from './entryList.module.css'

interface Props {
    status: EntryStatus
}

export const EntryList = ({ status }: Props) => {

    const { entries, updateEntry } = useContext(EntriesContext);

    const { isDragging, setDragging } = useContext(UIContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    const allowEntry = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        const entry = entries.find(entrie => entrie._id === id)!;
        entry.status = status;
        updateEntry(entry);
        setDragging(false);
    }

    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowEntry}
        >

            <Paper
                sx={{ height: 'calc(100vh - 180px)', backgroundColor: 'transparent', overflow: 'scroll', '::-webkit-scrollbar': { display: 'none' } }}
                className={isDragging ? styles.dragging : ''}
            >
                <List
                    sx={{ opacity: isDragging ? 0.4 : 1 }}
                >
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
