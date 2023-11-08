import { createContext } from "react";


interface EntriesContextProps {
    entries: []; //todo : falta el tipo de entry
}

export const EntriesContext = createContext( {} as EntriesContextProps) 