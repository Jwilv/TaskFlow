import { Entry } from "@/interfaces";
import { EntriesState } from ".";

type ActionType = | { type: '[Entry] Add-Entry', payload: Entry }
    | { type: 'Update-Entry', payload: Entry }
    | { type: 'Delete-Entry' }

export const entriesReducer = (state: EntriesState, action: ActionType): EntriesState => {

    switch (action.type) {
        case "[Entry] Add-Entry":
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }

        case "Update-Entry":
            return {
                ...state,
                entries: state.entries.map(entry => {
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry
                })
            }

        default: return state;
    }
}