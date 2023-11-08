import { EntriesState } from ".";

type ActionType = | { type: 'Add-Entry' } | { type: 'Update-Entry' } | { type: 'Delete-Entry' }

export const entriesReducer = (state: EntriesState, action: ActionType) => {

    switch (action.type) {
        case 'Add-Entry':

            break;

        case 'Update-Entry':

            break;

        case 'Delete-Entry':

            break;

        default: return state;
    }
}