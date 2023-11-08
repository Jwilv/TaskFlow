import { EntriesContext } from "."

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
    <EntriesContext.Provider value={{ entries: [] }}>
        { children }
    </EntriesContext.Provider>
}