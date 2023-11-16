import { Entry, EntryStatus } from "@/interfaces";
import { createContext } from "react";


interface EntriesContextProps {
    entries: Entry[];
    addNewEntry: (description: string, status : EntryStatus) => void;
    updateEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext( {} as EntriesContextProps) 