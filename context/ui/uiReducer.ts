import { UIState } from ".";

type UIActionType =
    | { type: 'UI-Open Sidebar' }
    | { type: 'UI-Close Sidebar' }
    | { type: 'UI Set-Dragging', payload: boolean; }

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

        case 'UI Set-Dragging':
            return {
                ...state,
                isDragging: action.payload,
            }

        default: return state;
    }
}