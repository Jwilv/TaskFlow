import { deflate } from "zlib";
import { UIState } from ".";

type UIActionType = | { type: 'UI-Open Sidebar' } | { type: 'UI-Close Sidebar' | 'UI-Open AddEntry' | 'UI-Close AddEntry' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case 'UI-Open Sidebar':
            return {
                ...state,
                openSidebar: true,
            }

        case 'UI-Close Sidebar':
            return {
                ...state,
                openSidebar: false,
            }

        case 'UI-Open AddEntry':
            return {
                ...state,
                isAdding: true,
            }

        case 'UI-Close AddEntry':
            return {
                ...state,
                isAdding: false,
            }

        default: return state;
    }
}