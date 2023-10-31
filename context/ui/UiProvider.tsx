import { useReducer } from "react";
import { UIContext } from ".";
import { uiReducer } from "./uiReducer";



export interface UIState {
    openSidebar: boolean;
}

const UI_INITIAL_STATE: UIState = {
    openSidebar: false,
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const UIProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    return (
        <UIContext.Provider
            value={{
                openSidebar: false,
            }}
        >
            {children}
        </UIContext.Provider>
    )
}