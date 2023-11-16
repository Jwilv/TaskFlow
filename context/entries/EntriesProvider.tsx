import { useReducer } from "react"
import { EntriesContext, entriesReducer } from "."
import { v4 as uuid } from 'uuid'
import { Entry, EntryStatus } from "@/interfaces"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuid(),
            description: 'Test Pending',
            createdAt: Date.now(),
            status: 'pending'
        },
        {
            _id: uuid(),
            description: 'Test In progress',
            createdAt: Date.now() - 1000000,
            status: 'in-progress'
        },
        {
            _id: uuid(),
            description: 'Test Completed',
            createdAt: Date.now() - 10000,
            status: 'finished'
        },
    ]
}

export const EntriesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    const addNewEntry = (description: string, status : EntryStatus) => {
        const newEntry: Entry = {
            _id: uuid(),
            description,
            createdAt: Date.now(),
            status
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
    }

    const updateEntry = (entry: Entry) => {
        dispatch({ type: 'Update-Entry', payload: entry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry,
        }}>
            {children}
        </EntriesContext.Provider>
    );
}