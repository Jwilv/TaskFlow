import { Entry } from "@/interfaces";
import { EntriesState } from ".";

type ActionType = | { type: '[Entry] Add-Entry', payload: Entry }
    | { type: 'Update-Entry' }
    | { type: 'Delete-Entry' }

export const entriesReducer = (state: EntriesState, action: ActionType): EntriesState => {

    switch (action.type) {
        case "[Entry] Add-Entry":
            return {
                ...state,
                entries : [ ...state.entries, action.payload ] 
            }

        default: return state;
    }
}