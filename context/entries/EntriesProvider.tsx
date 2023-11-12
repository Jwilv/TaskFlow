import { useReducer } from "react"
import { EntriesContext, entriesReducer } from "."

interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface EntriesState {
    entries: []
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