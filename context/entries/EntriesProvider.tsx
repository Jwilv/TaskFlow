import { useReducer, useEffect } from "react"
import { EntriesContext, entriesReducer } from "."
import { v4 as uuid } from 'uuid'
import { Entry, EntryStatus } from "@/interfaces"
import { entriesApi } from "@/apis"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: []
}

export const EntriesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    const addNewEntry = (description: string, status: EntryStatus) => {
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

    const refreshEntries = async () => {
        const { data } = await entriesApi.get<{ entries: Entry[] }>('/entries');
        dispatch({ type: "Refresh-Entries", payload: data.entries });
    }

    useEffect(() => {
        refreshEntries();
    }, [])


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