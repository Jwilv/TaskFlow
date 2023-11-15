import { Entry, EntryStatus } from "@/interfaces";
import { createContext } from "react";


interface EntriesContextProps {
    entries: Entry[];
    addNewEntry: (description: string, status : EntryStatus) => void;
}

export const EntriesContext = createContext( {} as EntriesContextProps) 