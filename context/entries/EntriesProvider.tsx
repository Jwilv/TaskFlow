import { useReducer } from "react"
import { EntriesContext, entriesReducer } from "."
import { Entry } from "@/interfaces"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE : EntriesState = {
    entries: []
}

export const EntriesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    <EntriesContext.Provider value={{ ...state }}>
        { children }
    </EntriesContext.Provider>
}