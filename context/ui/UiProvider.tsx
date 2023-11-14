import { useReducer } from "react";
import { UIContext } from ".";
import { uiReducer } from "./uiReducer";



export interface UIState {
    openSidebar: boolean;
    isAdding: boolean;
}

const UI_INITIAL_STATE: UIState = {
    openSidebar: false,
    isAdding: false,
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const UIProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openMenuSidebar = () => dispatch({ type: 'UI-Open Sidebar' })

    const closeMenuSidebar = () => dispatch({ type: 'UI-Close Sidebar' })

    const openAddEntry = () => dispatch({ type: 'UI-Open AddEntry' })

    const closeAddEntry = () => dispatch({ type: 'UI-Close AddEntry' })

    return (
        <UIContext.Provider
            value={{
                ...state,
                openMenuSidebar,
                closeMenuSidebar,
                openAddEntry,
                closeAddEntry,
            }}
        >
            {children}
        </UIContext.Provider>
    )
}