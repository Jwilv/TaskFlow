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

    const addNewEntry = async (description: string, status: EntryStatus) => {
        const { data } = await entriesApi.post<{ entry: Entry }>('/entries', { description, status });
        const { entry: newEntry } = data;
        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
    }

    const updateEntry = async ({ status, description, _id }: Entry) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
            dispatch({ type: 'Update-Entry', payload: data });
        } catch (error) {
            console.log({ error });
        }
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